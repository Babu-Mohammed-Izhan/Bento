// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Izhan",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Weather
  weatherKey: "aa7b4cfeeadb9036821b23f5e6012c15",
  weatherIcons: "OneDark", // 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "37.775",
  defaultLongitude: "-122.419",

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/Babu-Mohammed-Izhan",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://gmail.com/",
    },
    {
      id: "3",
      name: "Trello",
      icon: "trello",
      link: "https://trello.com/",
    },
    {
      id: "4",
      name: "Bookmarks",
      icon: "bookmark",
      link: "chrome://bookmarks/?id=3",
    },
    {
      id: "5",
      name: "Meet",
      icon: "video",
      link: "https://meet.google.com/",
    },
    {
      id: "6",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: "music",
  secondListIcon: "coffee",

  // Links
  lists: {
    firstList: [
      {
        name: "Anime Openings",
        link: "https://www.youtube.com/watch?v=Mn7Bv8rGRzg",
      },
      {
        name: "Lo-Fi",
        link: "https://www.youtube.com/watch?v=1gSe78TIEEk",
      },
      {
        name: "JPop",
        link: "https://www.youtube.com/watch?v=N0lwQ3NjcKQ",
      },
      {
        name: "Japanese Songs",
        link: "https://www.youtube.com/watch?v=-Lx6-QgTRpw",
      },
    ],
    secondList: [
      {
        name: "Linkedin",
        link: "https://linkedin.com/",
      },
      {
        name: "Coding Interview University",
        link: "https://github.com/jwasham/coding-interview-university",
      },
      {
        name: "Web 3.0",
        link: "https://github.com/web3community/blockchain-dev-path",
      },
      {
        name: "RoadMap to a Good Developer",
        link: "https://webk.telegram.org",
      },
    ],
  },
};
