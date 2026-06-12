"use client"
import { today, getLocalTimeZone } from "@internationalized/date";
import {Calendar, DateField, DatePicker, Label} from "@heroui/react";
import { useState } from "react";
import { MdDateRange } from "react-icons/md";
const DatePic = ({date, setDate}) => {
    
    return (
        <DatePicker minValue={today(getLocalTimeZone())} value={date} onChange={setDate} className="w-full" name="date">
      <Label className="text-[#527c74] flex items-center gap-2"><span className="text-[#c9a84c]"><MdDateRange /></span>DATE</Label>
      <DateField.Group  fullWidth className='bg-[#1f3530] text-[#c9a84c] font-plus_jakarta'>
        <DateField.Input className='bg-[#1f3530] '>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
        <DateField.Suffix>
          <DatePicker.Trigger>
            <DatePicker.TriggerIndicator />
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <DatePicker.Popover>
        <Calendar aria-label="Event date">
          <Calendar.Header>
            <Calendar.YearPickerTrigger>
              <Calendar.YearPickerTriggerHeading />
              <Calendar.YearPickerTriggerIndicator />
            </Calendar.YearPickerTrigger>
            <Calendar.NavButton slot="previous" />
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
          </Calendar.Grid>
          <Calendar.YearPickerGrid>
            <Calendar.YearPickerGridBody>
              {({year}) => <Calendar.YearPickerCell year={year} />}
            </Calendar.YearPickerGridBody>
          </Calendar.YearPickerGrid>
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>
    );
};

export default DatePic;