import React, { memo } from 'react';
import { Anchor } from 'antd';
import CityItem from '@/pages/citySelector/components/CityItem';
import '../index.less';

const { Link } = Anchor;
interface ICitySectionProps {
  title: string;
  cities: any[];
  onSelect: Function;
}

const CitySection: React.FunctionComponent<ICitySectionProps> = (props: ICitySectionProps) => {
  const { cities = [], title, onSelect } = props;
  return (
    <ul className={'city-ul'}>
      <Anchor affix={false} key={`title`} className={`city-li`}>
        <a name={title} />
        <Link href={`#${title}`} title={title} />
      </Anchor>
      {cities.map(city => (
        <CityItem key={city.name} name={city.name} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default memo(CitySection);
