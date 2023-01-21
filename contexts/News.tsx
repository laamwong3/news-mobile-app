import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Article, NewsContextProps, NewsProps, NewsTypes } from ".";
import { categories, getNewsAPI } from "../constants/newsApi";

const NewsContext = createContext({} as NewsContextProps);

const News = ({ children }: NewsProps) => {
  const [news, setNews] = useState<Article[]>([]);
  const [category, setCategory] = useState(categories[0].name);
  const [index, setIndex] = useState(1);

  const fetchNews = async () => {
    const response = await fetch(getNewsAPI(category));
    const data: NewsTypes = await response.json();

    setNews(data.articles);
    setIndex(1);
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <NewsContext.Provider
      value={{ news, index, setIndex, fetchNews, category, setCategory }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default News;

export const useNews = () => useContext(NewsContext);
