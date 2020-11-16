import gql from "graphql-tag"

const temp = gql`
query ytbChannel{
    ytbChannel{
        ytbHits
    }
}
`

const mut = gql`
mutation{
   createChannel(channelInput:{
    ytbChannel: "엠브로"
    ytbProfile: "프로필 사진 2"
    ytbLinkAddress: "UCj7mdvAJCRKvGBmcusOr9Ag"
    ytbHits: 12
  }){
    ytbChannel
    ytbProfile
    ytbLinkAddress
  }
}
`

export default temp