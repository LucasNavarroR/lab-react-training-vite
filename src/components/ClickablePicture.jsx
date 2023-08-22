import { useState } from "react"



export default function ClickablePicture(props) {

const [actualImg, setActualImg] = useState(props.img)

const handleClick = () => {

    if ( actualImg === props.img) {

        setActualImg(props.imgClicked)
    } else {
        setActualImg(props.img)
    }
}

  return (


    <button onClick={handleClick}>
        <img src={actualImg} alt="" />
    </button>
  )
}
