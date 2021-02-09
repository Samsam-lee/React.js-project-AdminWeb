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
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
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
    width: ${props => props.width || '400px'};
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
    background-color: ${props => props.backgroundColor || 'rgb(233, 229, 218)'};
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    height: 50px;
    line-height: 50px;
    border-radius: 16px;
    margin: ${props => props.margin || '0 0 20px 40px'};
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
/** */


/**
 * 유튜버 승인 버튼
 * *****************수정 필요
 */
const AgreeButton = styled.button`
    position: absolute;
`
/** */

/**
 * searchBox
 */
const SearchStyleDiv = styled.div`
    margin: 0 auto;
    font-size: 20px;
    display: flex;
    padding: 30px 0 0 0;
`

const SearchTextInput = styled.input`
    border: 0px;
    box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 8%), 0 1px 4px rgb(0 0 0 / 4%);
    border-radius: 5px;
    padding: 10px 15px;
    margin: 0 5px;
    width: 400px;
`

const SearchButton = styled.input`
    background-color: rgb(160, 187, 113);
    border: 0px;
    border-radius: 5px;
    margin-left: 10px;
    width: 100px;
`
/** */

/**
 * hash tag box
 */
const HashBox = styled.button`
    background-color: rgb(233, 229, 218);
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    align-self: center;
    `
    // onClick: ${props => props.onClick};
/** */

export {Button, ImgDiv, FlexDiv, TitleDiv, FixTextDiv, AgreeButton,
    SearchStyleDiv, SearchTextInput, SearchButton, HashBox}