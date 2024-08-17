import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`contact-info-parent ${className}`}>
      <div className="contact-info6">
        <div className="home-contact-parent7">
          <div className="home-contact9">Home / Privacy Policy</div>
          <div className="contact-us-title-container">
            <h2 className="contact-us9">Mandatory Public Disclosure</h2>
          </div>
          <img
            className="image-36-icon9"
            loading="lazy"
            alt=""
            src="/image-36@2x.png"
          />
        </div>
        <img
          className="image-66-icon"
          loading="lazy"
          alt=""
          src="/image-66@2x.png"
        />
      </div>
      <img
        className="image-66-icon"
        loading="lazy"
        alt=""
        src="/image-67@2x.png"
      />
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
