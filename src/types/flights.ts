import { Time } from "./time";

export interface CountryFrom {
  code: string;
  name: string;
}

export interface CountryTo {
  code: string;
  name: string;
}

export interface Duration {
  departure: number;
  return: number;
  total: number;
}

export interface Conversion {
  EUR: number;
}

export interface BagsPrice {
  1: number;
  hand: number;
  personal_item: number;
  2?: number;
}

export interface Baglimit {
  hand_height: number;
  hand_length: number;
  hand_weight: number;
  hand_width: number;
  hold_dimensions_sum: number;
  hold_height: number;
  hold_length: number;
  hold_weight: number;
  hold_width: number;
  personal_item_height: number;
  personal_item_length: number;
  personal_item_weight: number;
  personal_item_width: number;
}

export interface Availability {
  seats: number;
}

export interface Route {
  id: string;
  combination_id: string;
  flyFrom: string;
  flyTo: string;
  cityFrom: string;
  cityCodeFrom: string;
  cityTo: string;
  cityCodeTo: string;
  dTime: number;
  dTimeUTC: number;
  aTime: number;
  aTimeUTC: number;
  airline: string;
  flight_no: number;
  operating_carrier: string;
  operating_flight_no: string;
  fare_basis: string;
  fare_category: string;
  fare_classes: string;
  fare_family: string;
  return: number;
  latFrom: number;
  lngFrom: number;
  latTo: number;
  lngTo: number;
  mapIdfrom: string;
  mapIdto: string;
  bags_recheck_required: boolean;
  vi_connection: boolean;
  guarantee: boolean;
  equipment?: any;
  vehicle_type: string;
  original_return: number;
  following_airport_change?: boolean;
}

export interface Datum {
  id: string;
  flyFrom: string;
  flyTo: string;
  cityFrom: string;
  cityCodeFrom: string;
  cityTo: string;
  cityCodeTo: string;
  countryFrom: CountryFrom;
  countryTo: CountryTo;
  dTime: number;
  dTimeUTC: number;
  aTime: number;
  aTimeUTC: number;
  nightsInDest: number;
  quality: number;
  distance: number;
  duration: Duration;
  fly_duration: string;
  return_duration: string;
  price: number;
  conversion: Conversion;
  bags_price: BagsPrice;
  baglimit: Baglimit;
  availability: Availability;
  airlines: string[];
  route: Route[];
  booking_token: string;
  deep_link: string;
  tracking_pixel: string;
  facilitated_booking_available: boolean;
  pnr_count: number;
  has_airport_change: boolean;
  technical_stops: number;
  throw_away_ticketing: boolean;
  hidden_city_ticketing: boolean;
  virtual_interlining: boolean;
  mapIdfrom: string;
  mapIdto: string;
  hashtags: string[];
}

export interface BestResult {
  duration: number;
  price: number;
  quality: number;
  sort: string;
}

export interface Seats {
  passengers: number;
  adults: number;
  children: number;
  infants: number;
}

export interface SearchParams {
  flyFrom_type: string;
  to_type: string;
  seats: Seats;
}

export interface Hashtag {
  count: number;
  name: string;
}

export interface AirlinesList {
  filterName: string;
}

export interface AirportsList {
  filterName: string;
  name: string;
}

export interface Flights {
  search_id: string;
  currency: string;
  fx_rate: number;
  data: Datum[];
  best_results: BestResult[];
  search_params: SearchParams;
  hashtags: Hashtag[];
  location_hashtags: string[];
  airlinesList: AirlinesList[];
  airportsList: AirportsList[];
  all_airlines: string[];
  all_stopover_airports: string[];
  all_stopover_countries: string[];
  all_prices: unknown;
  sort_version: number;
}

export interface FlightsData {
  availability: { seats: number };
  cityFrom: string;
  cityTo: string;
  countryFrom: { code: string; name: string };
  countryTo: { code: string; name: string };
  price: string;
  aTimeUTC: Time;
  dTimeUTC: Time;
  fly_duration: string;
}
