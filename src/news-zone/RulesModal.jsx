import React from "react";
import { Button, Collapse, Form, Modal } from "antd";
import axios from "axios";
import { getApiUrl } from "../utils";

const { Panel } = Collapse;

const RulesModal = (props) => {
  const [form] = Form.useForm();

  const handleAddRule = async () => {};

  const onFinish = (values) => {};

  const onGetAllRules = () => {
    axios({
      method: "get",
      url: getApiUrl("tweets/get-rules"),
    }).then((res) => {
      if (res.status == 200) {
        console.log(res);
      }
    });
  };

  return (
    <Modal
      title="Rules list"
      open={props.isOpen}
      onOk={handleAddRule}
      okText="Ok"
      onCancel={() => props.setIsOpenModal(false)}
      destroyOnClose={true}
      size="default"
      width={650}
    >
      <Button onClick={onGetAllRules}>Get all rules</Button>
    </Modal>
  );
};

export default RulesModal;
