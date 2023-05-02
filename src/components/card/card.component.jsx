import Heading from "../heading/headingthree.component";
import Image from "../image/image.component";
import Subheading from "../subheading/subheading.component";
import "./card.styles.scss";

const Card = () => {
  return (
    <div className="card-container">
      <Image />
      <div className="text-container">
        <Heading />
        <Subheading />
      </div>
    </div>
  );
};

export default Card;
