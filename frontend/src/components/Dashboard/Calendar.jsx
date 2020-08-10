import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  DayView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { ViewSwitcher } from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './demo-data/appointments';
// import Demo from './demo-data/viewSwitching';


export default function Calendar() {

  const [state, setState] = useState([{
    data: appointments,
    currentDate: '2018-07-25',
    currentViewName: 'work-week',
  }]);

  const currentViewNameChange = (currentViewName) => { setState({ currentViewName }); };


  // const { data } = appointments; // сделать отрисовку аппоинтментов через useState!
  // const currentDate = '2018-06-27';
  const currentDateChange = (currentDate) => { setState({ currentDate }); };
  const { data, currentViewName } = state;

  return (
    <Paper>
      <Scheduler
        data={data}
        height={660}
      >
        {/* <Demo /> */}
        <ViewState
defaultCurrentDate="2018-07-25"
          currentDate={state.currentDate}
          currentViewName={currentViewName}
          onCurrentDateChange={currentDateChange}
          onCurrentViewNameChange={currentViewNameChange}
        />
        <WeekView
          startDayHour={10}
          endDayHour={19}
        />
        <WeekView
          name="work-week"
          displayName="Work Week"
          excludedDays={[0, 6]}
          startDayHour={9}
          endDayHour={19}
        />
        <MonthView />
        <DayView />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}
