﻿import PropTypes from 'prop-types';
import SidebarType from '../constants/SidebarType';
import './Header.css';

function Header({ setSidebarType, setIsSidebarOpen }) {
    return (
        <header className="header">
            <nav className="header-nav">
                <h1 className="header-nav-heading">
                    <svg className="icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.61967 0.0527838C1.2459 0.133671 0.940376 0.306712 0.634031 0.610909C0.321235 0.921514 0.153771 1.21819 0.0701915 1.60981C-0.0243015 2.05269 -0.022959 19.3872 0.0716206 19.8305C0.23891 20.6147 0.806821 21.3433 1.52522 21.6954C2.202 22.0271 1.62751 22.0069 10.0492 21.9945C17.5814 21.9834 17.5823 21.9834 17.7018 21.8947C17.7676 21.8459 17.8616 21.7526 17.9107 21.6873L18 21.5685V12.3724V3.17625L17.9107 3.05748C17.8616 2.99216 17.7677 2.89884 17.7019 2.85008C17.5893 2.76648 17.5157 2.76067 16.4183 2.74868L15.254 2.73599L15.2413 1.57992C15.2292 0.490159 15.2233 0.417098 15.1391 0.30525C15.09 0.239972 14.9961 0.146701 14.9303 0.0979361C14.8108 0.0093946 14.8018 0.00926559 8.3505 0.00174021C3.03793 -0.00449511 1.84222 0.00457835 1.61967 0.0527838ZM13.8643 2.05187V2.7399H7.90839C1.39855 2.7399 1.78207 2.75521 1.55436 2.48649C1.26807 2.14858 1.39574 1.59983 1.80151 1.42434C1.90917 1.37777 3.03711 1.36689 7.89895 1.36551L13.8643 1.36383V2.05187ZM9.59593 5.55672C10.6273 5.77367 11.502 6.64231 11.7205 7.66641C12.1348 9.60826 10.3878 11.343 8.43222 10.9316C7.64267 10.7656 6.90881 10.2016 6.55435 9.4885C6.14096 8.65683 6.14096 7.83153 6.55435 6.99987C7.09979 5.90259 8.3715 5.29918 9.59593 5.55672ZM11.2417 12.4729C12.5361 12.8487 13.4114 13.7251 13.7664 15.0007C13.8299 15.2292 13.8427 15.4561 13.8427 16.3576C13.8427 17.3839 13.838 17.4464 13.7534 17.559C13.7042 17.6244 13.6103 17.7177 13.5445 17.7665C13.4255 17.8547 13.4014 17.8552 9.01407 17.8552C4.62673 17.8552 4.60261 17.8547 4.48365 17.7665C4.19246 17.5506 4.18687 17.5284 4.17133 16.5298C4.15595 15.5425 4.19359 15.1766 4.36066 14.6888C4.68173 13.7514 5.53329 12.8911 6.44145 12.5865C7.04479 12.3842 7.15383 12.3761 9.12234 12.3875C10.7413 12.3968 11.0181 12.408 11.2417 12.4729Z" fill="#005BFE" />
                    </svg>

                    Книга контактов
                </h1>

                <div className="header-nav-buttons">
                    <button className="btn-text btn-text-icon btn-new-contact"
                        onClick={() => {
                            setSidebarType(SidebarType.NEW_CONTACT);
                            setIsSidebarOpen(true);
                        }}>
                        <span>Добавить контакт</span>
                        <svg className="icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white" />
                        </svg>
                    </button>

                    <button className="btn-text btn-contact-groups"
                        onClick={() => {
                        setSidebarType(SidebarType.GROUPS);
                        setIsSidebarOpen(true);
                    }}>Группы</button>
                </div>
                
            </nav>
        </header>
    );
}

Header.propTypes = {
    setSidebarType: PropTypes.func.isRequired,
    setIsSidebarOpen: PropTypes.func.isRequired,
};

export default Header;