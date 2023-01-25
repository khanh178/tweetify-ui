import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Select,
  Form,
  Button,
  Space,
  Tag,
  Radio,
  Slider,
  Row,
  notification,
} from "antd";
import styled from "styled-components";
import {
  FrownOutlined,
  SettingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { getApiUrl } from "../utils";

const FormItem = Form.Item;

function PositionTerminal() {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const ButtonSize = "large";
  const [symbolList, setSymbolList] = useState([]);
  const [ticker, setTicker] = useState("BTCUSDT");
  const [leverage, setLeverage] = useState({
    min: 1,
    max: 12,
    value: 5,
  });

  useEffect(() => {
    axios({
      method: "get",
      url: getApiUrl("bybit/get-symbols"),
    }).then((res) => {
      if (res.status == 200 && res.data) {
        if (res.data.length) {
          const tickers = res.data.map((item) => {
            return {
              label: item.name,
              value: item.name,
              leverage: {
                min: item.leverage_filter.min_leverage,
                max: item.leverage_filter.max_leverage,
                step: item.leverage_filter.leverage_step,
              },
            };
          });
          setSymbolList(tickers);
        }
      }
    });
  }, []);

  const onOpenPosition = (side) => {
    const size = form.getFieldValue("amount");
    axios({
      method: "post",
      url: getApiUrl("bybit/open-position"),
      data: {
        side,
        symbol: ticker,
        size,
        leverage: leverage.value,
      },
    }).then((res) => {
      if (res.status == 200 && res.data) {
      }
    });
  };

  return (
    <Card title={"Terminal"} extra={<SettingOutlined onClick={() => {}} />}>
      {contextHolder}
      <Form layout="vertical" form={form}>
        <FormItem>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Bybit</Radio.Button>
            <Radio.Button value="b" disabled>
              Binance
            </Radio.Button>
            {/* <Radio.Button value="c">Kucoin</Radio.Button> */}
          </Radio.Group>
        </FormItem>
        <FormItem name="amount" label="Size">
          <Input placeholder="Enter size" suffix={"$"} defaultValue={500} />
        </FormItem>
        <FormItem name="ticker" label="Ticker">
          {" "}
          <Select
            showSearch
            placeholder="Select ticker"
            optionFilterProp="children"
            onChange={(val, option) => {
              const lev = option.leverage;

              setTicker(val);
              setLeverage({
                ...lev,
                value: Math.floor((lev.max + lev.min) / 2),
              });
            }}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={symbolList}
          />
        </FormItem>
        <FormItem label={`Leverage: ${leverage.value}x`}>
          <div style={{ display: "inline-flex", width: "100%" }}>
            <FrownOutlined />
            <Slider
              onChange={(value) => {
                setLeverage({
                  ...leverage,
                  value,
                });
              }}
              value={leverage.value}
              min={leverage.min}
              max={leverage.max}
              dots={true}
              style={{ width: "100%" }}
            />
            <SmileOutlined />
          </div>
        </FormItem>
        <FormItem>
          <Space style={{ textAlign: "center" }}>
            <ActionButton
              size={ButtonSize}
              shape="round"
              type="primary"
              onClick={() => {
                onOpenPosition("Buy");
              }}
            >
              Long
            </ActionButton>
            <ActionButton
              size={ButtonSize}
              shape="round"
              onClick={() => {
                onOpenPosition("Short");
              }}
            >
              Short
            </ActionButton>
          </Space>
        </FormItem>
      </Form>
    </Card>
  );
}

const ActionButton = styled(Button)`
  width: 200px !important;
`;

export default PositionTerminal;
