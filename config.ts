//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream

import { Config } from './src/types/config';

// Bento-next config
// Use an editor with Typescript support to get autocomplete and validity checking!
export const config: Config = {
  // General
  name: 'Ridwan',
  openInNewTab: true,
  title: 'Bento',

  // Clock
  twelveHourFormat: false,
  flashSeparator: false,

  // Font Family
  font: {
    // 'google' or 'local'
    source: 'google',
    // Font name, e.g. 'Roboto' (case sensitive)
    name: 'Overpass',
  },

  // Theme
  theme: 'catppuccin-mocha',

  // Place a background image in ./src/assets/images/ and provide the file name.
  // If running in docker, ensure that you have a bind mount for `./src/assets/images:/src/src/assets/images`
  // Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  // Set to "" to disable.
  backgroundImage: '',
  themes: [
    // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    'arc',
    'bento',
    'catppuccin-frappe',
    'catppuccin-macchiato',
    'catppuccin-mocha',
    'conceptdark', // dark mode only
    'monokai',
    'nord',
    'sakura',
    'solarized',
  ],

  // Search Bar
  searchBar: true,
  searchEngine: 'google', // google, ddg
  barPlaceholder: '', // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Good night,',

  // Layout
  layout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: import.meta.env.VITE_API_KEY, // Set your OpenWeatherMap key in .env - Move the included .env.example to .env
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // Automatic theme switching:
  // "system" - Switches based on OS color preference
  // "location" - Switches based on local sunrise/sunset (requires OpenWeatherMap API key)
  // "preset" - Switches based on set hours
  // "none" - No automatic switching
  autoTheme: 'system',

  // If autoTheme is set to "preset", set the hours below.
  darkModeOnTime: '18:30',
  lightModeOnTime: '07:00',

  // Set any of the below options to false to disable drawing the component on the page.
  // If themeButton is set to false, the theme can only be set in this file.
  // Disabling the weather component may cause issues with location-based light/dark switching.
  componentsEnabled: {
    searchBar: true,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: true,
  },

  // Buttons
  buttons: [
    // First buttons group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        name: 'YouTube', // set the name of the card
        icon: 'fab-youtube', // provide a FontAwesome icon name. Regular icons (fa-) don't require a prefix, while FA-Brands icons must be prefixed with "fab-"
        url: 'https://youtube.com/', // provide a link to the page.
      },
      {
        name: 'Youtube Music',
        icon: 'circle-play',
        url: 'https://music.youtube.com',
      },
      {
        name: 'Github',
        icon: 'fab-github',
        url: 'https://github.com/',
      },
      {
        name: 'Mail',
        icon: 'envelope',
        url: 'https://outlook.office.com/mail/',
      },
      {
        name: 'Canvas',
        icon: 'paintbrush',
        url: 'https://calendar.google.com/calendar/r',
      },
      {
        name: 'EdStem',
        icon: 'comments',
        url: 'https://edstem.org/au/dashboard',
      },
    ],
    // Second buttons group
    // You must use the 'buttons' layout to use this group.
    [
      {
        name: 'Todoist',
        icon: 'list-ol',
        url: 'https://todoist.com',
      },
      {
        name: 'twitter',
        icon: 'fab-twitter',
        url: 'https://twitter.com/',
      },
      {
        name: 'bot',
        icon: 'fab-discord',
        url: 'https://discord.com/app',
      },
      {
        name: 'Amazon',
        icon: 'fab-amazon',
        url: 'https://amazon.com/',
      },
      {
        name: 'Hashnode',
        icon: 'fab-hashnode',
        url: 'https://hashnode.com/',
      },
      {
        name: 'Figma',
        icon: 'fab-figma',
        url: 'https://figma.com/',
      },
    ],
  ],

  // Lists
  lists: [
    // First list group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        icon: 'fab-github', // Icon for the list to use. The same as the buttons.
        links: [
          {
            name: 'Front', // Display text for the link
            url: 'https://www.reddit.com/r/Frontend/', // URL to the page
          },
          {
            name: 'Rust',
            url: 'https://www.reddit.com/r/rust/',
          },
          {
            name: 'Go',
            url: 'https://www.reddit.com/r/golang/',
          },
          {
            name: 'Repos',
            url: 'https://github.com/migueravila',
          },
        ],
      },
      {
        icon: 'coffee',
        links: [
          {
            name: 'Linkedin',
            url: 'https://www.linkedin.com',
          },
          {
            name: 'Dribbble',
            url: 'https://www.dribbble.com',
          },
          {
            name: 'Trello',
            url: 'https://www.trello.com',
          },
          {
            name: 'Slack',
            url: 'https://www.slack.com',
          },
        ],
      },
    ],
    // Second list group
    // You must use the 'lists' layout to use this group.
    [
      {
        icon: 'house-user',
        links: [
          {
            name: 'Spotify',
            url: 'https://www.spotify.com',
          },
          {
            name: 'Reddit',
            url: 'https://www.reddit.com',
          },
          {
            name: 'Hashnode',
            url: 'https://www.hashnode.com',
          },
          {
            name: 'Pocket',
            url: 'https://www.pocket.com',
          },
        ],
      },
      {
        icon: 'music',
        links: [
          {
            name: 'Inspirational',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
          {
            name: 'Classic',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
          {
            name: 'Oldies',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
          {
            name: 'Rock',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        ],
      },
    ],
  ],
};
