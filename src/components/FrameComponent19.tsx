import PropTypes from "prop-types";
import "./FrameComponent19.css";

const FrameComponent19 = ({ className = "", contact, contactUs, image36 }) => {
  return (
    <section className={`home-contact-parent10 ${className}`}>
      <div className="home-contact-container1">
        <span>{`Home / `}</span>
        <b>{contact}</b>
      </div>
      <div className="contact-us-wrapper5">
        <h1 className="contact-us12">{contactUs}</h1>
      </div>
      <img className="image-36-icon12" loading="lazy" alt="" src={image36} />
    </section>
  );
};

FrameComponent19.propTypes = {
  className: PropTypes.string,
  contact: PropTypes.string,
  contactUs: PropTypes.string,
  image36: PropTypes.string,
};

export default FrameComponent19;
