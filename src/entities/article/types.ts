export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null | string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface ImageAttributes {
  id: number;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider_metadata: null | any;
  createdAt: string;
  updatedAt: string;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface TagAttributes {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface TagData {
  id: number;
  attributes: TagAttributes;
}

export interface CategoryAttributes {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}

export interface AuthorAttributes {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface AuthorData {
  id: number;
  attributes: AuthorAttributes;
}

export interface ArticleAttributes {
  title: string;
  content: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  slug: string;
  excerpt: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  header_image: {
    data: ImageData;
  };
  preview_image: {
    data: ImageData | null;
  };
  tags: {
    data: TagData[];
  };
  categories: {
    data: CategoryData[];
  };
  authors: {
    data: AuthorData[];
  };
}

export interface ArticleData {
  id: number;
  attributes: ArticleAttributes;
}

export interface MetaPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface MetaData {
  pagination: MetaPagination;
}

export interface ApiResponse {
  data: ArticleData[];
  meta: MetaData;
}
