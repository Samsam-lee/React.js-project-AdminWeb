import React from "react";
// import "./HashtagBox.css";
import {Button, ImgDiv, FlexDiv, AgreeButton} from '../../styledFile'

const HashtagBox = (props) => {
  // const [seasonTags, setSeasonTags] = useState(adminTag.seasonTags);
  // const [regionTags, setRegionTags] = useState(adminTag.regionTags);

  // const AddRegionTag = () => {
  //   setRegionTags([...regionTags, "지역이름"]);
  // };
  // const AddSeasonTag = () => {
  //   setSeasonTags([...seasonTags, "계절"]);
  // };

  // const DeleteRegionTag = (e) => {
  //   console.log(e.target.innerText);
  //   let result = regionTags.filter((element, index) => {
  //     return regionTags[index] != e.target.innerText;
  //   });
  //   setRegionTags(result);
  // };
  // const DeleteSeasonTag = (e) => {
  //   console.log(e.target.innerText);
  //   let result = seasonTags.filter((element, index) => {
  //     return seasonTags[index] != e.target.innerText;
  //   });
  //   setSeasonTags(result);
  // };

  return (
    <Button width='90%' height='250px'>
      {/* <div className="box">
        <div className="hashTitle"> 지역 </div>
        <div className="hashBody">
          {regionTags.map((v) => (
            <div className="hashElement" onClick={DeleteRegionTag}>
              {v}
            </div>
          ))}
          <div className="hashElementPlus" onClick={AddRegionTag}> + </div>
        </div>
      </div>

      <div className="box">
        <div className="hashTitle"> 계절 </div>
        <div className="hashBody">
          {seasonTags.map((v) => (
            <div className="hashElement" onClick={DeleteSeasonTag}>
              {v}
            </div>
          ))}
          <div className="hashElementPlus" onClick={AddSeasonTag}> + </div>
        </div>
      </div> */}
      
      <FlexDiv>
        {props.adminTag.map(v => <FlexDiv> {v} </FlexDiv>)}
      </FlexDiv>

      </Button>
  );
};

export default HashtagBox;
