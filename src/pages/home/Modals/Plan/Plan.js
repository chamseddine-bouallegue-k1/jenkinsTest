import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { MarkerF } from "@react-google-maps/api";
import Geocode from "react-geocode";
import smarthome from "../../../../assets/icons/smarthome.png";
import plan from "../../../../assets/plans/H3T1J1.PNG";
import Sensor from "../../../../Components/Sensor/Sensor";

Geocode.setApiKey("AIzaSyAExD_06Jw_D4vdf9r4vRaDSUufhtdVERE");

function Plan(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [center, setCenter] = useState({ lat: 45.4954, lng: -73.6273 });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Get latitude & longitude from address.
    Geocode.fromAddress(props?.smarthome?.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCenter({ lat, lng });
      },
      (error) => {
        console.error(error);
      }
    );
  }, [props?.smarthome?.address]);

  return (
    <div>
      <MarkerF position={center} icon={smarthome} onClick={showModal} />
      <Modal
        title={props?.smarthome?.address}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="plan-wrapper">
          <img className="plan" src={plan} alt="plan" />
          <Sensor
            position={{
              bottom: "1%",
              right: "17%",
            }}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Plan;
