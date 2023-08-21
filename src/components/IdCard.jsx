

export default function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props.user;

const idCardStyle = {
    display: "flex",
    margin: "10px",
    padding: "10px",
    border: "2px solid black"

}
const fontWeight = {
    fontWeight: "bold"
}

  return (
    <div style={idCardStyle}>
      <div>
        <img src={picture} alt="faceImg" width="200px"/>
      </div>
      <div>
        <p>
          <span style={fontWeight}>First Name:</span>
          {firstName}
        </p>
        <p>
          <span style={fontWeight}>Last Name:</span>
          {lastName}
        </p>
        <p>
          <span style={fontWeight}>Gender:</span>
          {gender}
        </p>
        <p>
          <span style={fontWeight}>Height:</span>
          {height}
        </p>
        <p>
          <span style={fontWeight}>Birth:</span>
          {birth}
        </p>
      </div>
    </div>
  );
}
