import { FaStar, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Star(props) {
  let starIcon = props.isFilled ? (
    <FaStar className="text-2xl" />
  ) : (
    <FaRegStar className="text-2xl" />
  );

  return (
    <>
      <button
        onClick={props.handleClick}
        aria-pressed={props.isFilled}
        aria-label={starIcon ? "Add to favorites" : "Remove from favorites"}
      >
        {" "}
        {starIcon}
      </button>
    </>
  );
}

Star.propTypes = {
  isFilled: PropTypes.boolean,
  handleClick: PropTypes.func,
};
