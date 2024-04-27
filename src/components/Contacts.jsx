import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';
import './Contacts.css';

function Contacts({ contactGroups }) {
    return (
        <>
            {
                [...contactGroups].some(([_, contacts]) => contacts.length > 0) ? (
                    <div className="accordion">
                        {[...contactGroups].map(([group, contacts]) => (
                            (contacts.length > 0 &&
                                <AccordionItem key={group}
                                    group={group}
                                    contacts={contacts}
                                />)))}
                    </div>
                ) : (
                    <p className="message">Список контактов пуст</p>
                )
            }
        </>
    );
}

Contacts.propTypes = {
    contactGroups: PropTypes.instanceOf(Map).isRequired,
};

export default Contacts;