const RegionTag = (address) => {
    return address.includes("서울") ? "서울특별시" 
    : address.includes("대구") ? "대구광역시"
    : address.includes("부산") ? "부산광역시"
    : address.includes("인천") ? "인천광역시"
    : address.includes("광주") ? "광주광역시"
    : address.includes("대전") ? "대전광역시"
    : address.includes("울산") ? "울산광역시"
    : address.includes("세종") ? "세종특별자치시"
    : address.includes("경기") ? "경기도"
    : address.includes("강원") ? "강원도"
    : address.includes("충북") ? "충청북도"
    : address.includes("충청북도") ? "충청북도"
    : address.includes("충남") ? "충청남도"
    : address.includes("충청남도") ? "충청남도"
    : address.includes("전북") ? "전라북도"
    : address.includes("전라북도") ? "전라북도"
    : address.includes("전남") ? "전라남도"
    : address.includes("전라남도") ? "전라남도"
    : address.includes("경북") ? "경상북도"
    : address.includes("경상북도") ? "경상북도"
    : address.includes("경남") ? "경상남도"
    : address.includes("경상남도") ? "경상남도"
    : address.includes("제주") ? "제주특별자치도"
    : null
}

export default RegionTag