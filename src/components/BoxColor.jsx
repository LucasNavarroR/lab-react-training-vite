export default function BoxColor(props) {
  const colorStyle = {
    backgroundColor: `rgb(${props.r} ${props.g} ${props.b})`,

    margin: "10px",
  };

  return (
    <div style={colorStyle}>
      <p>rgb ({props.r} {props.g} {props.b})</p>
    </div>
  );
}
