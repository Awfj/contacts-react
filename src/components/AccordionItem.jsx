import { useState, useRef } from 'react';
import { CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';
import AccordionSubitem from "./AccordionSubitem";
import './AccordionItem.css';

function AccordionItem({ group, contacts }) {
    const [isOpen, setIsOpen] = useState(false);
    const accordionItemNodeRef = useRef(null);

    return (
        <div className="accordion-item" style={{ cursor: isOpen ? 'default' : 'pointer' }}>
            <h2 className={`accordion-item-heading ${isOpen && "active"}`} onClick={() => setIsOpen(!isOpen)}>
                {group}
                {isOpen ? <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.885 7.70502L6.29498 3.12502L1.70498 7.70502L0.294983 6.29502L6.29498 0.295017L12.295 6.29502L10.885 7.70502Z" fill="black" />
                </svg> : <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.885 0.295044L6.29498 4.87504L1.70498 0.295044L0.294983 1.70504L6.29498 7.70504L12.295 1.70504L10.885 0.295044Z" fill="black" />
                </svg>
                }
            </h2>

            <CSSTransition nodeRef={accordionItemNodeRef} in={isOpen}
                timeout={500} classNames="accordion-item-animation" unmountOnExit>
                <div ref={accordionItemNodeRef}>
                    {isOpen && contacts.map((contact, index) => (
                        <AccordionSubitem key={contact.name}
                            contact={contact}
                            index={index}
                            group={group}
                        />
                    ))}</div>
            </CSSTransition>
        </div>
    );
}

AccordionItem.propTypes = {
    group: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AccordionItem;