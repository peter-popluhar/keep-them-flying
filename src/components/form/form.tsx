import { Form, Select, DatePicker, Button, FormInstance } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import moment from "moment";

import styles from "./styles.module.css";
import { Airport } from "../../types/airport";
import { Locations } from "../../types/locations";
import useFetch from "../../hooks/useFetch";
import { API_URL_LOCATIONS } from "../../utils/constants";
import Selects from "./selects";

const { RangePicker } = DatePicker;

type Props = {
  form: FormInstance<any> | undefined;
  submitForm: ((values: any) => void) | undefined;
  origins: Airport[] | undefined;
  disabledDate: ((date: moment.Moment) => boolean) | undefined;
};

const FormComponent: FC<Props> = ({
  form,
  submitForm,
  origins,
  disabledDate,
}) => {
  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={submitForm}
      className={styles.formGrid}
    >
      <Selects form={form} origins={origins} />
      <Form.Item
        name="departureDateRange"
        label="Departure date"
        rules={[{ required: true, message: "Please fill departure date" }]}
      >
        <RangePicker style={{ width: "100%" }} disabledDate={disabledDate} />
      </Form.Item>
      <Form.Item
        name="returnDateRange"
        label="Return date"
        rules={[{ required: true, message: "Please fill return date" }]}
      >
        <RangePicker style={{ width: "100%" }} disabledDate={disabledDate} />
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
