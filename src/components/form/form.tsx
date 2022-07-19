import { Form, Select, DatePicker, Button, FormInstance } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FC } from "react";
import moment from "moment";

import styles from "./styles.module.css";

const { RangePicker } = DatePicker;

type Props = {
  form: FormInstance<any> | undefined;
  submitForm: ((values: any) => void) | undefined;
  destinations: { label: string; value: string }[] | undefined;
  disabledDate: ((date: moment.Moment) => boolean) | undefined;
};

const FormComponent: FC<Props> = ({
  form,
  submitForm,
  destinations,
  disabledDate,
}) => {
  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={submitForm}
      className={styles.formGrid}
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
          // loading={!data}
        />
      </Form.Item>
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
          // loading={!data}
        />
      </Form.Item>
      <Form.Item
        name="departureDateRange"
        label="Departure date"
        rules={[{ required: true, message: "Please fill departure date" }]}
      >
        <RangePicker
          // disabled={!data}
          style={{ width: "100%" }}
          disabledDate={disabledDate}
        />
      </Form.Item>
      <Form.Item
        name="returnDateRange"
        label="Return date"
        rules={[{ required: true, message: "Please fill return date" }]}
      >
        <RangePicker
          // disabled={!data}
          style={{ width: "100%" }}
          disabledDate={disabledDate}
        />
      </Form.Item>
      <Form.Item className={styles.lastRow}>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          htmlType="submit"
          block
        >
          Search flight...
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
