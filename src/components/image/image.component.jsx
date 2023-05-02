import qrcode from "../../image-qr-code.png";
import "./image.styles.scss";

const Image = () => {
  return <img src={qrcode} className="qr-code" alt="logo" />;
};

export default Image;
