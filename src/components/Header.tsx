import React, { memo } from 'react';
import './Header.less';

interface IHeadersProps {
  onBack: React.MouseEventHandler<HTMLDivElement>;
  title: string;
}

const Headers: React.FunctionComponent<IHeadersProps> = (props: IHeadersProps) => {
  const { title, onBack } = props;
  return (
    <div className={`header`}>
      <div className={'header-back'} onClick={onBack}>
        <svg width={42} height={42}>
          <polyline points={'25,13 16,21 25,29'} stroke={'#fff'} strokeWidth={2} fill={'none'} />
        </svg>
      </div>
      <div className={'header-title'}>{title}</div>
    </div>
  );
};

export default memo(Headers);
