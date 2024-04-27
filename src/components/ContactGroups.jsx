import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ContactsContext } from '../App.jsx';
import './ContactGroups.css';

function ContactGroups() {
    const { contactGroups, setContactGroups } = useContext(ContactsContext)

    const [additionalFields, setAdditionalFields] = useState([]);

    useEffect(() => {
        const fields = Array.from(contactGroups.keys()).map(key => ({ id: uuidv4(), value: key, originalKey: key }));
        setAdditionalFields(fields);
    }, [contactGroups]);

    const handleAdd = () => {
        setAdditionalFields([...additionalFields, { id: uuidv4(), value: "", originalKey: "" 
        }]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newContacts = new Map();
        additionalFields.forEach((field) => {
            if (field.value.trim()) {
                let value = [];
                if (contactGroups.has(field.originalKey)) {
                    value = contactGroups.get(field.originalKey);
                }
                newContacts.set(field.value, value);
            }
        });
        setContactGroups(newContacts);
        setAdditionalFields([]);
    };

    const handleFieldChange = (index, value) => {
        setAdditionalFields(additionalFields.map((field, i) => i === index ? { ...field, value } : field));
    };

    const handleRemove = (id) => {
        setAdditionalFields(additionalFields.filter((field) => field.id !== id));
    };

    return (
        <>
            <form className="sidebar-form" onSubmit={handleSubmit}>
                {additionalFields.map((field, index) => (
                    <div className="contact-groups-form-group" key={field.id}>
                        <input type="text"
                            value={field.value}
                            placeholder="Введите название"
                            onChange={(e) => handleFieldChange(index, e.target.value)} />
                        <button type="button" className="btn-bordered btn-icon-remove" onClick={() => handleRemove(field.id)}>
                            <svg className="icon" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.66664 17.3889C1.66664 18.55 2.61664 19.5 3.77775 19.5H12.2222C13.3833 19.5 14.3333 18.55 14.3333 17.3889V4.72222H1.66664V17.3889ZM4.26331 9.87333L5.75164 8.385L7.99997 10.6228L10.2378 8.385L11.7261 9.87333L9.48831 12.1111L11.7261 14.3489L10.2378 15.8372L7.99997 13.5994L5.7622 15.8372L4.27386 14.3489L6.51164 12.1111L4.26331 9.87333ZM11.6944 1.55556L10.6389 0.5H5.36108L4.30553 1.55556H0.611084V3.66667H15.3889V1.55556H11.6944Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                ))}

                <footer className="sidebar-form-footer">
                    <button className="btn-text btn-add" type="button" onClick={handleAdd}>Добавить</button>
                    <button className="btn-text btn-save" type="submit">Сохранить</button>
                </footer>
            </form>
        </>
    );
}

export default ContactGroups;