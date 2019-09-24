import React, { memo, useCallback } from 'react';
import { Flex, Button } from 'antd-mobile';
import { connect } from 'dva';
import { router } from 'umi';
import './index.less';
import Header from '@/components/Header';
import Journey from '@/pages/homepage/components/Journey';
import DepartTime from '@/pages/homepage/components/DepartTime';
import HighSpeed from '@/pages/homepage/components/HighSpeed';
import Submit from '@/pages/homepage/components/Submit';
import { IGlobalState, IUmiComponentProps } from '@/common/type';
import {
  setTo,
  setCityData,
  setFrom,
  setIsCitySelectorVisible,
  toggleHighSpeedSync,
  setIsLoadingCityData,
  toggleDateSelector,
  setSelectedCityAsync,
  showCitySelectorAsync,
  exchangeFromToAsync,
} from '@/actions/homepageActions';

const mapStateToProps = ({ homepage }: IGlobalState) => ({
  homepage,
});

type HomepageStateProps = ReturnType<typeof mapStateToProps>;

export interface IHomepageProps extends IUmiComponentProps, HomepageStateProps {}

const Homepage: React.FunctionComponent<IHomepageProps> = (props: IHomepageProps) => {
  const { homepage, dispatch } = props;
  const {
    to,
    from,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    highSpeed,
    selectedDepartDate,
  } = homepage;
  const handleGoBack: React.MouseEventHandler<HTMLDivElement> = useCallback(
    () => router.goBack(),
    [],
  );
  const handleExchangeFromTo: React.MouseEventHandler<HTMLDivElement> = useCallback(() => {
    dispatch(exchangeFromToAsync({ from, to }));
  }, [from, to, dispatch]);
  const handleHighSpeedChange = useCallback(() => {
    dispatch(toggleHighSpeedSync({ highSpeed: !highSpeed }));
  }, [highSpeed, dispatch]);
  console.log(highSpeed);
  return (
    <div className={'homepage'}>
      <Flex direction={'column'}>
        <Flex.Item className="header-wrapper">
          <Header title={'train-ticket'} onBack={handleGoBack} />
        </Flex.Item>
        <Flex.Item className="form">
          <Journey dispatch={dispatch} to={to} from={from} exchangeFromTo={handleExchangeFromTo} />
          <DepartTime dispatch={dispatch} selectedDepartDate={selectedDepartDate} />
        </Flex.Item>
        <Flex.Item className={'high-speed'}>
          <HighSpeed highSpeed={highSpeed} onChange={handleHighSpeedChange} />
        </Flex.Item>
        <Flex.Item className={'submit'}>
          <Button
            onClick={() => {
              router.push('query');
            }}
            className={`submit-button`}
          >
            Query
          </Button>
        </Flex.Item>
      </Flex>
    </div>
  );
};

export default memo(connect(mapStateToProps)(Homepage));
