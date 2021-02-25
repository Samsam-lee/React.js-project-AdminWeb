import React from 'react'
import ReactModal from 'react-modal'
import {FlexDiv, ModalButton} from '../styledFile'

const Modal = (props) => {

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            width                 : '500px',
            height                : '250px',
            background            : 'rgb(248,241,224)'
        }
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
