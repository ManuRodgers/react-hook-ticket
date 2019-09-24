import { Dispatch } from 'redux';
import { RouterTypes } from 'umi';

export interface IUmiComponentProps extends RouterTypes {
  dispatch: Dispatch<any>;
}

export interface IGlobalState {
  homepage: IHomepageModel;
  query: IQueryModel;
}

export interface IHomepageModel {
  from: string;
  to: string;
  isCitySelectorVisible: boolean;
  fromSelected: boolean;
  cityData: any;
  isLoadingCityData: boolean;
  isDateSelectorVisible: boolean;
  highSpeed: boolean;
  selectedDepartDate: number;
}

export interface IQueryModel {
  trainList: any[];
  orderType: Order;
  onlyTickets: boolean;
  ticketTypes: any[];
  checkedTicketTypes: object;
  trainTypes: any[];
  checkedTrainTypes: object;
  departStations: any[];
  checkedDepartStations: object;
  arriveStations: any[];
  checkedArriveStations: object;
  departTimeStart: number;
  departTimeEnd: number;
  arriveTimeStart: number;
  arriveTimeEnd: number;
  isFiltersVisible: boolean;
}

export enum Order {
  TIME = 'TIME',
  DURATION = 'DURATION',
}
