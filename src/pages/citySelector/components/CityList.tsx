import React, { memo } from 'react';
import CitySection from '@/pages/citySelector/components/CitySection';
import AlphaIndex from '@/pages/citySelector/components/AlphaIndex';
import '../index.less';

interface ICityListProps {
  sections: any[];
  onSelect: Function;
  toAlpha: (alpha: string) => void;
}

const CityList: React.FunctionComponent<ICityListProps> = (props: ICityListProps) => {
  const { sections = [], onSelect, toAlpha } = props;
  const alphaBeta = Array.from(new Array(26), (v, k) => {
    return String.fromCharCode(65 + k);
  });
  return (
    <div className={'city-list'}>
      <div className="city-cate">
        {sections.map(section => (
          <CitySection
            key={section.title}
            title={section.title}
            cities={section.cities}
            onSelect={onSelect}
          />
        ))}
      </div>
      <div className="city-index">
        {alphaBeta.map(alpha => (
          <AlphaIndex key={alpha} alpha={alpha} />
        ))}
      </div>
    </div>
  );
};

export default memo(CityList);
