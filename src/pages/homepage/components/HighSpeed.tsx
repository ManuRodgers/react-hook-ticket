import * as React from 'react';
import { Switch, List } from 'antd-mobile';

interface IHighSpeedProps {
  highSpeed: boolean;
  onChange: (checked: boolean) => void;
}

const HighSpeed: React.FunctionComponent<IHighSpeedProps> = (props: IHighSpeedProps) => {
  const { highSpeed, onChange } = props;
  return (
    <List>
      <List.Item extra={<Switch color={'#1ba9ba'} checked={highSpeed} onChange={onChange} />}>
        只看高铁或者动车
      </List.Item>
    </List>
  );
};

export default HighSpeed;
