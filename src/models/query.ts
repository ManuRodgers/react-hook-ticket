import { IGlobalState, Order } from '@/common/type';
import { DvaModelBuilder } from 'dva-model-creator';
import { setOnlyTickets } from '@/actions/queryActions';
const initState: IGlobalState['query'] = {
  trainList: [],
  orderType: Order.TIME,
  onlyTickets: false,
  ticketTypes: [],
  checkedTicketTypes: {},
  trainTypes: [],
  checkedTrainTypes: {},
  departStations: [],
  checkedDepartStations: {},
  arriveStations: [],
  checkedArriveStations: {},
  departTimeStart: 0,
  departTimeEnd: 24,
  arriveTimeStart: 0,
  arriveTimeEnd: 24,
  isFiltersVisible: false,
};
const queryBuilder = new DvaModelBuilder(initState, 'query').case(
  setOnlyTickets,
  (state, { onlyTickets }) => ({ ...state, onlyTickets }),
);

export default queryBuilder.build();
