
export default function Greetings(props) {

    if(props.lang === "de"){
        return <div> <h3> Hallo {props.children}</h3></div>
      }
      else if(props.lang === "fr"){
        return <div><h3>Bonjour {props.children}</h3></div>
      }



}