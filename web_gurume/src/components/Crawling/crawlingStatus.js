import React from 'react'
import {Link} from 'react-router-dom'
import { FlexDiv, Button } from "../../styledFile";
import IMAGE from "../../assets/image/youtuberImage/문복희 프사.jpg"

const CrawlingStatus = (props) => {

    // <Link to={`/bigGurume/collectData/search`}></Link>

    return (
        <Button width='350px' height='700px' overFlow='scroll'>
            {props.crawlingStatusValue.status == 'normalCrawling' 
            && <FlexDiv fontSize='22px'> 크롤링 진행 중인 유튜버</FlexDiv>}

            {props.crawlingStatusValue.status == 'errCrawling' 
            && <FlexDiv fontSize='22px'> 크롤링 에러 발생 유튜버</FlexDiv>}

            {props.crawlingStatusValue.status == 'completeCrawling' 
            && <FlexDiv fontSize='22px'> 크롤링 완료 유튜버</FlexDiv>}

            {props.crawlingStatusValue.data.map(v=>(
                <Button width='300px' height='300px'>
                    <FlexDiv><img src={IMAGE}/></FlexDiv>
                    <FlexDiv fontSize='20px' padding='15px 0'>{v.ytbChannel}</FlexDiv>
                    <FlexDiv>동영상 : {v.videoCount}개</FlexDiv>

                    {props.crawlingStatusValue.status == 'normalCrawling'
                    && <FlexDiv>{(v.video.length/v.videoCount*100).toFixed(1)}%</FlexDiv>}

                    {props.crawlingStatusValue.status == 'errCrawling'
                    && <>
                        <FlexDiv> 완료된 영상 : {v.videoCount - v.video.length} / {v.videoCount} </FlexDiv>
                        <FlexDiv> 에러 발생 영상 : {v.video.length} / {v.videoCount} </FlexDiv>
                    </>
                    }
                </Button>
            ))}
        </Button>
    )
}

export default CrawlingStatus