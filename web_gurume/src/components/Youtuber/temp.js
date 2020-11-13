import gql from "graphql-tag"

const temp = (data = false) => gql`
query {
    contents {
        _id
        ${data ? 'title' : ''}
    }
}
`

export default temp