import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './demo-data/appointments';



export default function Calendar() {

  const [state, setState] = useState([{
    data: appointments,
    currentDate: '2018-06-27',
  }]);
 
// const { data } = appointments; // сделать отрисовку аппоинтментов через useState!
// const currentDate = '2018-06-27';
const currentDateChange = (currentDate) => { setState({ currentDate }); };
  
  return (
    <Paper>
      <Scheduler
        data={state.currentDate}
        height={660}
      >
        <ViewState
          currentDate={state.currentDate}
          onCurrentDateChange={currentDateChange}
        />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}
