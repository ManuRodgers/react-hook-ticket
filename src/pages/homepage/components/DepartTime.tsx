import React from 'react';
import { DatePicker, List } from 'antd-mobile';
import { setSelectedDepartDate } from '@/actions/homepageActions';
import './departTime.less';
import { Dispatch } from 'redux';
interface IDepartTimeProps {
  dispatch: Dispatch;
  selectedDepartDate: number;
}

const DepartTime: React.FunctionComponent<IDepartTimeProps> = (props: IDepartTimeProps) => {
  const { dispatch, selectedDepartDate } = props;

  return (
    <div className={`depart-date`}>
      <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={new Date(selectedDepartDate)}
          onChange={date => dispatch(setSelectedDepartDate({ selectedDepartDate: date.getTime() }))}
        >
          <List.Item arrow="horizontal">Date</List.Item>
        </DatePicker>
      </List>
    </div>
  );
};

export default DepartTime;
