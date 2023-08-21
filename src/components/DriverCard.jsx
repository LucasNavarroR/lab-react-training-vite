import Rating from "./Rating";
export default function DriverCard(props) {
  const {
    name,
    rating,
    img,
    car: { model, licensePlate },
  } = props;

  const cardStyle = {
    display: "flex",
    justifyContent: "center",

    backgroundColor: "blue",
    color: "white",

    borderRadius: "10px",

    margin: "10px"
  };

  const radius = {
    borderRadius: "50px",
  };

  return (
    <div style={cardStyle}>
      <div>
        <img src={img} alt="img" width="100px" height="100px" style={radius} />
      </div>
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
}
