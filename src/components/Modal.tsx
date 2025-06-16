import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css';

interface ModalProps{
    isOpen:boolean;
    onClose:()=>void;
    children:React.ReactNode;
}

const Modal:React.FC<ModalProps>=({isOpen,onClose,children})=>{
    if(!isOpen)return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay"onClick={onClose}>
        <div className="modal-content"onClick={(e)=>e.stopPropagation()}>
            <button className="modal-close-button"onClick={onClose}>
                &times;
            </button>
            {children}
        </div>
        </div>,
        document.body
    )
}
export default Modal;