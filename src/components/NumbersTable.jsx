export default function NumbersTable(props) {
  let tableArr = [];

  for (let i = 1; i <= props.limit; i++) {
    tableArr.push(i);
  }



  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {tableArr.map((num) => {
        if (num % 2 === 0) {
          return (
            <div  style={{backgroundColor:"red", width:"100px", height:"100px"}}>
              {num}
            </div>
          );
        } else {
          return (
            <div
              width="100px"
              height="100px"
              style={{backgroundColor: "white",  width:"100px", height:"100px"}}
            >
              {num}
            </div>
          );
        }
      })}
    </div>
  );
}
