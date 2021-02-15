import React, {useState} from 'react'
import ReactModal from 'react-modal'
import {FlexDiv, HashModalInput, Button} from '../styledFile'
import axios from 'axios'

const Modal = (props) => {

    const [addHashTag, setAddHashTag] = useState()

    const customStyles = {
        content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '550px',
        height                : '220px',
        background            : 'rgb(230,230,230)'
        }
    };

    const updateHashAdd = (e) => {
        setAddHashTag(e.target.value)
    }

    const patchAdminTag = async () => {
        await axios.patch(`http://13.125.69.16/admin/adminTagTb/insert/${addHashTag}`)
        props.closeModal()
    };

    const deleteAdminTag = async () => {
        await axios.delete(`http://13.125.69.16/admin/adminTagTb/delete/${props.forDeleteHashtag}`)
        props.closeModal()
    }

    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel={props.contentLabel}
        >
            <FlexDiv fontSize='25px' padding='20px 10px'>{props.contentLabel}</FlexDiv>
            {props.contentLabel == '해시태그 추가' && <>
                <HashModalInput type='text' onChange={updateHashAdd}/>
                <FlexDiv>
                    <Button width='50%' height='70px' onClick={patchAdminTag}> Add </Button>
                    <Button width='50%' height='70px' onClick={props.closeModal}>Cancel</Button>
                </FlexDiv>
            </>}

            {props.contentLabel == '해시태그 제거' && <FlexDiv>
                <Button width='50%' height='120px' onClick={deleteAdminTag}> Delete </Button>
                <Button width='50%' height='120px' onClick={props.closeModal}>Cancel</Button>
            </FlexDiv>}
        </ReactModal>
    )
}

export default Modal
