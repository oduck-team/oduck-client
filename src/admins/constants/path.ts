const ADMIN_ROUTE = {
  HOME: "/dash",
  LOGIN: "/dash/login",
  CREATE_ANIME: "/dash/animes/new",
  ANIME_LIST: "/dash/animes",
  USER_LIST: "/dash/users",
  INQUIRY_LIST: "/dash/helpdesk/inquiry",
  REPORT_LIST: "/dash/helpdesk/report",
} as const;

export default ADMIN_ROUTE;
