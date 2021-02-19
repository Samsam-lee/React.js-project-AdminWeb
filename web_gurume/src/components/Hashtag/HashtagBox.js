import React, {useState} from "react";
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
    <Button width='100%' height='300px' backgroundColor='rgb(250, 244, 230)'>
      <FlexDiv fontSize='18px' fontWeight='700' flexWrap='wrap' padding='20px'>
        {props.adminTag.map(v =>
          <HashBox onClick={() => openModal('해시태그 제거', {v})}> {v} </HashBox>
        )}
        {props.tempValue &&
        <HashBox onClick={() => openModal('해시태그 추가',{})}> + </HashBox>}
      </FlexDiv>

      <Modal isOpen={isOpen} closeModal={closeModal} contentLabel={buttonState} forDeleteHashtag={forDeleteHashtag}/>
    </Button>
  );
};

export default HashtagBox;
