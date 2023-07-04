export type Work = {
  [key: string]: string;
};

export type WorkContent = {
  slug?: string;
  title: string;
  description: string;
  date?: string;
  coverImage?: string;
  author: string;
  ogImage?: {
    url: string;
  };
  content?: string;
};
