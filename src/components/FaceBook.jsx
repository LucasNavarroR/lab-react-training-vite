import { useState } from "react";
import profiles from "../data/berlin.json";

export default function FaceBook() {
  const [contactList, setContactList] = useState(profiles);
const [ selection, setSelection] = useState("")

const [isDetailsShowing, setIsDeteailsShowing] = useState(false)
  const fontWeight = {
    fontWeight: "bold",
  };



const isSelected = (event) => {
    selection === event ? setSelection("") : setSelection(event)

}

const handleDetails = () => {

    isDetailsShowing === false ? setIsDeteailsShowing(true) : setIsDeteailsShowing(false)
}

  return (
    <div>
<button onClick={() => isSelected("all")} style={selection === "all" ? {backgroundColor: "lightblue"} : {backgroundColor: "white"}} >All</button>
<button onClick={() => isSelected("England")} style={selection === "England" ? {backgroundColor: "lightblue"} : {backgroundColor: "white"}}>England</button>
<button onClick={() => isSelected("USA")} style={selection === "USA" ? {backgroundColor: "lightblue"} : {backgroundColor: "white"}}>USA</button>
<button onClick={() => isSelected("Malaysia")} style={selection === "Malaysia" ? {backgroundColor: "lightblue"} : {backgroundColor: "white"}}>Malaysia</button>
<button onClick={() => isSelected("Germany")} style={selection === "Germany" ? {backgroundColor: "lightblue"} : {backgroundColor: "white"}}>Germany</button>



      {contactList.map((eachContact) => {
        let selected = ""
        {selection === eachContact.country || selection === "all" ? selected = "lightblue" : "white"}
        return (
            
          <div style={  {     display: "flex",
          margin: "10px",
          padding: "10px",
          border: "2px solid black", 
          backgroundColor:`${selected}`}} >
            <div>
                <button onClick={handleDetails}><img src={eachContact.img} alt="faceImg" width="200px" /></button>
           
                
            </div>
            {isDetailsShowing ? <div>
              <p>
                <span style={fontWeight}>First Name:</span>
                {eachContact.firstName}
              </p>
              <p>
                <span style={fontWeight}>Last Name:</span>
                {eachContact.lastName}
              </p>

              <p>
                <span style={fontWeight}>Country:</span>
                {eachContact.country}
              </p>
              <p>
                <span style={fontWeight}>Type:</span>
                {eachContact.isStudent === true ? "Student" : "Teacher"}
              </p>
            </div> : null}
            
          </div>
        );
      })}
    </div>
  );
}
