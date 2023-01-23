import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Article, NewsContextProps, NewsProps, NewsTypes } from ".";
import {
  categories,
  getNewsAPI,
  sources,
  getSourceAPI,
} from "../constants/newsApi";

const NewsContext = createContext({} as NewsContextProps);

const News = ({ children }: NewsProps) => {
  const [news, setNews] = useState<Article[]>([]);
  const [category, setCategory] = useState(categories[0].name);
  const [index, setIndex] = useState(1);
  const [source, setSource] = useState(sources[0].id);

  const fetchNews = async (reset = category) => {
    const response = await fetch(getNewsAPI(category));
    const data: NewsTypes = await response.json();

    setNews(data.articles);
    setIndex(1);
  };

  const fetchNewsFromSource = async () => {
    const response = await fetch(getSourceAPI(source));
    const data: NewsTypes = await response.json();

    setNews(data.articles);
    setIndex(1);
  };

  useEffect(() => {
    fetchNews();
  }, [category]);
  useEffect(() => {
    fetchNewsFromSource();
  }, [source]);

  return (
    <NewsContext.Provider
      value={{ news, index, setIndex, fetchNews, setSource, setCategory }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default News;

export const useNews = () => useContext(NewsContext);
