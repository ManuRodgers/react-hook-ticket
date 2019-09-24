import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { router } from 'umi';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { IGlobalState, IUmiComponentProps } from '@/common/type';
import './index.less';
import { fetchCityDataAsync, setFrom, setTo } from '@/actions/homepageActions';
import CityList from '@/pages/citySelector/components/CityList';

const mapStateToProps = ({ homepage }: IGlobalState) => ({
  homepage,
});
type CitySelectorStateProps = ReturnType<typeof mapStateToProps>;

interface ICitySelectorProps extends IUmiComponentProps, CitySelectorStateProps {}

const CitySelector: React.FC<ICitySelectorProps> = (props: ICitySelectorProps) => {
  const [searchKey, setSearchKey] = useState<string>('');
  const key = useMemo<string>(() => searchKey.trim(), [searchKey]);
  const { homepage, dispatch } = props;
  const { cityData, isLoadingCityData, fromSelected } = homepage;
  console.log(`fromSelected`, fromSelected);
  const onSelect = (name: string) => {
    if (fromSelected) {
      dispatch(setFrom({ from: name }));
    } else {
      dispatch(setTo({ to: name }));
    }
    router.push('/homepage');
  };

  const toAlpha = (alpha: string): void => {
    // @ts-ignore
    document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
  };
  const outputCitySections = () => {
    if (isLoadingCityData) {
      return <Icon type="loading" />;
    }
    if (cityData) {
      return <CityList toAlpha={toAlpha} sections={cityData.cityList} onSelect={onSelect} />;
    }
    return <div>error</div>;
  };
  useEffect(() => {
    if (cityData || isLoadingCityData) {
      return;
    }
    dispatch(fetchCityDataAsync());
  }, [cityData, isLoadingCityData, dispatch]);
  console.log(cityData);
  const handleGoBack: React.MouseEventHandler<HTMLElement> = useCallback(() => router.goBack(), []);
  return (
    <div className={'city-selector'}>
      <div className="city-search">
        <Icon onClick={handleGoBack} className={'search-back'} type="left" />
        <div className="search-input-wrapper">
          <input
            value={searchKey}
            placeholder={'城市、车站的中文或者拼音'}
            type="text"
            className={'search-input'}
            onChange={e => setSearchKey(e.target.value)}
          />
        </div>
        <Icon
          onClick={() => setSearchKey('')}
          className={classnames('search-clean', { hidden: key.length === 0 })}
          type="close-circle"
        />
      </div>
      {outputCitySections()}
    </div>
  );
};

export default memo(connect(mapStateToProps)(CitySelector));
