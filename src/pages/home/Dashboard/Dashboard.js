import React, { useEffect, useCallback } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Plan from "../Modals/Plan/Plan";
import { useDispatch, useSelector } from "react-redux";
import { retrieveSmarthomes } from "../../../slices/smarthomes";
import { Breadcrumb } from "antd";

function Dashboard(props) {
  const containerStyle = {
    width: "100%",
    height: "450px",
  };

  const center = {
    lat: 45.4954,
    lng: -73.6273,
  };

  const smarthomes = useSelector((state) => state.smarthomes);

  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrieveSmarthomes());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <div>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item className="title">Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      {window.google === undefined ? (
        <LoadScript googleMapsApiKey="AIzaSyAExD_06Jw_D4vdf9r4vRaDSUufhtdVERE">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <>
              {smarthomes?.map((smarthome) => (
                <Plan smarthome={smarthome} key={smarthome?.address} />
              ))}
            </>
          </GoogleMap>
        </LoadScript>
      ) : (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          {/* Child components, such as markers, info windows, etc. */}
          <>
            {smarthomes?.map((smarthome) => (
              <Plan smarthome={smarthome} key={smarthome?.address} />
            ))}
          </>
        </GoogleMap>
      )}
    </div>
  );
}

export default Dashboard;
