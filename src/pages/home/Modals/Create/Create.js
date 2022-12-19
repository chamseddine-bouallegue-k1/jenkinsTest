import React, { useState } from "react";
import { Modal, Col, Button, Form, Input, notification, Row } from "antd";
import { useDispatch } from "react-redux";
import { createSmarthome } from "../../../../slices/smarthomes";
import "./Create.scss";

//const { Option } = Select;

function Create(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();

  };

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(createSmarthome(values))
      .then((data) => {
        console.log(data);
        form.resetFields();
        notification.success({
          message: `Smarthome is created successfully!`,
          placement: "bottom",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Col className="menu" onClick={showModal}>
        + Create Smarthome
      </Col>

      <Modal title="Create a Smarthome" visible={isModalOpen} footer={null}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Address"
            required
            name="address"
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please input the smarthome's address!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Plan" name="plan">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item>
            <Row gutter={24}>
              <Col>
                {" "}
                <Button type="primary" onClick={form.submit}>
                  Submit
                </Button>
              </Col>
              <Col>
                <Button onClick={handleCancel}>Cancel</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Create;
