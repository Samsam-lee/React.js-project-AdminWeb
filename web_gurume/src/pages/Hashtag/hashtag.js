import React, { useState, useEffect } from 'react'
import HashtagBox from '../../components/Hashtag/HashtagBox'
import {TitleDiv, FlexDiv} from '../../styledFile'
import axios from 'axios'

const Hashtag = () => {

    const [administratorTag, setAdministratorTag] = useState(null);

    const fetchAdminTag = async () => {
        await axios.get(`http://13.125.69.16/admin/adminTagTb`).then(res=>(
            setAdministratorTag(res.data) // 데이터는 res.data 안에 들어있습니다.
        ))
    };

    useEffect(() => {
        fetchAdminTag();
    }, []);

    useEffect(() => {
        fetchAdminTag();
    }, [administratorTag])

    if (!administratorTag) return null;

    return (
        <div className="bodyFrame">
            <TitleDiv margin='0 0 0 20px'> 지역별 해쉬태그 </TitleDiv>
            {<HashtagBox adminTag={administratorTag.adminTag.regionTag}/>}

            <TitleDiv margin='0 0 0 20px'> 계절별 해쉬태그 </TitleDiv>
            {<HashtagBox adminTag={administratorTag.adminTag.seasonTag}/>}
        </div>
    )
}

export default Hashtag
