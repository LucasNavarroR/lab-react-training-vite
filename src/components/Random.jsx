export default function Random(props) {

let finalNumner = Math.floor(Math.random() * (props.max -props.min +1)) + props.min


return(
<div>

<h1>Random value between {props.min} and {props.max} {finalNumner}</h1>

</div>
    
)

}