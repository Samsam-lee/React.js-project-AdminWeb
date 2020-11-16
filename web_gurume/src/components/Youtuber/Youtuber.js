import React from 'react'
import {useQuery} from "@apollo/react-hooks"
import query from "./query"

const User = () =>{
    const { loading, error, data } = useQuery(query);
	if (loading) return <p>Loading...</p>;
    if (error) return <p>Error Message : {error.message}</p>;
    
    const {ytbChannel} = data;

	return (
        <>
		{ytbChannel.map(v => <>
        <p> {v.ytbHits} {v.ytbLinkAddress} </p><p> {v.ytbProfile}  {v.ytbChannel} </p>
        </>)}
        </>
	)
}

const Youtuber = () => {
    return (
        <User />
    )
}

export default Youtuber
