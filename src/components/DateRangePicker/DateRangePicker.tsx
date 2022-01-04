import React, { FC } from 'react';
import { InputGroup } from "react-bootstrap";
import moment from "moment";
import { useFormikContext } from "formik";
import DateInput from "../Inputs/DateInput/DateInput";

interface DateRangePickerProps {
  dateFromName: string;
  dateToName: string;
  values: {
    dateTo: string;
    dateFrom: string;
  }
}

const toISODate = (date: Date, isEndDate?: boolean) => {
  const formattedDate = isEndDate ? moment(date).endOf('day') : moment(date).startOf('day');
  return formattedDate.toISOString();
};

const DateRangePicker: FC<DateRangePickerProps> = ({ dateFromName, dateToName, values }) => {
  const { handleSubmit, setFieldValue } = useFormikContext();

  const ISOStartDate = toISODate(new Date(values.dateFrom));
  const ISOEndDate = toISODate(new Date(values.dateTo), true);

  const isStartDateHigher = (startDate: string) => {
    if (!ISOEndDate) return false;
    return new Date(startDate) >= new Date(ISOEndDate);
  };

  return (
    <InputGroup className='flex-nowrap'>
      <DateInput
        name={dateFromName}
        className='rounded-0 rounded-start text-center'
        placeholderText='DD.MM.YYYY'
        onChange={(date: Date) => {
          const momentStartDate = toISODate(date);
          const momentEndDate = toISODate(date, true);

          isStartDateHigher(momentEndDate) && setFieldValue(dateToName, momentEndDate);
          setFieldValue(dateFromName, momentStartDate);
          handleSubmit();
        }}
      />

      <InputGroup.Text className='rounded-0 text-dark fw-bold bg-secondary-light justify-content-center'>
        do
      </InputGroup.Text>

      <DateInput
        name={dateToName}
        minDate={new Date(ISOStartDate)}
        className='rounded-0 rounded-end text-center'
        placeholderText='DD.MM.YYYY'
        onChange={(date: Date) => {
          const initEndDate = toISODate(date, true);
          setFieldValue(dateToName, initEndDate);
          handleSubmit();
        }}
      />
    </InputGroup>
  );
};

export default DateRangePicker;
