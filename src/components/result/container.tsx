import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Flights, FlightsData } from "../../types/flights";
import { API_URL_FLIGHTS } from "../../utils/constants";
import Loader from "../loader";
import Results from "./result";
import { getTime } from "../../utils/time-helper";
import { ResultParams } from "../../types/result-params";

const Container = () => {
  const location = useLocation();
  const { dateFrom, dateTo, flyFrom, returnFrom, returnTo, to } =
    location.state as ResultParams;
  const [flights, setFlights] = useState<FlightsData[]>();
  const { data, error } = useFetch<Flights>(
    `${API_URL_FLIGHTS}&flyFrom=${flyFrom}&to=${to}&dateFrom=${dateFrom}&dateTo=${dateTo}&typeFlight=return&returnFrom=${returnFrom}&returnTo=${returnTo}`
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
      aTimeUTC: getTime(item.aTimeUTC),
      dTimeUTC: getTime(item.dTimeUTC),
      fly_duration: item.fly_duration,
    }));

    setFlights(values);
  }, [data]);

  if (error) return <p>There is an error.</p>;
  if (!data) return <Loader />;

  return <Results flights={flights} />;
};

export default Container;
