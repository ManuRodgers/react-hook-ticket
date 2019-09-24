import React, { memo, useCallback } from 'react';
import { router } from 'umi';

import './journey.less';
import { Icon } from 'antd';
import { Dispatch } from 'redux';
import { setFromSelected } from '@/actions/homepageActions';

interface IJourneyProps {
  from: string;
  to: string;
  exchangeFromTo?: React.MouseEventHandler<HTMLDivElement>;
  dispatch: Dispatch<any>;
}

const Journey: React.FunctionComponent<IJourneyProps> = (props: IJourneyProps) => {
  const { from, to, exchangeFromTo, dispatch } = props;
  return (
    <div className={'journey'}>
      <div
        onClick={() => {
          dispatch(setFromSelected({ fromSelected: true }));
          router.push('/citySelector');
        }}
        className={'journey-station'}
      >
        <input
          type="text"
          readOnly
          name={'from'}
          value={from}
          className={'journey-input journey-from'}
        />
      </div>
      <div className={'journey-switch'} onClick={exchangeFromTo}>
        <Icon type="swap" />
      </div>
      <div
        onClick={() => {
          dispatch(setFromSelected({ fromSelected: false }));
          router.push('/citySelector');
        }}
        className={'journey-station'}
      >
        <input type="text" readOnly name={'to'} value={to} className={'journey-input journey-to'} />
      </div>
    </div>
  );
};

export default memo(Journey);
