import { Form, Select, FormInstance } from "antd";
import { FC, useEffect, useState } from "react";

import { Airport } from "../../types/airport";
import { Locations } from "../../types/locations";
import useFetch from "../../hooks/useFetch";
import { API_URL_LOCATIONS } from "../../utils/constants";

type Props = {
  form: FormInstance<any> | undefined;
  origins: Airport[] | undefined;
};

const Selects: FC<Props> = ({ form, origins }) => {
  // @FIXME
  // had to move destinations logic here to avoid all form re-rendering
  // ugly!!!
  const [term, setTerm] = useState("PRG");
  const onChangeOrigin = (value: string) => {
    setTerm(value);
    if (form) {
      form.setFieldsValue({ destination: undefined });
    }
  };
  const { data } = useFetch<Locations>(`${API_URL_LOCATIONS}&term=${term}`);
  const [destinations, setDestinations] = useState<Airport[]>([]);

  useEffect(() => {
    const arr = data?.locations.map((item) => ({
      label: `${item.city.name}  ${item.city.code}`,
      value: item.city.code,
    }));

    if (arr) {
      setDestinations(arr);
    }
  }, [data?.locations]);
  return (
    <>
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
          disabled={destinations.length < 1}
        />
      </Form.Item>
    </>
  );
};

export default Selects;
