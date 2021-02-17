import React, { useState, useEffect } from "react";
import axios from "axios";
import CrawlingStatus from "../../components/Crawling/CrawlingStatus";
import {BodyFrame} from "../../styledFile"

const CollectData = () => {
  const [crawlingData, setCrawlingData] = useState(null);

  /** page 에 따른 데이터 렌더링 */
  const fetchCrawlingData = async () => {
    await axios
      .get(`http://13.125.69.16/admin/ytbCrawlingTb/socket`)
      .then((res) => {
        setCrawlingData(res.data); // 데이터는 res.data 안에 들어있습니다.
      });
  };
  /** */

  useEffect(() => {
    fetchCrawlingData();
  }, []);

  return (
    <BodyFrame>
      {crawlingData
      ? crawlingData.map(v => 
        <CrawlingStatus crawlingStatusValue={v} />
      )
    : <div> loading... </div>}
    </BodyFrame>
  );
};

export default CollectData;
