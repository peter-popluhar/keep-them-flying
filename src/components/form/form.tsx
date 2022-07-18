import { Form, Select, DatePicker, Button, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";
import { Locations } from "../../types/locations";
import moment from "moment";
import { API_URL, DATE_FORMAT } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker;

export type Params = {
  origin?: string;
  destination?: string;
  departureDateRange?: [moment.Moment | null, moment.Moment | null] | null;
  returnDateRange?: [moment.Moment | null, moment.Moment | null] | null;
};

const SearchForm = () => {
  const { data, error } = useFetch<Locations>(API_URL);
  const [destinations, setDestinations] =
    useState<{ label: string; value: string }[]>();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setDestinations(
      data?.locations.map((item) => ({
        label: item.city.name,
        value: item.city.code,
      }))
    );
  }, [data?.locations]);

  const submitForm = (values: Params) => {
    const { origin, destination, departureDateRange, returnDateRange } = values;
    if (departureDateRange && returnDateRange) {
      const [departureDateFrom, departureDateTo] = departureDateRange;
      const [returnDateFrom, returnDateTo] = returnDateRange;

      const formData = {
        flyFrom: origin,
        to: destination,
        dateFrom: String(departureDateFrom?.format(DATE_FORMAT)),
        dateTo: String(departureDateTo?.format(DATE_FORMAT)),
        returnFrom: String(returnDateFrom?.format(DATE_FORMAT)),
        returnTo: String(returnDateTo?.format(DATE_FORMAT)),
      };

      navigate("/results", { state: formData });
    }
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
            name="departureDateRange"
            label="Departure date"
            rules={[{ required: true, message: "Please fill departure date" }]}
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
          <Form.Item
            name="returnDateRange"
            label="Return date"
            rules={[{ required: true, message: "Please fill return date" }]}
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
      </Row>
    </Form>
  );
};

export default SearchForm;
