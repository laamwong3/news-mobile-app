export interface NewsTypes {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: null | string;
}

export interface Source {
  id: null | string;
  name: string;
}

export interface NewsProps {
  children: ReactNode;
}

export interface NewsContextProps {
  news: Article[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  fetchNews: () => Promise<void>;
}
