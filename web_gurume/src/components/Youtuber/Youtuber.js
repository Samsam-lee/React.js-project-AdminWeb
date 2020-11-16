import React from 'react'
import temp from './temp'
import {useQuery} from '@apollo/react-hooks'

const User = () => {
    const { loading, error, data } = useQuery(temp);
    if(loading) return <p> Loading ... </p>
    if(error) return <p> error! </p>
    const {ytbChannel} = data
    return (
        <>
        {ytbChannel.map(v => <p>{v.ytbHits}</p>)}
        </>
    )
}

const Youtuber = () => {
    return (
        <div>
            <User />
        </div>
    )
}

export default Youtuber
