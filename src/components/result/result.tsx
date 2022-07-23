import { FC } from "react";
import {
  EuroOutlined,
  DownOutlined,
  UsergroupAddOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Timeline, Button } from "antd";
import { Link } from "react-router-dom";

import { FlightsData } from "../../types/flights";
import styles from "./styles.module.css";
import FlightInfo from "./flight-info";
import { ResultParams } from "../../types/result-params";

const { Item } = Timeline;

type Props = {
  flights: FlightsData[] | undefined;
  flightInfo: ResultParams;
};

const Results: FC<Props> = ({ flights, flightInfo }) => {
  if (flights && flights.length < 1) {
    return (
      <div className={styles.results}>
        <FlightInfo flightInfo={flightInfo} />
        <div>
          There are no any flights for you. Please go <Link to="/">back</Link>{" "}
          and change filters.
        </div>
      </div>
    );
  }
  return (
    <div className={styles.results}>
      <FlightInfo flightInfo={flightInfo} />
      <Link to="/">Back to filters</Link>
      <br />
      <br />
      <h2>Flights:</h2>
      <br />
      {
        <>
          <ul>
            {flights
              ?.slice(0, 10)
              .map(
                (
                  {
                    availability,
                    cityFrom,
                    cityTo,
                    countryFrom,
                    countryTo,
                    price,
                    aTimeUTC,
                    dTimeUTC,
                    fly_duration,
                  },
                  i
                ) => {
                  const {
                    weekday: aWeekday,
                    day: aDay,
                    month: aMonth,
                    hour: aHour,
                    minute: aMinute,
                  } = aTimeUTC;
                  const {
                    weekday: dWeekday,
                    day: dDay,
                    month: dMonth,
                    hour: dHour,
                    minute: dMinute,
                  } = dTimeUTC;
                  return (
                    <li key={i}>
                      <Timeline>
                        <Item dot={<DownOutlined />}>
                          {aWeekday} {aDay} {aMonth}, {aHour} {aMinute} from{" "}
                          {cityFrom}, {countryFrom.name}
                        </Item>
                        <Item>
                          {dWeekday} {dDay} {dMonth}, {dHour} {dMinute} to{" "}
                          {cityTo}, {countryTo.name}
                        </Item>
                        <Item dot={<UsergroupAddOutlined />}>
                          seats available: {availability.seats}
                        </Item>
                        <Item dot={<ClockCircleOutlined />}>
                          flight duration: {fly_duration}
                        </Item>
                        <Item dot={<EuroOutlined />}>price: {price}</Item>
                      </Timeline>
                      <Button>Buy for {price}</Button>
                    </li>
                  );
                }
              )}
          </ul>
          <Link to="/">Back to filters</Link>
        </>
      }
    </div>
  );
};

export default Results;
