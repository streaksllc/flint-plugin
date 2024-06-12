const e = "#", u = new RegExp(`^${e}`, "g");
function b(l) {
  return l.name.startsWith(e);
}
const r = [
  {
    label: "never",
    value: "never"
  },
  {
    label: "after completion",
    value: "after-completion"
  },
  {
    label: "daily",
    value: "daily"
  },
  {
    label: "weekly",
    value: "weekly"
  },
  {
    label: "monthly",
    value: "monthly"
  },
  {
    label: "yearly",
    value: "yearly"
  }
], v = [
  {
    label: "day",
    value: "day"
  },
  {
    label: "week",
    value: "week"
  },
  {
    label: "month",
    value: "month"
  },
  {
    label: "year",
    value: "year"
  }
], y = [
  {
    label: "never",
    value: "never"
  },
  {
    label: "after",
    value: "after"
  },
  {
    label: "on date",
    value: "on-date"
  }
], a = [
  {
    label: "Sunday",
    value: "sunday"
  },
  {
    label: "Monday",
    value: "monday"
  },
  {
    label: "Tuesday",
    value: "tuesday"
  },
  {
    label: "Wednesday",
    value: "wednesday"
  },
  {
    label: "Thursday",
    value: "thursday"
  },
  {
    label: "Friday",
    value: "friday"
  },
  {
    label: "Saturday",
    value: "saturday"
  }
], n = [
  {
    label: "day",
    value: "day"
  },
  ...a
], t = [
  {
    label: "January",
    value: "january"
  },
  {
    label: "February",
    value: "february"
  },
  {
    label: "March",
    value: "march"
  },
  {
    label: "April",
    value: "april"
  },
  {
    label: "May",
    value: "may"
  },
  {
    label: "June",
    value: "june"
  },
  {
    label: "July",
    value: "july"
  },
  {
    label: "August",
    value: "august"
  },
  {
    label: "September",
    value: "september"
  },
  {
    label: "October",
    value: "october"
  },
  {
    label: "November",
    value: "november"
  },
  {
    label: "December",
    value: "december"
  }
];
export {
  a as DAYS_OF_WEEK,
  n as DAYS_OF_WEEK_INCL_DAY,
  v as DAY_WEEK_MONTH_YEAR,
  y as ENDS,
  t as MONTHS,
  r as SCHEDULE,
  e as SECTION_PREFIX,
  u as SECTION_PREFIX_REGEX,
  b as isSection
};
