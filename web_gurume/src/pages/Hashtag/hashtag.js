import React, { useState, useEffect } from 'react'
import HashtagBox from '../../components/Hashtag/HashtagBox'
import {TitleDiv, FlexDiv} from '../../styledFile'
import axios from 'axios'

const Hashtag = () => {

    const [administratorTag, setAdministratorTag] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAdminTag = async () => {
        try {
            setError(null);
            setAdministratorTag(null);
            setLoading(true);
            const response = await axios.get(
                `http://13.125.69.16/admin/adminTagTb`
            );
            setAdministratorTag(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchAdminTag();
    }, []);

    if (loading) return <div> 로딩중.. </div>;
    if (error) return <div> error </div>;
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
