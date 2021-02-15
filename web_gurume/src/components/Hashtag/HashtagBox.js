import React, {useState, useEffect} from "react";
import {Button, FlexDiv, HashBox} from '../../styledFile'
import Modal from '../Modal'

const HashtagBox = (props) => {

  const [isOpen,setIsOpen] = useState(false);
  const [buttonState, setButtonState] = useState('');
  const [forDeleteHashtag, setForDeleteHashtag] = useState('');

    const openModal = (btnState, ht) => {
      setButtonState(btnState);
      setForDeleteHashtag(ht.v);
      setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

  return (
    <Button width='90%' height='300px'>
      <FlexDiv fontSize='18px' fontWeight='700'>
        {props.adminTag.map(v =>
          <HashBox onClick={() => openModal('해시태그 제거', {v})}> {v} </HashBox>
        )}
        <HashBox onClick={() => openModal('해시태그 추가',{})}> + </HashBox>
      </FlexDiv>

      <Modal isOpen={isOpen} closeModal={closeModal} contentLabel={buttonState} forDeleteHashtag={forDeleteHashtag}/>
    </Button>
  );
};

export default HashtagBox;
