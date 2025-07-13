import PropTypes from "prop-types";

export default function Joke(props) {
  console.log(props);

  return (
    <>
      <div className="p-2">
        {props.setup && (
          <h1 className="mb-2">
            <span className="text-[orangered]">Setup: </span> {props.setup}
          </h1>
        )}
        <p>
          <span className="text-green-700">Punchline: </span> {props.punchline}
        </p>
        <hr />
      </div>
    </>
  );
}

Joke.propTypes = {
  setup: PropTypes.string,
  punchline: PropTypes.string,
};
