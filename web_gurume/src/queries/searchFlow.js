import gql from 'graphql-tag'

const query = gql`
    query Flow($flowOption: String!){
        flowData(flowOption: $flowOption){
            adminTag
            shareTitle
            userId
            shareDate
            updateDate
            hits
  }
}
`

export default query