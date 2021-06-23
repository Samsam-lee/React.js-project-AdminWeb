import React from 'react'
import {FlexDiv} from '../styledFile'
import load from '../assets/image/loading.gif'

const Loading = () => {
    return (
        <FlexDiv width='100%' height='100%' justifyContent='center' alignItems='center'>
            <img src={load} style={{width:'90px', height:'30px'}}/>
        </FlexDiv>
    )
}

export default Loading
