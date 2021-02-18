import React from 'react'
import {Link} from 'react-router-dom'
import { FlexDiv, Button } from "../../styledFile";
import IMAGE from "../../assets/image/youtuberImage/문복희 프사.jpg"

const CrawlingStatus = (props) => {
    const {crawlingStatusValue} = props

    return (
        <Button width='350px' height='785px' overFlow='scroll'>
            {
                crawlingStatusValue && crawlingStatusValue.status == 'normalCrawling' &&
                <>
                    <FlexDiv fontSize='22px' margin='25px'> 크롤링 진행 중인 유튜버 </FlexDiv>
                    {crawlingStatusValue && crawlingStatusValue.data.map(v=>(
                        <Button width='300px' height='300px'>
                            <FlexDiv><img src={IMAGE}/></FlexDiv>
                            <FlexDiv fontSize='20px' padding='15px 0'>{v.ytbChannel}</FlexDiv>
                            <FlexDiv>동영상 : {v.videoCount}개</FlexDiv>
                            <FlexDiv>{(v.video.length/v.videoCount*100).toFixed(1)}%</FlexDiv>
                        </Button>
                    ))}
                </>
            }

            {
                (crawlingStatusValue && crawlingStatusValue.status == 'errCrawling') &&
                <>
                    <FlexDiv fontSize='22px' margin='25px'> 크롤링 에러 발생 유튜버 </FlexDiv>
                    {crawlingStatusValue && crawlingStatusValue.data.map(v=>(
                        <Button width='300px' height='300px'>
                            <Link to={`/bigGurume/collectData/search?youtuber=${v.ytbChannel}`} onClick={() => props.handleSearch(false)}>
                            <FlexDiv><img src={IMAGE}/></FlexDiv>
                            <FlexDiv fontSize='20px' padding='15px 0'>{v.ytbChannel}</FlexDiv>
                            <FlexDiv> 동영상 : {v.videoCount}개</FlexDiv>
                            <FlexDiv> 완료된 영상 : {v.videoCount - v.video.length} / {v.videoCount} </FlexDiv>
                            <FlexDiv> 에러 발생 영상 : {v.video.length} / {v.videoCount} </FlexDiv>
                            </Link>
                        </Button>
                    ))}
                    {}
                </>
            }

            {
                crawlingStatusValue && crawlingStatusValue.status == 'completeCrawling' &&
                <>
                    <FlexDiv fontSize='22px' margin='25px'> 크롤링 완료 유튜버 </FlexDiv>
                    {crawlingStatusValue && crawlingStatusValue.data.map(v=>(
                        <Button width='300px' height='300px'>
                            <FlexDiv><img src={IMAGE}/></FlexDiv>
                            <FlexDiv fontSize='20px' padding='15px 0'>{v.ytbChannel}</FlexDiv>
                            <FlexDiv>동영상 : {v.videoCount}개</FlexDiv>
                        </Button>
                    ))}
                </>
            }

            
        </Button>
    )
}

export default CrawlingStatus