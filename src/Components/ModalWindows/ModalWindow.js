import React from 'react';
import './Styles/ModalWindow.css'

function ModalWindow(props){
    return(
        <div class={props.active ? "Modal active" : "Modal"} onClick={() => props.setActive(false)}>
            <div class='ModalContent' onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export {ModalWindow}