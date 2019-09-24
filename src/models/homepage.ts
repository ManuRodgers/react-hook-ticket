import { IGlobalState } from '@/common/type';
import axios from 'axios';
import {
  setTo,
  setCityData,
  setFrom,
  setFromSelected,
  setIsCitySelectorVisible,
  toggleHighSpeedSync,
  setIsLoadingCityData,
  toggleDateSelector,
  setSelectedCityAsync,
  showCitySelectorAsync,
  exchangeFromToAsync,
  fetchCityDataAsync,
  setSelectedDepartDate,
} from '@/actions/homepageActions';
import { DvaModelBuilder } from 'dva-model-creator';

const initState: IGlobalState['homepage'] = {
  from: '北京',
  to: '上海',
  isCitySelectorVisible: false,
  cityData: null,
  isLoadingCityData: false,
  fromSelected: false,
  isDateSelectorVisible: false,
  highSpeed: false,
  selectedDepartDate: Date.now(),
};
const homepageBuilder = new DvaModelBuilder(initState, 'homepage')
  .case(setTo, (state, { to }) => ({ ...state, to }))
  .case(setFrom, (state, { from }) => ({ ...state, from }))
  .case(setFromSelected, (state, { fromSelected }) => ({ ...state, fromSelected }))
  .case(setCityData, (state, { cityData }) => ({ ...state, cityData }))
  .case(setIsCitySelectorVisible, (state, { isCitySelectorVisible }) => {
    return { ...state, isCitySelectorVisible };
  })
  .case(setIsLoadingCityData, (state, { isLoadingCityData }) => ({ ...state, isLoadingCityData }))
  .case(toggleHighSpeedSync, (state, { highSpeed }) => ({ ...state, highSpeed }))
  .case(setSelectedDepartDate, (state, { selectedDepartDate }) => ({
    ...state,
    selectedDepartDate,
  }))
  .takeEvery(exchangeFromToAsync, function*({ from, to }, { put }) {
    yield put(setTo({ to: from }));
    yield put(setFrom({ from: to }));
  })
  .takeEvery(fetchCityDataAsync, function*(payload, { select, put }) {
    try {
      const isLoadingCityData = yield select(
        (state: IGlobalState) => state.homepage.isLoadingCityData,
      );
      if (isLoadingCityData) {
        return;
      }
      const cache = yield JSON.parse(localStorage.getItem('city_data_cache') || '{}');
      if (Date.now() < cache.expires) {
        yield put(setCityData({ cityData: cache.data }));
        return;
      }
      yield put(setIsLoadingCityData({ isLoadingCityData: true }));
      const { data, status } = yield axios.get('/api/cityList');
      if (status === 200) {
        yield put(setCityData({ cityData: data }));
        yield put(setIsLoadingCityData({ isLoadingCityData: false }));
        yield localStorage.setItem(
          'city_data_cache',
          JSON.stringify({
            expires: Date.now() + 1000 * 60,
            data,
          }),
        );
      }
    } catch (error) {
      console.error(error);
      yield put(setIsLoadingCityData({ isLoadingCityData: false }));
    }
  });

export default homepageBuilder.build();
