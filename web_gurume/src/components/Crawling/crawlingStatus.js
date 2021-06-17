import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FlexDiv, Button } from "../../styledFile";
import ChargeContainer from "../ChargeContainer"
import Modal from '../Modal'
import axios from 'axios'
import TestContext from '../../utils/TestContextProvider'

const CrawlingStatus = (props) => {
  const statusText = ['進行', 'エラー', '完了']
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [ytb, setYtb] = useState(null)
  const [tempProgress, setTempProgress] = useState()

  const {chargeThing} = useContext(TestContext)

  useEffect(() => {
    setTempProgress(chargeThing)
    console.log(chargeThing)
  }, [chargeThing])

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
            クローリング {v}
          </FlexDiv>

          {v == '進行' && props.crawlingData.map((v,index) => 
              v.videoCount != v.completeCount && <Button width="300px" height="300px" display='flex' justifyContent='center' alignItems='center'>
                <FlexDiv flexDirection='column'>
                  <FlexDiv alignSelf='center' margin='10px'><img src={v.ytbProfile} style={{borderRadius:'500px'}}/></FlexDiv>
                  <FlexDiv fontSize="20px" alignSelf='center'>
                    {v.ytbChannel}
                  </FlexDiv>

                  {/* 인덱스 활용해서 props로 값 넘겨주기 */}
                  <ChargeContainer percent={tempProgress}/>
                  
                  <FlexDiv alignSelf='center'>エラー : {v.errCount} + 完了 : {v.completeCount}</FlexDiv>
                  <FlexDiv alignSelf='center'>全動画の数 : {v.videoCount}</FlexDiv>
                </FlexDiv>
              </Button>
            )}

          {v == 'エラー' && props.crawlingData.map(v => 
              v.errCount > 0 && <Button width="300px" height="300px" display='flex' justifyContent='center' alignItems='center'>
                <Link to={`/bigGurume/collectData/search?youtuber=${v.ytbChannel}`}>
                  <FlexDiv flexDirection='column' margin='10px'>
                  <FlexDiv alignSelf='center'><img src={v.ytbProfile} style={{borderRadius:'500px'}}/></FlexDiv>
                  <FlexDiv fontSize="20px" padding="15px 0" alignSelf='center'>
                    {v.ytbChannel}
                  </FlexDiv>
                  <FlexDiv alignSelf='center'>エラーの数 : {v.errCount}</FlexDiv>
                  <FlexDiv alignSelf='center'>全動画の数 : {v.videoCount}</FlexDiv>
                  </FlexDiv>
                </Link>
              </Button>
            )}

          {v == '完了' && props.crawlingData.map(v => 
              v.videoCount == v.completeCount && <Button width="300px" height="300px" cursor='pointer' display='flex' justifyContent='center' alignItems='center' onClick={() => openModal(v.ytbChannel)}>
                <FlexDiv flexDirection='column' margin='10px'>
                  <FlexDiv alignSelf='center'><img src={v.ytbProfile} style={{borderRadius:'500px'}}/></FlexDiv>
                  <FlexDiv fontSize="20px" padding="15px 0" alignSelf='center'>
                    {v.ytbChannel}
                  </FlexDiv>
                  <FlexDiv alignSelf='center'>全動画の数 : {v.videoCount}</FlexDiv>
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
