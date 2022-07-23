import { FC } from "react";
import { Descriptions } from "antd";
import { ResultParams } from "../../types/result-params";

type Props = { flightInfo: ResultParams };

const FlightInfo: FC<Props> = ({ flightInfo }) => {
  const { dateFrom, dateTo, flyFrom, returnFrom, returnTo, to } = flightInfo;
  return (
    <Descriptions title="Flight Info">
      <Descriptions.Item label="Flying from">{flyFrom}</Descriptions.Item>
      <Descriptions.Item label="Flying to">{to}</Descriptions.Item>
      <br />
      <Descriptions.Item label="Departure date">
        {dateFrom} - {dateTo}
      </Descriptions.Item>
      <Descriptions.Item label="Return date">
        {returnFrom} - {returnTo}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default FlightInfo;
