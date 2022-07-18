import { Form, Select, DatePicker, Button, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";
import { Locations } from "../../types/locations";
import moment from "moment";
import { API_URL, DATE_FORMAT } from "../../utils/constants";

const { RangePicker } = DatePicker;

type Params = {
  origin?: string;
  destination?: string;
  dateRange?: [moment.Moment | null, moment.Moment | null] | null;
};

const SearchForm = () => {
  const { data, error } = useFetch<Locations>(API_URL);
  const [destinations, setDestinations] =
    useState<{ label: string; value: string }[]>();
  const [form] = Form.useForm();

  useEffect(() => {
    setDestinations(
      data?.locations.map((item) => ({
        label: item.city.name,
        value: item.city.code,
      }))
    );
  }, [data?.locations]);

  const submitForm = (values: Params) => {
    console.log(values);
    const { origin, destination, dateRange } = values;
    if (dateRange) {
      const [dateFrom, dateTo] = dateRange;

      const formData = {
        flyFrom: origin,
        to: destination,
        dateFrom: String(dateFrom?.format(DATE_FORMAT)),
        dateTo: String(dateFrom?.format(DATE_FORMAT)),
        returnFrom: String(dateTo?.format(DATE_FORMAT)),
        returnTo: String(dateTo?.format(DATE_FORMAT)),
      };
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <Form layout="vertical" form={form} onFinish={submitForm}>
      <Row gutter={24} align="bottom">
        <Col
          xs={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 8, offset: 0 }}
          xl={{ span: 6 }}
        >
          <Form.Item
            name="origin"
            label="From"
            rules={[{ required: true, message: "Please fill origin" }]}
            initialValue="PRG"
          >
            <Select
              showSearch
              options={destinations}
              optionFilterProp="label"
              placeholder="select origin"
              loading={!data}
            />
          </Form.Item>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 8, offset: 0 }}
          xl={{ span: 6 }}
        >
          <Form.Item
            name="destination"
            label="To"
            rules={[{ required: true, message: "Please fill destination" }]}
          >
            <Select
              showSearch
              options={destinations}
              optionFilterProp="label"
              placeholder="select destination"
              loading={!data}
            />
          </Form.Item>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 8, offset: 0 }}
          xl={{ span: 6 }}
        >
          <Form.Item
            name="dateRange"
            label="Date"
            rules={[{ required: true, message: "Please fill destination" }]}
          >
            <RangePicker disabled={!data} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 8, offset: 0 }}
          xl={{ span: 6 }}
        >
          <Form.Item>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              htmlType="submit"
              block
            >
              Search
            </Button>
          </Form.Item>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 8, offset: 0 }}
          xl={{ span: 6 }}
        >
          <Form.Item>
            <Button danger htmlType="reset" block onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
