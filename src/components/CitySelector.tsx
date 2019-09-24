import React, { memo } from 'react';
import { Icon } from 'antd';
import classnames from 'classnames';
import './CitySelector.less';

interface ICitySelectorProps {
  isCitySelectorVisible: boolean;
  cityData: any;
  isLoadingCityData: boolean;
}

const CitySelector: React.FunctionComponent<ICitySelectorProps> = (props: ICitySelectorProps) => {
  const { cityData, isCitySelectorVisible, isLoadingCityData } = props;
  return (
    <div className={classnames('city-selector', { hidden: !isCitySelectorVisible })}>
      <div className="city-search">
        <Icon className={'search-back'} type="left" />
        <div className="search-input-wrapper">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default memo(CitySelector);
