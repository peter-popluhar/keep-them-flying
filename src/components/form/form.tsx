import { Form, Select, DatePicker, Button, FormInstance } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FC } from "react";
import moment from "moment";

import styles from "./styles.module.css";
import { Airport } from "../../types/airport";

const { RangePicker } = DatePicker;

type Props = {
  form: FormInstance<any> | undefined;
  submitForm: ((values: any) => void) | undefined;
  origins: Airport[] | undefined;
  destinations: Airport[] | undefined;
  disabledDate: ((date: moment.Moment) => boolean) | undefined;
  disabled: boolean;
  onChangeOrigin:
    | ((value: any, option: Airport | Airport[]) => void)
    | undefined;
};

const FormComponent: FC<Props> = ({
  form,
  submitForm,
  origins,
  destinations,
  disabledDate,
  disabled,
  onChangeOrigin,
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
          options={origins}
          optionFilterProp="label"
          placeholder="select origin"
          onChange={onChangeOrigin}
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
          disabled={disabled}
        />
      </Form.Item>
      <Form.Item
        name="departureDateRange"
        label="Departure date"
        rules={[{ required: true, message: "Please fill departure date" }]}
      >
        <RangePicker
          disabled={disabled}
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
          disabled={disabled}
          style={{ width: "100%" }}
          disabledDate={disabledDate}
        />
      </Form.Item>
      <Form.Item className={styles.lastRow}>
        <Button
          disabled={disabled}
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
