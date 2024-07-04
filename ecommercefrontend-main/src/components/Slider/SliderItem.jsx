import PropTypes from "prop-types";
const SliderItem = ({imageSrc}) => {
    return (
      <div className="slider-item fade">
        <div className="slider-image">
          <img src={imageSrc} className="img-fluid" alt="" />
        </div>
        <div className="container">
          <p className="slider-title"></p>
          <h2 className="slider-heading"></h2>
          
        </div>
      </div>
    );
  };
  
  export default SliderItem;
  SliderItem.propTypes = {
    imageSrc: PropTypes.string,
  };