import { useContext } from 'react';
import { ContactsContext, SidebarContext } from '../App.jsx';
import SidebarType from '../constants/SidebarType';
import './SidebarHeader.css';

function SidebarHeader() {
    const { resetEditState } = useContext(ContactsContext);
    const { sidebarType, setIsSidebarOpen } = useContext(SidebarContext);

    return (
        <header className="sidebar-header">
            <h2 className="sidebar-header-heading">
                {sidebarType === SidebarType.NEW_CONTACT ? "Добавление контакта" : "Группы контактов"}
            </h2>

            <button className="btn-icon-close" onClick={() => {
                setIsSidebarOpen(false);
                resetEditState();
            }}>
                <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black" />
                </svg>
            </button>
        </header>
    );
}

export default SidebarHeader;