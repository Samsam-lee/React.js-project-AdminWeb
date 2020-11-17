import gql from 'graphql-tag'

const mut = gql`
mutation mutationUser(
  $ytbChannel: String!
  $ytbProfile: String!
  $ytbLinkAddress: String!
  $ytbHits: Int!){
   createChannel(channelInput:{
    ytbChannel: $ytbChannel
    ytbProfile: $ytbProfile
    ytbLinkAddress: $ytbLinkAddress
    ytbHits: $ytbHits
  }){
    ytbChannel
    ytbProfile
    ytbLinkAddress
  }
}
`

export default mut