export interface NewsItem {
  title: string;
  description: string;
  date: string;
  image: string;
  author?: string;
}

export const newsItems: NewsItem[]; 