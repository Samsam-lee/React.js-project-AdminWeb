import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {HeadDiv, HeaderTitleDiv, HeaderList, FlexDiv, ContainerBox} from '../../styledFile'

const Header = () => {
    const [ytbDetailCss, setYtbDetailCss] = useState("mOut");

    return (
        <ContainerBox>
            <HeadDiv>
                <HeaderTitleDiv>
                    <Link to='/bigGurume' style={{color: 'rgb(249, 185, 173)'}}> Big Gurume </Link>
                </HeaderTitleDiv>

                <FlexDiv alignSelf='center' >
                    <HeaderList onMouseOver={() => {setYtbDetailCss("mOver")}} onMouseOut={() => {setYtbDetailCss("mOut")}}>
                        <Link to='/bigGurume'> 유튜버 </Link>
                        <div className={ytbDetailCss}>
                            <div><Link to='/bigGurume'>정보</Link></div>
                            <div><Link to='/bigGurume/youtuberRequest'>신청</Link></div>
                        </div>
                    </HeaderList>
                    <HeaderList><Link to='/bigGurume/hashtag'> 해시태그 </Link></HeaderList>
                    <HeaderList><Link to='/bigGurume/flow'> 동선 </Link></HeaderList>
                    <HeaderList><Link to='/bigGurume/user'> 유저 </Link></HeaderList>
                    <HeaderList><Link to='/bigGurume/collectData'> 데이터 수집 </Link></HeaderList>
                    <HeaderList><Link to='/'>로그인</Link></HeaderList>
                </FlexDiv>
            </HeadDiv>
        </ContainerBox>
    )
}

export default Header
