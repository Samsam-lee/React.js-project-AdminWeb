import React, {useState} from 'react'
import {useQuery, useMutation, Mutation} from "@apollo/react-hooks"
import query from "./query"
import mut from "./mutation"

const User = () =>{
    const { loading, error, data } = useQuery(query);
	if (loading) return <p>Loading...</p>;
    if (error) return <p>Error Message : {error.message}</p>;
    
    const {ytbChannel} = data;

	return (
        <>
		{ytbChannel.map(v => <>
        <p> {v.ytbHits} {v.ytbLinkAddress} </p><p> {v.ytbProfile}  {v.ytbChannel} </p>
        <p> --------------------------------------------- </p>
        </>)}
        </>
	)
}

const MutationUser = () => {
    const [addChannel, { loading, error, data }] = useMutation(mut)

    return(
        <>
        <button
            onClick={() =>
                addChannel()
            }
        > 유튜버 추가 </button>
        </>
    )
}

const Youtuber = () => {
    return (
        <>
        <User />
        <MutationUser />
        </>
    )
}

export default Youtuber
