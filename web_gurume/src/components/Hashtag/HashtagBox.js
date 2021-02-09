import React, {useState, useEffect} from "react";
import {Button, FlexDiv, HashBox} from '../../styledFile'

const HashtagBox = (props) => {
  const [tags, setTags] = useState('ㅇㅅㅇ')

  const AddTag = () => {
    setTags([...tags, "TAG"]);
  }

  const DeleteTag = (e) => {
    let result = tags.filter((element, index) => {
      return tags[index] != e.target.innerText;
    });
    setTags(result);
  }

  useEffect(() => {
    console.log(tags)
  }, [tags])

  return (
    <Button width='90%' height='300px'>
      <FlexDiv fontSize='18px' fontWeight='700'>
        {props.adminTag.map(v => 
          // <HashBox onClick={DeleteTag}> {v} </HashBox>
          <HashBox> {v} </HashBox>
        )}
        <HashBox onClick={AddTag}> + </HashBox>
        {/* <HashBox > + </HashBox> */}
      </FlexDiv>
    </Button>
  );
};

export default HashtagBox;
