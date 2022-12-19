import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveSmarthomes } from "../../../slices/smarthomes";
import { Breadcrumb, Table, Button } from "antd";
import moment from "moment";

import "./Smarthomes.scss";

function Smarthomes(props) {
  const smarthomes = useSelector((state) => state.smarthomes);

  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrieveSmarthomes());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const columns = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      
    },
    {
      title: "Date of creation",
      key: "createdAt",
      render: (record) => (
        <span>{moment(record.createdAt).format("DD/MM/YYYY")}</span>
      ),
     
    },
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
  
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button>Action</Button>,
    },
  ];

  console.log("these are smarthomes", smarthomes);
  return (
    <div>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item className="title">Smarthomes</Breadcrumb.Item>
      </Breadcrumb>
      <Table rowKey={"id"} columns={columns} dataSource={smarthomes} scroll={{ x: 1300 }} />
    </div>
  );
}

export default Smarthomes;
