import React from "react";
import PropTypes from "prop-types";

Hero.propTypes = {
  heroString: PropTypes.string,
};

Hero.defaultProps = {
  heroString: "",
};

function Hero(props) {
  const { heroString } = props;
  return <div className="hero">{heroString}</div>;
}

// when props no change it will no re-render this component returned
export default React.memo(Hero);
