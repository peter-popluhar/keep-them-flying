import { useEffect, useState, FC } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Results from "./result";

// https://api.skypicker.com/flights?v=3&partner=skypicker&locale=en&flyFrom=prague_cz&to=paris_fr&dateFrom=18%2F07%2F2022&dateTo=20%2F07%2F2022&typeFlight=return&returnFrom=19%2F07%2F2022&returnTo=30%2F07%2F2022&fbclid=IwAR3UV-qWjneeWF90TL9P7hUV2IdhJm86NgCJqmB1OISSkbwwa43G26I6Boc

type Params = {
  dateFrom: string;
  dateTo: string;
  flyFrom: string;
  returnFrom: string;
  returnTo: string;
  to: string;
};

const url = `https://api.skypicker.com/flights?v=3&partner=skypicker&locale=en&typeFlight=return`;

const ResultsContainer = () => {
  const location = useLocation();
  const { dateFrom, dateTo, flyFrom, returnFrom, returnTo, to } =
    location.state as Params;
  const [results, setResults] = useState<unknown>();

  const { data, error } = useFetch(
    `${url}&flyFrom=${flyFrom}&to=${to}&dateFrom=${dateFrom}&dateTo=${dateTo}&returnFrom=${returnFrom}&returnTo=${returnTo}`
  );

  useEffect(() => {
    setResults(data as unknown);
  }, [data]);

  console.log(results);

  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <p>test</p>
    // <Results
    //   dateFrom={dateFrom}
    //   dateTo={dateTo}
    //   flyFrom={flyFrom}
    //   returnFrom={returnFrom}
    //   returnTo={returnTo}
    //   to={to}
    // />
  );
};

export default ResultsContainer;
