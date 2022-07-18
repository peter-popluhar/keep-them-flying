import { useEffect, useState, FC } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const url = `https://api.skypicker.com/flights?v=3&partner=skypicker&locale=en&typeFlight=return`;

type Params = {
  dateFrom: string;
  dateTo: string;
  flyFrom: string;
  returnFrom: string;
  returnTo: string;
  to: string;
};

const Results: FC<Params> = ({
  dateFrom,
  dateTo,
  flyFrom,
  returnFrom,
  returnTo,
  to,
}) => {
  const { data, error } = useFetch(
    `${url}&flyFrom=${flyFrom}&to=${to}&dateFrom=${dateFrom}&dateTo=${dateTo}&returnFrom=${returnFrom}&returnTo=${returnTo}`
  );

  console.log(data);

  return <p>result</p>;
};

export default Results;
