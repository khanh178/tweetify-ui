import { createContext } from "react";

// Creating the context object and passing the default values.
const NewsContext = createContext({ tweetList: [], setTweetList: () => {} });

export default NewsContext;
