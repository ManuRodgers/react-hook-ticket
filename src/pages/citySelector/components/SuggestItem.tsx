import React, { memo } from 'react';
import '../index.less';

interface ISuggestItemProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const SuggestItem: React.FunctionComponent<ISuggestItemProps> = (props: ISuggestItemProps) => {
  const { name, onClick } = props;
  return (
    <li className={`city-suggest-li`} onClick={onClick}>
      {name}
    </li>
  );
};

export default memo(SuggestItem);
