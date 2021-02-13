import React, {useState, useEffect} from "react";
import {Button, FlexDiv, HashBox} from '../../styledFile'
import Modal from '../Modal'

const HashtagBox = (props) => {
  
  const handleModal = () => {
    <Modal/>
  }

  return (
    <Button width='90%' height='300px'>
      <FlexDiv fontSize='18px' fontWeight='700'>
        {props.adminTag.map(v =>
          <HashBox> {v} </HashBox>
        )}
        <HashBox onClick={handleModal}> + </HashBox>
      </FlexDiv>
    </Button>
  );
};

export default HashtagBox;
