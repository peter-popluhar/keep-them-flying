import { FC } from "react";
import { FlightsData } from "../../types/flights";

type Props = {
  flights: FlightsData[] | undefined;
};

const Results: FC<Props> = ({ flights }) => {
  console.log(flights?.slice(0, 10));

  return (
    <>
      <p>result</p>
      <ul>
        {flights
          ?.slice(0, 10)
          .map(
            (
              { availability, cityFrom, cityTo, countryFrom, countryTo, price },
              i
            ) => (
              <li key={i}>
                <p>availability: {availability.seats}</p>
                <p>cityFrom: {cityFrom}</p>
                <p>cityTo: {cityTo}</p>
                <p>countryFrom: {countryFrom.name}</p>
                <p>countryTo: {countryTo.name}</p>
                <p>price: {price}</p>
              </li>
            )
          )}
      </ul>
    </>
  );
};

export default Results;
