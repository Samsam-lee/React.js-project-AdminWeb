import React from 'react'
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"

import temp from './temp'

const client = new ApolloClient({
    link: createHttpLink({ uri: "http://localhost:4000/" }),
    cache: new InMemoryCache(),
});

(async function () {
    console.log(temp())
    const { loading, error, data } = await client.query({
      query: temp()
    })
  
    console.log("loading:", loading)
    console.log("error:", error)
    console.log("data:", data)
  })()

const Youtuber = () => {
    return (
        <div>
            {}
        </div>
    )
}

export default Youtuber
