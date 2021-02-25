import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FlexDiv, Button } from "../../styledFile";
import Modal from '../Modal'
import axios from 'axios'

const CrawlingStatus = (props) => {
  const statusText = ['진행', '에러', '완료']
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [ytb, setYtb] = useState(null)

  const openModal = (youtuber) => {
    setModalIsOpen(true)
    setYtb(youtuber)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const SaveYoutuber = async () => {
    await axios.post(`http://13.125.69.16/admin/ytbCrawlingTb/save/youtuber/${ytb}`)
    closeModal()
  }

  return (
    <>
      {statusText.map((v) => 
        <Button width="350px" height="750px" overFlow="scroll">
          <FlexDiv fontSize="22px" margin="25px">
            크롤링 {v} 유튜버
          </FlexDiv>

          {v == '진행' && props.crawlingData.map(v => 
              v.videoCount != v.completeCount && <Button width="300px" height="300px">
                <FlexDiv flexDirection='column' >
                  <FlexDiv alignSelf='center' margin='10px'><img src="https://yt3.ggpht.com/ytc/AAUvwniPZb6DV7CasjjBxDqKSABK3dAIYnxwXKrJwiY7gQ=s176-c-k-c0x00ffffff-no-rj-mo" /></FlexDiv>
                  <FlexDiv fontSize="20px" padding="15px 0" alignSelf='center'>
                    {v.ytbChannel}
                  </FlexDiv>
                  <FlexDiv alignSelf='center'>에러 : {v.errCount} + 완성 : {v.completeCount}</FlexDiv>
                  <FlexDiv alignSelf='center'>전체 영상 개수 : {v.videoCount}</FlexDiv>
                </FlexDiv>
              </Button>
            )}

          {v == '에러' && props.crawlingData.map(v => 
              v.errCount > 0 && <Button width="300px" height="300px">
                <Link to={`/bigGurume/collectData/search?youtuber=${v.ytbChannel}`}>
                  <FlexDiv flexDirection='column' margin='10px'>
                  <FlexDiv alignSelf='center'><img src="https://yt3.ggpht.com/ytc/AAUvwnhjhFWolM9jAf-swowMYGvgOEDHAnLZQmNvUnTGVw=s176-c-k-c0x00ffffff-no-rj" /></FlexDiv>
                  <FlexDiv fontSize="20px" padding="15px 0" alignSelf='center'>
                    {v.ytbChannel}
                  </FlexDiv>
                  <FlexDiv alignSelf='center'>에러 개수 : {v.errCount}</FlexDiv>
                  <FlexDiv alignSelf='center'>전체 영상 개수 : {v.videoCount}</FlexDiv>
                  </FlexDiv>
                </Link>
              </Button>
            )}

          {v == '완료' && props.crawlingData.map(v => 
              v.videoCount == v.completeCount && <Button width="300px" height="300px" cursor='pointer' onClick={() => openModal(v.ytbChannel)}>
                <FlexDiv flexDirection='column' margin='10px'>
                  <FlexDiv alignSelf='center'><img src="https://yt3.ggpht.com/ytc/AAUvwnjyRCeCzrquC0zZ34bcb7aEmKm25ypLB_t1g1U4=s176-c-k-c0x00ffffff-no-rj-mo" /></FlexDiv>
                  <FlexDiv fontSize="20px" padding="15px 0" alignSelf='center'>
                    {v.ytbChannel}
                  </FlexDiv>
                  <FlexDiv alignSelf='center'>전체 영상 개수 : {v.videoCount}</FlexDiv>
                  </FlexDiv>
              </Button>
            )}
        </Button>
      )}
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} saveYoutuber={SaveYoutuber} contentLabel='유튜버 등록'/>
    </>
  );
};

export default CrawlingStatus;
