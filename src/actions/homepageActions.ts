import { actionCreatorFactory } from 'dva-model-creator';

const homepageActionCreator = actionCreatorFactory('homepage');

export const setFrom = homepageActionCreator<{ from: string }>('setFrom');
export const setTo = homepageActionCreator<{ to: string }>('setTo');
export const setFromSelected = homepageActionCreator<{ fromSelected: boolean }>('setFromSelected');
export const setIsLoadingCityData = homepageActionCreator<{ isLoadingCityData: boolean }>(
  `setIsLoadingCityData`,
);
export const setSelectedDepartDate = homepageActionCreator<{ selectedDepartDate: number }>(
  `setSelectedDepartDate`,
);
export const setCityData = homepageActionCreator<{ cityData: any }>('setCityData');
export const fetchCityDataAsync = homepageActionCreator('fetchCityDataAsync');
export const setIsCitySelectorVisible = homepageActionCreator<{ isCitySelectorVisible: boolean }>(
  'setIsCitySelectorVisible',
);
export const toggleHighSpeedSync = homepageActionCreator<{ highSpeed: boolean }>(
  'toggleHighSpeedSync',
);
export const showCitySelectorAsync = homepageActionCreator<{ currentSelectingLeftCity: boolean }>(
  'showCitySelectorAsync',
);
export const setSelectedCityAsync = homepageActionCreator<{ city: string }>('setSelectedCity');
export const toggleDateSelector = homepageActionCreator<boolean>('toggleDateSelector');
export const exchangeFromToAsync = homepageActionCreator<{ from: string; to: string }>(
  'exchangeFromTo',
);
