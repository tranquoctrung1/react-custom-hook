import React from "react";
import PropTypes from "prop-types";
import "./clock.sass";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();

  return <div className="clock">{timeString}</div>;
}

export default Clock;
