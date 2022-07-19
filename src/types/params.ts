export type Params = {
  origin?: string;
  destination?: string;
  departureDateRange?: [moment.Moment | null, moment.Moment | null] | null;
  returnDateRange?: [moment.Moment | null, moment.Moment | null] | null;
};