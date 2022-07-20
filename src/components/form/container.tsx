import { Alert, Form } from "antd";
import { useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";
import { Locations } from "../../types/locations";
import moment from "moment";
import { API_URL_LOCATIONS, DATE_FORMAT } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { RangePickerProps } from "antd/lib/date-picker";
import { FormValues } from "../../types/form-values";
import FormComponent from "./form";
import FormSkeleton from "./skeleton";

const Container = () => {
  const { data, error } = useFetch<Locations>(API_URL_LOCATIONS);
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
      destinations={destinations}
      disabledDate={disabledDate}
      isLoading={!data}
    />
  );
};

export default Container;
