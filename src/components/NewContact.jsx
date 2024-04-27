import { useState, useEffect, useContext } from 'react';
import { InputMask } from '@react-input/mask';
import { ContactsContext } from '../App.jsx';
import Contact from '../classes/Contact';
import './NewContact.css';

function NewContact() {
    const defaultMask = "+7 (___) ___ - __ - __";

    const { contactGroups, setContactGroups, editableContact, isEditingContact, resetEditState } = useContext(ContactsContext);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [group, setGroup] = useState('');
    const [_, setIsFocused] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const isNameValid = (name) => {
        const nameRegex = /^[а-яА-Я\s-]+$/;
        return nameRegex.test(name);
    };

    const isPhoneValid = (phone) => {
        return !phone.includes('_');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isNameValid(name)) {
            setErrorMessage('Имя введено некорректно. Можно использовать только буквы, пробелы и дефисы.');
            return;
        }

        if (!isPhoneValid(phone)) {
            setErrorMessage('Номер телефона введен некорректно.');
            return;
        }

        const groupContacts = contactGroups.get(group) || [];
        if (isEditingContact) {
            const index = groupContacts.findIndex(contact => contact.name === editableContact.name && contact.phone === editableContact.phone);
            if (index !== -1) {
                groupContacts[index] = new Contact(name, phone, group);
            }
        } else {
            groupContacts.push(new Contact(name, phone, group));
        }

        setContactGroups(new Map(contactGroups.set(group, groupContacts)));
        setName('');
        setPhone('');
        setGroup('');
        setErrorMessage('');
        resetEditState();
    };

    const handlePhoneInputFocus = () => {
        setIsFocused(true);
        if (phone === "") {
            setPhone(defaultMask);
        }
    };

    const handlePhoneInputBlur = () => {
        setIsFocused(false);
        if (phone === defaultMask) {
            setPhone("");
        }
    };

    useEffect(() => {
        if (editableContact) {
            setName(editableContact.name);
            setPhone(editableContact.phone);
            setGroup(editableContact.group);
        }
    }, [editableContact]);

    return (
        <>
            <form className="sidebar-form new-contact-form" onSubmit={handleSubmit}>
                <div>
                    <input required type="text" placeholder="Введите ФИО" value={name} onChange={(e) => setName(e.target.value)} />
                    <InputMask required placeholder="Введите номер"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        mask={defaultMask}
                        replacement={{ _: /\d/ }}
                        showMask
                        onFocus={handlePhoneInputFocus}
                        onBlur={handlePhoneInputBlur}
                    />
                    <select className="new-contact-form-select" required value={group} onChange={(e) => setGroup(e.target.value)}>
                        <option value="">Выберите группу</option>
                        {[...contactGroups.keys()].map((group, index) => (
                            <option key={index} value={group}>{group}</option>
                        ))}
                    </select>
                    {errorMessage && <p className="message-error">{errorMessage}</p>}
                </div>

                <footer className="sidebar-form-footer">
                    <button className="btn-text btn-save" type="submit">Сохранить</button>
                </footer>
            </form>
        </>
    );
}

export default NewContact;