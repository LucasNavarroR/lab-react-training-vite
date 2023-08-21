export default function Rating(props) {
  const roundNUmber = Math.round(parseFloat(props.children));

  switch (roundNUmber) {
    case 0:
      return <p>☆☆☆☆☆</p>;

      break;

    case 1:
      return <p>★☆☆☆☆</p>;

      break;

    case 2:
      return <p>★★☆☆☆</p>;

      break;
    case 3:
      return <p>★★★☆☆</p>;

      break;
    case 4:
      return <p>★★★★☆</p>;

      break;

    case 5:
      return <p>★★★★★</p>;

      break;
    default:
        return <p>☆☆☆☆☆</p>;
  }
}
