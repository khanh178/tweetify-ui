import React from "react";
import { Button, Modal } from "antd";

const SettingModal = (props) => {
  const handleOk = () => {
    // call API and store the config
  };
  return (
    <Modal
      title="Setting"
      open={props.isOpen}
      onOk={handleOk}
      onCancel={() => props.setIsOpenModal(false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default SettingModal;
