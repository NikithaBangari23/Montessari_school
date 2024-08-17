import FrameComponent30 from "./FrameComponent30";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`instance-parent15 ${className}`}>
      <div className="home-contact-parent8">
        <div className="home-contact10">Home / Our Founder and Teachers</div>
        <div className="contact-us-parent">
          <h1 className="contact-us10">Our Founder and Teachers</h1>
          <img
            className="image-36-icon10"
            loading="lazy"
            alt=""
            src="/image-36@2x.png"
          />
        </div>
      </div>
      <FrameComponent30 />
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
