export const getApiUrl = (pathname) => {
  let baseURL = "https://tweetify.herokuapp.com";
  if (window.location.href.indexOf("localhost") > 0) {
    baseURL = "http://localhost:8000";
  }
  return `${baseURL}/${pathname}`;
};
