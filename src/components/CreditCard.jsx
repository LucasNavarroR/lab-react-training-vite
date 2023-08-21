export default function CreditCard(props) {
  const cardStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    width: "400px",
    borderRadius: "10px",
  };
  const numDigit = props.number.slice(-4);
  const expirationYear = props.expirationYear.toString().slice(-2);

  return (
    <div style={cardStyle}>
      <h3>{props.type}</h3>
      <h1> **** **** **** {numDigit}</h1>
      <h4>
        Expires 0{props.expirationMonth}/{expirationYear} {props.bank}
      </h4>
      <h4>{props.owner}</h4>
    </div>
  );
}
