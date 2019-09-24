import React, { useEffect } from 'react';
import axios from 'axios';
import '../index.less';

interface ISuggestProps {
  searchKey: string;
  onSelect: Function;
}

const Suggest: React.FunctionComponent<ISuggestProps> = (props: ISuggestProps) => {
  const { searchKey, onSelect } = props;
  return <div>Suggest</div>;
};

export default Suggest;
