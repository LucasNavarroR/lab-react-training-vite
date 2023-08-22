import { useState } from "react";

export default function Carousel(props) {
  const { images } = props;

  const [actualImg, setActualImg] = useState(images[1]);

  const handleOnClick = (side) => {
    if (side === "left" && images.indexOf(actualImg) !== 0) {
      setActualImg(images[images.indexOf(actualImg) - 1]);
    } else if (
      side === "right" &&
      images.indexOf(actualImg) !== images.length - 1) {
      setActualImg(images[images.indexOf(actualImg) + 1]);
    }
  };

  return (
    <div>
      <img src={actualImg} alt="" />
      <br />
      <button onClick={() => handleOnClick("left")}>left</button>
      <button onClick={() => handleOnClick("right")}>right</button>
    </div>
  );
}
