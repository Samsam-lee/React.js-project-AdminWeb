// <-- 상태가 에러인지 아닌지 판별
const IsThisError = (data) => {
    let isError = false;
    let countOfErr = 0;
    data.video.map((value) => {
      if (value.status === "에러") {
        countOfErr++;
        isError = true;
      } 
    });
  
    return { isError, countOfErr };
  };
  // -->

  export default IsThisError