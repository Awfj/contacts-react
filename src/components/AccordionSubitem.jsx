import { useContext } from 'react';
import { ContactsContext } from '../App.jsx';
import PropTypes from 'prop-types';
import './AccordionSubitem.css';

function AccordionSubitem({ contact, index, group }) {
    const { handleEditContact, handleDeleteContact } = useContext(ContactsContext);

    return (
        <div className="accordion-subitem">
            <p className="accordion-subitem-name">{contact.name}</p>
            <p className="accordion-subitem-phone">{contact.phone}</p>
            <div className="accordion-subitem-buttons">
                <button className="btn-bordered btn-icon-edit" onClick={() => {
                    handleEditContact(contact);
                }}>
                    <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 14.25V18H3.75L14.81 6.94L11.06 3.19L0 14.25ZM17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.289998C14.98 -0.100002 14.35 -0.100002 13.96 0.289998L12.13 2.12L15.88 5.87L17.71 4.04Z" fill="black" />
                    </svg>
                </button>

                <button className="btn-bordered btn-icon-remove"
                    onClick={() => handleDeleteContact(group, index)}>
                    <svg className="icon" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66664 17.3889C1.66664 18.55 2.61664 19.5 3.77775 19.5H12.2222C13.3833 19.5 14.3333 18.55 14.3333 17.3889V4.72222H1.66664V17.3889ZM4.26331 9.87333L5.75164 8.385L7.99997 10.6228L10.2378 8.385L11.7261 9.87333L9.48831 12.1111L11.7261 14.3489L10.2378 15.8372L7.99997 13.5994L5.7622 15.8372L4.27386 14.3489L6.51164 12.1111L4.26331 9.87333ZM11.6944 1.55556L10.6389 0.5H5.36108L4.30553 1.55556H0.611084V3.66667H15.3889V1.55556H11.6944Z" fill="black" />
                    </svg>
                </button>
            </div>

        </div>
    );
}

AccordionSubitem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    group: PropTypes.string.isRequired,
};

export default AccordionSubitem;