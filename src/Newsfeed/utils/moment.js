import moment from 'moment';

moment.updateLocale('en', {
  relativeTime : {
      future: "in %s",
      past:   "%s ago",
      s  : '1s',
      ss : '%ds',
      m:  "1m",
      mm: "%dm",
      h:  "1h",
      hh: "%dh",
      d:  "1d",
      dd: "%dd",
      w:  "1w",
      ww: "%dw",
      M:  "1m",
      MM: "%dm",
      y:  "1y",
      yy: "%dy"
  }
});

export const getDisplayDate = createdAt => {
  const currentDate = moment().startOf('day');
  const createdDate = moment(createdAt, 'YYYY-MM-DD');
  const durationInWeeks = moment.duration(currentDate.diff(createdDate)).asWeeks();
  const relativeTime = moment(createdAt).fromNow(true);
  const absoluteTime = createdDate.format('LL');

  return durationInWeeks > 4 ? absoluteTime : relativeTime;
}

export default moment;