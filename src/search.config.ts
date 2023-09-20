import { ISearchConfig } from "./contexts/search/search";

export default {
   terms: ["home", "about", "cookies", "help", "user", "rules", "developer", "author"],
   results: {
      home: {
         term: "home",
         type: "LINK",
         label: "Home",
         link: "/home",
      },
      about: {
         term: "about",
         type: "LINK",
         label: "About",
         link: "/about",
      },
      cookies: {
         term: "cookies",
         type: "LINK",
         label: "Cookies",
         link: "/cookies",
      },
      help: {
         term: "help",
         type: "LINK",
         label: "Help",
         link: "/help",
      },
      user: {
         term: "user",
         type: "NAVIGATION",
         label: "user",
         to: "",
      },
      rules: {
         term: "rules",
         type: "LINK",
         label: "Rules",
         link: "/rules",
      },
      developer: {
         term: "developer",
         type: "TEXT",
         label: "Developer",
         text: "Moritz Bohrmann",
      },
      author: {
         term: "author",
         type: "TEXT",
         label: "Author",
         text: "Moritz Bohrmann",
      },
   },
} as ISearchConfig;
