import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    
`

/**
 * 유튜버 정보 css
 * Button > Img
 */
const Button = styled.button`
    background-color: white;
    border-radius: .8rem;
    box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 8%), 0 1px 4px rgb(0 0 0 / 4%);
    border: 0;
    margin: 10px;
    height: 200px;
    width: 400px;
`

const ImgDiv = styled.div`
    overflow: hidden;
    height: ${props => props.height || "170px"};
    width: ${props => props.width || "170px"};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`
/** */


const FlexDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    align-self: ${props => props.alignSelf};
    font-size: ${props => props.fontSize};
`

const TitleDiv = styled.div`
    background-color: ${props => props.backgroundColor};
    text-align: center;
    font-size: 20px;
    align-self: center;
    width: 180px;
    height: 50px;
`



export {Button, ImgDiv, FlexDiv, TitleDiv}