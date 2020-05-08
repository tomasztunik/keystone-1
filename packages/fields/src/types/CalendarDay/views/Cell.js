import { format } from 'date-fns';

const CalendarDayCell = ({ data, field: { format: formatString } }) => {
  if (!data) {
    return null;
  }

  if (!formatString) {
    return data;
  }

  return format(data, formatString);
};

export default CalendarDayCell;
