const paths = {
  home() {
    return "/";
  },
  login() {
    return "/dashboard";
  },
  portfolio(userName: string) {
    return `/portfolio/${userName}`;
  },
};
