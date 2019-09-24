import React, { memo, MouseEventHandler } from 'react';
import { Anchor } from 'antd';
import '../index.less';

const { Link } = Anchor;

interface IAlphaIndexProps {
  alpha: string;
}

const AlphaIndex: React.FC<IAlphaIndexProps> = (props: IAlphaIndexProps) => {
  const { alpha } = props;
  return (
    <Anchor affix={false} className={'city-index-item'}>
      <Link href={`#${alpha}`} title={alpha} />
    </Anchor>
  );
};

export default memo(AlphaIndex);
