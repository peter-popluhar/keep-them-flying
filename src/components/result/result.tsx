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

const { Item } = Timeline;

type Props = {
  flights: FlightsData[] | undefined;
};

const Results: FC<Props> = ({ flights }) => {
  if (!flights) {
    return (
      <div>
        THere are no any flights for you. Please go back and change filters.
      </div>
    );
  }
  return (
    <div className={styles.results}>
      <h1>Flights:</h1>
      {flights.length < 1 ? (
        <div>
          THere are no any flights for you. Please go <Link to="/">back</Link>{" "}
          and change filters.
        </div>
      ) : (
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
                        {aWeekday} {aDay} {aMonth}
                        {aHour} {aMinute} from {cityFrom}, {countryFrom.name}
                      </Item>
                      <Item>
                        {dWeekday} {dDay} {dMonth}
                        {dHour} {dMinute} to {cityTo}, {countryTo.name}
                      </Item>
                      <Item dot={<UsergroupAddOutlined />}>
                        seats availabel: {availability.seats}
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
      )}
    </div>
  );
};

export default Results;
