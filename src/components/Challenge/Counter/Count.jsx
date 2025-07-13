import PropTypes from "prop-types";

export default function Count(props) {
  return (
    <>
      <h1 className="text-5xl font-bold">{props.count}</h1>
    </>
  );
}

Count.propTypes = {
  count: PropTypes.number,
};
