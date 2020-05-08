import React, { useState } from 'react';
import { format } from 'date-fns';
import { TextDayPicker } from '@arch-ui/day-picker';

const ISO8601 = 'YYYY-MM-DD';

const CalendarDayFilterView = ({ onChange, filter }) => {
  const [value, setValue] = useState(format(new Date(), ISO8601));

  const handleSelectedChange = newValue => {
    if (newValue === null) {
      newValue = format(new Date(), ISO8601);
    }

    onChange(newValue);
    setValue(newValue);
  };

  if (!filter) return null;

  return <TextDayPicker date={value} onChange={handleSelectedChange} />;
};

export default CalendarDayFilterView;
