import { Alert, Form } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { Locations } from "../../types/locations";
import moment from "moment";
import { API_URL_LOCATIONS, DATE_FORMAT } from "../../utils/constants";
import { RangePickerProps } from "antd/lib/date-picker";
import { FormValues } from "../../types/form-values";
import FormComponent from "./form";
import FormSkeleton from "./skeleton";

import { airports } from "../../data/airports";
import { Airport } from "../../types/airport";

const Container = () => {
  const [term, setTerm] = useState("PRG");
  const { data, error } = useFetch<Locations>(
    `${API_URL_LOCATIONS}&term=${term}`
  );

  const [origins, setSetOrigins] = useState<Airport[]>([]);

  const [destinations, setDestinations] = useState<Airport[]>([]);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const arr = airports.map((item) => ({
      label: `${item.label}  ${item.value}`,
      value: item.value,
    }));

    if (arr) {
      setSetOrigins(arr);
    }
  }, []);

  useEffect(() => {
    const arr = data?.locations.map((item) => ({
      label: `${item.city.name}  ${item.city.code}`,
      value: item.city.code,
    }));

    if (arr) {
      setDestinations(arr);
    }
  }, [data?.locations]);

  const submitForm = (values: FormValues) => {
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

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < moment().startOf("day");
  };

  const onChangeOrigin = (value: string) => {
    setTerm(value);
    form.setFieldsValue({ destination: undefined });
  };

  if (error)
    return (
      <Alert
        message="Error"
        description="There is an error"
        type="error"
        showIcon
      />
    );
  if (!data) return <FormSkeleton />;

  return (
    <FormComponent
      form={form}
      submitForm={submitForm}
      origins={origins}
      destinations={destinations}
      disabledDate={disabledDate}
      disabled={destinations.length < 1}
      onChangeOrigin={onChangeOrigin}
    />
  );
};

export default Container;
