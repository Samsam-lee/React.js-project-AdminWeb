import gql from 'graphql-tag'

const mut = gql`
mutation{
   createChannel(channelInput:{
    ytbChannel: "이름"
    ytbProfile: "프로필 사진"
    ytbLinkAddress: "링크 주소"
    ytbHits: 98765
  }){
    ytbChannel
    ytbProfile
    ytbLinkAddress
  }
}
`

export default mut