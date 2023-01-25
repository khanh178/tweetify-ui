import React from "react";
import {
  Button,
  Collapse,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Select,
  Switch,
} from "antd";
import { FORM_ITEM_TOOLTIP, LANGUAGES } from "./constants";
import axios from "axios";

const { Panel } = Collapse;

const SettingModal = (props) => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const handleAddRule = async () => {
    return form.submit();
  };

  const openNotification = ({
    message,
    description,
    placement = "topRight",
  }) => {
    api.info({
      message,
      description,
      placement,
    });
  };

  const onFinish = (values) => {
    axios({
      method: "post",
      url: "http://localhost:8000/tweets/add-rules",
      data: values,
    }).then((res) => {
      if (res.status == 200) {
        openNotification({
          message: "Rule added",
          description: "Enjoy!",
        });
      }
    });
  };

  return (
    <Modal
      title="Rules setting"
      open={props.isOpen}
      onOk={handleAddRule}
      okText="Add rule"
      onCancel={() => props.setIsOpenModal(false)}
      destroyOnClose={true}
      size="default"
      width={650}
    >
      {contextHolder}
      <Form
        layout="horizontal"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 22 }}
        labelAlign="right"
        style={{ margin: "20px 0px" }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          label="Rule name"
          name="ruleTag"
          tooltip={FORM_ITEM_TOOLTIP.RULE_TAG}
          required
          rules={[
            {
              type: "string",
              required: true,
              message: "Please enter a rule name",
            },
          ]}
        >
          <Input
            placeholder='Example: "track-new-account-rule-001"'
            autoFocus
          />
        </Form.Item>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Basic filters" key="1">
            <Form.Item label="Keywords" name="keywords">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Keywords"
                options={[]}
              />
            </Form.Item>
            <Form.Item label="Exact phase match" name="exactPhase">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Exact phase match"
              />
            </Form.Item>
            <Form.Item label="Cash tag" name="cashTag">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Example $BTC, $ETH..."
              />
            </Form.Item>
            <Form.Item label="From account" name="accounts">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="List of accounts to filter"
              />
            </Form.Item>
            <Form.Item label="Language" name="language">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Keywords"
                options={LANGUAGES}
                defaultValue="en"
              />
            </Form.Item>
          </Panel>
          <Panel header="Advance filters" key="2">
            <Form.Item label="#Hashtags" name="hashtag">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="#Hashtag"
                options={[]}
              />
            </Form.Item>
            <Form.Item label="@Mention" name="mention">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="@Mention"
                options={[]}
              />
            </Form.Item>
            <Form.Item label="Bio Location" name="location">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="User bio location"
              />
            </Form.Item>
            <Form.Item label="Is Retweet" name="isRetweet">
              <Switch />
            </Form.Item>
            <Form.Item label="Is Reply" name="isReply">
              <Switch />
            </Form.Item>
            <Form.Item
              label="Tweet count"
              name="tweetCount"
              tooltip={FORM_ITEM_TOOLTIP.TWEET_COUNT}
            >
              <InputNumber style={{ width: 150 }} />
            </Form.Item>
            <Form.Item
              label="Following count"
              tooltip={FORM_ITEM_TOOLTIP.FOLLOWING_COUNT}
            >
              <Input.Group compact>
                <Input
                  style={{ width: 100, textAlign: "center" }}
                  placeholder="From"
                  type="number"
                  name="followingFrom"
                />
                <Input
                  style={{ width: 100, textAlign: "center" }}
                  placeholder="To"
                  type="number"
                  name="followingTo"
                />
              </Input.Group>
            </Form.Item>
            <Form.Item label="Follower count" name="followerCount">
              <InputNumber style={{ width: 150 }} />
            </Form.Item>
            <Form.Item label="Verified accounts" name="isVerified">
              <Switch />
            </Form.Item>
            <Form.Item
              label="Has Image"
              name="hasImage"
              tooltip={FORM_ITEM_TOOLTIP.HAS_IMAGE}
            >
              <Switch />
            </Form.Item>
          </Panel>
        </Collapse>
      </Form>
    </Modal>
  );
};

export default SettingModal;
