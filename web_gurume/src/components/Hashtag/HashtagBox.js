import React, {useState, useEffect} from "react";
import {Button, FlexDiv, HashBox} from '../../styledFile'

const HashtagBox = (props) => {
  const [tags, setTags] = useState()

  useEffect(() => {
    console.log(tags)
  }, [tags])

  return (
    <Button width='90%' height='300px'>
      <FlexDiv fontSize='18px' fontWeight='700'>
        {props.adminTag.map(v =>
          <HashBox> {v} </HashBox>
        )}
        <HashBox > + </HashBox>
      </FlexDiv>
    </Button>
  );
};

export default HashtagBox;
