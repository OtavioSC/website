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

export type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
};
