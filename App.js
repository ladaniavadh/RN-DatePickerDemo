/*This is an Example of Facebook Login*/
import React, { Component } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default class App extends Component {


  render() {

    const disableDate = [
      {
        "date": "2020-07-13",
        "id":1
      },
      {
        "date": "2020-08-20",
        "id":1
      },
      {
        "date": "2020-07-27",
        "id":1
      },
      {
        "date": "2020-07-31",
        "id":1
      },
      {
        "date": "2020-08-13",
        "id":1
      }
    ]
    let newDaysObject = {};

    disableDate.forEach((day) => {
      newDaysObject[day.date] = {
        disabled: true,
        disableTouchEvent: true
      };
    });
    return (
      <Calendar
        onDayPress={(day) => {console.warn('selected day', day)}}
        hideExtraDays={true}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        markedDates={newDaysObject}
      />
    );
  }
}
