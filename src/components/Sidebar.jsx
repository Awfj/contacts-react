import PropTypes from 'prop-types';
import SidebarType from '../constants/SidebarType';
import SidebarHeader from './SidebarHeader';
import NewContact from './NewContact';
import ContactGroups from './ContactGroups';
import './Sidebar.css';

function Sidebar({ type, isOpen }) {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <SidebarHeader />

            <div className="sidebar-main">
                {type === SidebarType.NEW_CONTACT ? (
                    <NewContact />
                ) : (
                    <ContactGroups />
                )}
            </div>

        </aside>
    );
}

Sidebar.propTypes = {
    type: PropTypes.oneOf(Object.values(SidebarType)).isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;