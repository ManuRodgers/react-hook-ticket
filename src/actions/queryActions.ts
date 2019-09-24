import { actionCreatorFactory } from 'dva-model-creator';
import { Order } from '@/common/type';

const queryActionCreator = actionCreatorFactory('query');

export const setTrainList = queryActionCreator<{ trainList: any[] }>('setTrainList');
export const toggleOrderType = queryActionCreator<{ orderType: Order }>(`toggleOrderType`);
export const setOnlyTickets = queryActionCreator<{ onlyTickets: boolean }>(`setOnlyTickets`);
export const setTicketTypes = queryActionCreator<{ ticketTypes: any[] }>(`setTicketTypes`);
export const setCheckedTicketTypes = queryActionCreator<{ checkedTicketTypes: {} }>(
  `setCheckedTicketTypes`,
);
export const setTrainTypes = queryActionCreator<{ trainTypes: any[] }>(`setTrainTypes`);
export const setCheckedTrainTypes = queryActionCreator<{ checkedTrainTypes: {} }>(
  `setCheckedTrainTypes`,
);
export const setDepartStations = queryActionCreator<{ departStations: any[] }>(`setDepartStations`);
export const setCheckedDepartStations = queryActionCreator<{ checkedDepartStations: {} }>(
  `setCheckedDepartStations`,
);
export const setArriveStations = queryActionCreator<{ arriveStations: any[] }>(`setArriveStations`);
export const setCheckedArriveStations = queryActionCreator<{ checkedArriveStations: {} }>(
  `setCheckedArriveStations`,
);
export const setDepartTimeStart = queryActionCreator<{ departTimeStart: number }>(
  `setDepartTimeStart`,
);
export const setDepartTimeEnd = queryActionCreator<{ departTimeEnd: number }>(`setDepartTimeEnd`);
export const setArriveTimeStart = queryActionCreator<{ arriveTimeStart: number }>(
  `setArriveTimeStart`,
);
export const setArriveTimeEnd = queryActionCreator<{ arriveTimeEnd: number }>(`setArriveTimeEnd`);
export const setIsFiltersVisible = queryActionCreator<{ isFiltersVisible: boolean }>(
  `setIsFiltersVisible`,
);
export const getPrevDate = queryActionCreator<{ currentDate: number }>(`getPrevDate`);
export const getNextDate = queryActionCreator<{ currentDate: number }>(`getNextDate`);
