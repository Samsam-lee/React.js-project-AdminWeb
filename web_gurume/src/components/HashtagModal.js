import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { FlexDiv, HashModalInput, ModalButton, modalCss } from '../styledFile'
import axios from 'axios'

const HashtagModal = (props) => {
  const [addHashTag, setAddHashTag] = useState()

  const customStyles = {
    content: modalCss
  }

  const updateHashAdd = (e) => {
    setAddHashTag(e.target.value)
  }

  const patchAdminTag = async () => {
    await axios.patch(
      `http://13.125.69.16/admin/adminTagTb/insert/${addHashTag}`,
    )
    props.closeModal()
  }

  const deleteAdminTag = async () => {
    await axios.delete(
      `http://13.125.69.16/admin/adminTagTb/delete/${props.forDeleteHashtag}`,
    )
    props.closeModal()
  }

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel={props.contentLabel}
    >
      <FlexDiv fontSize="25px" padding="20px 10px">
        {props.contentLabel}
      </FlexDiv>
      {props.contentLabel == 'ハッシュタグ追加' && (
        <>
          <HashModalInput type="text" onChange={updateHashAdd} />
          <FlexDiv>
            <ModalButton onClick={patchAdminTag}>Add</ModalButton>
            <ModalButton onClick={props.closeModal}>Cancel</ModalButton>
          </FlexDiv>
        </>
      )}

      {props.contentLabel == 'ハッシュタグ削除' && (
        <>
          <HashModalInput type="text" value={props.forDeleteHashtag} />
          <FlexDiv>
            <ModalButton onClick={deleteAdminTag}>Delete</ModalButton>
            <ModalButton onClick={props.closeModal}>Cancel</ModalButton>
          </FlexDiv>
        </>
      )}
    </ReactModal>
  )
}

export default HashtagModal
