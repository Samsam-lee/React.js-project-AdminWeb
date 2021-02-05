import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    
`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    align-self: ${props => props.alignSelf};
    font-size: ${props => props.fontSize};
    font-weight: ${props=> props.fontWeight};
    text-align: ${props => props.textAlign};
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
    height: ${props => props.height || '200px'};
    width: 400px;
`

const ImgDiv = styled.div`
    overflow: hidden;
    height: ${props => props.height || "170px"};
    min-width: ${props => props.width || "170px"};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-radius: ${props => props.borderRadius || "5px"};
`
/** */



/**
 * 유튜버 페이지 타이틀 div
 */
const TitleDiv = styled.div`
    background-color: ${props => props.backgroundColor};
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    width: 180px;
    height: 50px;
    line-height: 50px;
    border-radius: 16px;
    margin: 0 0 20px 40px;
`
/** */

/**
 * 고정 틀의 텍스트
 */
const FixTextDiv = styled.div`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 80%;
    margin: 0 0 0 10%;
`

export {Button, ImgDiv, FlexDiv, TitleDiv, FixTextDiv}