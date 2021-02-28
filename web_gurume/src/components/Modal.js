import React from 'react'
import ReactModal from 'react-modal'
import {FlexDiv, ModalButton, modalCss} from '../styledFile'

const Modal = (props) => {

    const customStyles = {
        content : modalCss
    };

    return (
        <ReactModal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel={props.contentLabel}
        > 
        <FlexDiv fontSize="25px" padding="20px 10px">
            {props.contentLabel}
        </FlexDiv>
        <FlexDiv>
            <ModalButton onClick={props.saveYoutuber}>Save</ModalButton>
            <ModalButton onClick={props.closeModal}>Close</ModalButton>
        </FlexDiv>
        </ReactModal>
    )
}

export default Modal
