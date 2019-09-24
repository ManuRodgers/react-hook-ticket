import React, { memo } from 'react';
import '../index.less';

interface ICityItemProps {
  name: string;
  onSelect: Function;
}

const CityItem: React.FunctionComponent<ICityItemProps> = (props: ICityItemProps) => {
  const { name, onSelect } = props;
  return (
    <li
      onClick={() => {
        onSelect(name);
      }}
      className={'city-li'}
    >
      {name}
    </li>
  );
};

export default memo(CityItem);
