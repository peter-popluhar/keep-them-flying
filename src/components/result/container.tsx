import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Flights } from "../../types/flights";
import { API_URL_FLIGHTS } from "../../utils/constants";
import Results from "./result";

// @FIXME move to types
type Params = {
  dateFrom: string;
  dateTo: string;
  flyFrom: string;
  returnFrom: string;
  returnTo: string;
  to: string;
};

type data = {
  availability: { seats: number };
  cityFrom: string;
  cityTo: string;
  countryFrom: { code: string; name: string };
  countryTo: { code: string; name: string };
  price: string;
};

const Container = () => {
  const location = useLocation();
  const { dateFrom, dateTo, flyFrom, returnFrom, returnTo, to } =
    location.state as Params;
  const [flights, setFlights] = useState<data[]>();
  const { data, error } = useFetch<Flights>(
    `${API_URL_FLIGHTS}&flyFrom=${flyFrom}&to=${to}&dateFrom=${dateFrom}&dateTo=${dateTo}&returnFrom=${returnFrom}&returnTo=${returnTo}`
  );

  useEffect(() => {
    const currency = data?.currency;
    const values = data?.data.map((item) => ({
      availability: item.availability,
      cityFrom: item.cityFrom,
      cityTo: item.cityTo,
      countryFrom: item.countryFrom,
      countryTo: item.countryTo,
      price: `${item.price} ${currency}`,
    }));

    setFlights(values);
  }, [data]);

  if (error) return <p>There is an error.</p>;
  if (!data) return <Spin size="large" />;

  return <Results flights={flights} />;
};

export default Container;
