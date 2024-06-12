const e = "#", t = new RegExp(`^${e}`, "g");
function i(a) {
  return a.name.startsWith(e);
}
const u = [
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
], s = [
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
], r = [
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
], l = [
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
  ...l
], o = [
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
], v = {
  taskStoreMigrated: !1,
  taskFilter: "incomplete",
  activeTaskId: null,
  musicControl: "youtube",
  youtubeMinizmized: !1,
  autoPlay: !1,
  stopwatchDefaultTime: 25 * 60,
  taskbarWidth: 460,
  showActivityFeed: !1,
  assistantName: "nicole",
  showModal: null,
  isGeneratingVoiceOver: !1,
  playingTaskId: null,
  assistantRules: [
    {
      id: "0",
      name: "start",
      voiceOver: "Let's get started!"
    },
    {
      id: "1",
      name: "half-way",
      voiceOver: "You're halfway done with your task."
    },
    {
      id: "2",
      name: "x-min-left",
      minutes: 10,
      repeats: !1,
      voiceOver: "You have 10 minutes left."
    },
    {
      id: "3",
      name: "x-min-left",
      minutes: 5,
      repeats: !1,
      voiceOver: "You have 5 minutes left."
    },
    {
      id: "4",
      name: "x-min-left",
      minutes: 2,
      repeats: !1,
      voiceOver: "You have 2 minutes left."
    },
    {
      id: "5",
      name: "x-min-left",
      minutes: 1,
      repeats: !1,
      voiceOver: "You have 1 minute left."
    },
    { id: "6", name: "time-up", voiceOver: "Time is up." },
    {
      id: "7",
      name: "x-min-over",
      minutes: 1,
      repeats: !1,
      voiceOver: "You are 1 minute over your estimated task time."
    },
    {
      id: "8",
      name: "x-min-over",
      minutes: 5,
      repeats: !1,
      voiceOver: "You are 5 minutes over your estimated task time."
    },
    {
      id: "9",
      name: "x-min-over",
      minutes: 10,
      repeats: !1,
      voiceOver: "You are 10 minutes over your estimated task time."
    },
    {
      id: "10",
      name: "x-min-over",
      minutes: 15,
      repeats: !1,
      voiceOver: "You are 15 minutes over your estimated task time."
    },
    {
      id: "11",
      name: "x-min-over",
      minutes: 20,
      repeats: !1,
      voiceOver: "You are 20 minutes over your estimated task time."
    },
    {
      id: "12",
      name: "x-min-over",
      minutes: 25,
      repeats: !1,
      voiceOver: "You are 25 minutes over your estimated task time."
    },
    {
      id: "13",
      name: "x-min-over",
      minutes: 30,
      repeats: !1,
      voiceOver: "You are 30 minutes over your estimated task time."
    },
    {
      id: "14",
      name: "x-min-over",
      minutes: 30,
      repeats: !0,
      voiceOver: "You are another 30 minutes over your estimated task time."
    }
  ],
  activatedPlugins: {}
};
export {
  l as DAYS_OF_WEEK,
  n as DAYS_OF_WEEK_INCL_DAY,
  s as DAY_WEEK_MONTH_YEAR,
  r as ENDS,
  o as MONTHS,
  u as SCHEDULE,
  e as SECTION_PREFIX,
  t as SECTION_PREFIX_REGEX,
  i as isSection,
  v as settingsDefaultState
};
