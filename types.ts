
export interface Post {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
  slug: string;
  authorId?: string;
}

export interface Tag {
  name: string;
  slug: string;
  count: number;
}

export interface Author {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  slug: string;
}
