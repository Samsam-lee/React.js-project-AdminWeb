// "2020-11-20T00:00:00Z"

const convertDate = (data) => {
  let tempData = null
  if(data != null)
    tempData = data.substring(0, 10)
  return tempData
}

export { convertDate }
