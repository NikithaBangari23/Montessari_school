import FrameComponent22 from "./FrameComponent22";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`instance-parent16 ${className}`}>
      <div className="home-contact-parent9">
        <div className="home-contact11">Home / Infrastructure Facilities</div>
        <div className="contact-us-group">
          <h1 className="contact-us11">Infrastructure Facilities</h1>
          <img
            className="image-36-icon11"
            loading="lazy"
            alt=""
            src="/image-36@2x.png"
          />
        </div>
      </div>
      <FrameComponent22 />
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
