import React from 'react';
import './Popup.css'

interface IProps {
    children: React.ReactNode;
    setOpenPopup: (isOpen: boolean) => void;
  }

function Popup(props: IProps) {
    function closePopup() {
        props.setOpenPopup(false)
    }
    
    return (
        <div className="popup">
            <div className="popup__content">
                {props.children}
                <button type="button" className="popup__button" onClick={closePopup}>Хорошо</button>
            </div>
            <button type="button" className="popup__close-button" onClick={closePopup}>&times;</button>
        </div>
    )
}

export default Popup;