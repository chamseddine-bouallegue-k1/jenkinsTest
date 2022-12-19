import React from "react";
import temperature from "../../assets/sensors/temperature.png";
import "./Sensor.scss";

function Sensor(props) {
  return (
    <img
      className="sensor-wrapper"
      style={{ bottom: props.position.bottom, right: props.position.right }}
      alt="sensor"
      src={temperature}
    ></img>
  );
}

export default Sensor;
