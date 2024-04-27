import { useState, useEffect, useRef, createContext } from 'react';
import { CSSTransition } from "react-transition-group";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Contacts from "./components/Contacts.jsx";
import SidebarType from './constants/SidebarType';
import Contact from './classes/Contact';
import './App.css';

export const ContactsContext = createContext(null);
export const SidebarContext = createContext(null);

function App() {
    const [contactGroups, setContactGroups] = useState();
    const [editableContact, setEditableContact] = useState(null);
    const [isEditingContact, setIsEditingContact] = useState(false);

    const [sidebarType, setSidebarType] = useState(SidebarType.NEW_CONTACT);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleEditContact = (contact) => {
        setSidebarType(SidebarType.NEW_CONTACT);
        setIsSidebarOpen(true);
        setEditableContact(contact);
        setIsEditingContact(true);
    };

    const handleDeleteContact = (group, index) => {
        const groupContacts = contactGroups.get(group);
        if (groupContacts) {
            groupContacts.splice(index, 1);
            setContactGroups(new Map(contactGroups.set(group, groupContacts)));
        }
    };

    const resetEditState = () => {
        setEditableContact(null);
        setIsEditingContact(false);
    };

    // Сохранение контактов в localStorage при каждом обновлении контактов
    useEffect(() => {
        if (contactGroups !== undefined) {
            const contactData = Array.from(contactGroups.entries()).map(([group, contacts]) =>
                [group, contacts.map(contact => ({ name: contact.name, phone: contact.phone, group: contact.group }))]);
            localStorage.setItem('contacts', JSON.stringify(contactData));
        }
    }, [contactGroups]);

    // Загрузка контактов из localStorage при монтировании компонента
    useEffect(() => {
        const storedContacts = localStorage.getItem('contacts');
        if (storedContacts) {
            const contactData = new Map(JSON.parse(storedContacts));
            const contactGroups = new Map(Array.from(contactData.entries()).map(([group, contacts]) =>
                [group, contacts.map(contact => new Contact(contact.name, contact.phone, contact.group))]));
            setContactGroups(contactGroups);
        }
        else {
            const initialContacts = new Map();
            setContactGroups(initialContacts);
            localStorage.setItem('contacts', JSON.stringify(Array.from(initialContacts.entries())));
        }
    }, []);

    const sidebarNodeRef = useRef(null);

    return (
        <>
            <SidebarContext.Provider value={{
                sidebarType, setSidebarType,
                isSidebarOpen, setIsSidebarOpen
            }}>
                <Header
                    setSidebarType={setSidebarType}
                    setIsSidebarOpen={setIsSidebarOpen} />

                <ContactsContext.Provider value={{
                    contactGroups,
                    setContactGroups,
                    editableContact,
                    isEditingContact,
                    handleEditContact,
                    handleDeleteContact,
                    resetEditState
                }}>
                    <CSSTransition nodeRef={sidebarNodeRef} in={isSidebarOpen}
                        timeout={500} classNames="sidebar-animation" unmountOnExit>
                        <div ref={sidebarNodeRef}>
                            <div className={'backdrop'} />

                            <Sidebar
                                type={sidebarType}
                                isOpen={isSidebarOpen}
                                setIsOpen={setIsSidebarOpen}
                            />
                        </div>
                    </CSSTransition>

                    <main>
                        {contactGroups !== undefined && (
                            <Contacts contactGroups={contactGroups} />
                        )}
                    </main>
                </ContactsContext.Provider>
            </SidebarContext.Provider>
        </>
    )
}

export default App
