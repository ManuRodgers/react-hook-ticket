import React, { useCallback, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import { Flex, Button } from 'antd-mobile';
import { memo } from 'react';
import { connect } from 'dva';
import { router } from 'umi';
import { IGlobalState, IUmiComponentProps } from '@/common/type';
import { h0 } from '@/common/fp';
import Nav from '@/components/Nav';
import List from './components/List';
import Bottom from './components/Bottom';
import Header from '@/components/Header';
import { setOnlyTickets } from '@/actions/queryActions';
import './index.less';

const mapStateToProps = ({ homepage, query }: IGlobalState) => ({
  homepage,
  query,
});

type QueryStateProps = ReturnType<typeof mapStateToProps>;

export interface IQueryProps extends IUmiComponentProps, QueryStateProps {}

const Query: React.FunctionComponent<IQueryProps> = (props: IQueryProps) => {
  const { dispatch, homepage, query } = props;
  const { from, to, highSpeed, selectedDepartDate } = homepage;
  const selectedDate = useMemo<ReturnType<typeof dayjs>>(() => {
    return dayjs(selectedDepartDate);
  }, [selectedDepartDate]);
  const {
    orderType,
    onlyTickets,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
  } = query;
  useEffect(() => {}, [
    from,
    to,
    highSpeed,
    selectedDate,
    orderType,
    onlyTickets,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
  ]);
  const handleOnBack: React.MouseEventHandler<HTMLDivElement> = useCallback(() => {
    router.goBack();
  }, []);
  return (
    <Flex className={`query`} direction={'column'}>
      <Flex.Item>
        <Header title={`${from}--${to}`} onBack={handleOnBack} />
      </Flex.Item>
    </Flex>
  );
};

export default memo(connect(mapStateToProps)(Query));
