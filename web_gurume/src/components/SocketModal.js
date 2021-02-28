import React from 'react'
import ReactModal from 'react-modal'
import {FlexDiv, ModalButton, socketModalCss} from '../styledFile'

const SocketModal = (props) => {

    const customStyles = {
        content : socketModalCss
    };

    return (
        <ReactModal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel={props.contentLabel}
        > 
        <FlexDiv>
            <FlexDiv fontSize="25px" padding="20px 10px" margin='0 70px 0 0'>
                {props.contentLabel}
            </FlexDiv>
            <button onClick={props.closeModal}>X</button>
        </FlexDiv>
            <ModalButton onClick={props.saveYoutuber}>데이터 수집 페이지</ModalButton>
        </ReactModal>
    )
}

export default SocketModal
