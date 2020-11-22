import React, {useState, useEffect} from 'react'
import adminTag from './dummy'
import './HashtagBox.css'
import addHashtag from '../../utils/addHashtag'



const HashtagBox = () => {
    const [region, setRegion] = useState('null')
    const [season, setSeason] = useState('null')
    const [seasonTags, setSeasonTags] = useState(adminTag.seasonTags)
    const [regionTags, setRegionTags] = useState(adminTag.regionTags)

    
    const AddRegionTag = () => {
        setRegionTags([...regionTags, '지역이름'])
    }
    const AddSeasonTag = () => {
        setSeasonTags([...seasonTags, '계절'])
    }

    const DeleteRegionTag = (e) => {
        console.log(e.target.innerText)
        let result = regionTags.filter((element, index) => {
            return regionTags[index] != e.target.innerText
        })
        setRegionTags(result)
    }
    const DeleteSeasonTag = (e) => {
        console.log(e.target.innerText)
        let result = seasonTags.filter((element, index) => {
            return seasonTags[index] != e.target.innerText
        })
        setSeasonTags(result)
    }

    return (
        <>
            <div className='box'>
                <div className='hashTitle'> 지역 </div>
                <div className='hashBody'> {regionTags.map(v=>
                        <div className='hashElement' onClick={DeleteRegionTag}>{v}</div>
                    )}
                    <div className='hashElementPlus' onClick={AddRegionTag}> + </div>
                </div>
            </div>

            <div className='box'>
                <div className='hashTitle'> 계절 </div>
                <div className='hashBody'> {seasonTags.map(v=>
                        <div className='hashElement' onClick={DeleteSeasonTag}>{v}</div>
                    )}
                    <div className='hashElementPlus' onClick={AddSeasonTag}> + </div>
                </div>
            </div>
        </>
    )
}

export default HashtagBox
