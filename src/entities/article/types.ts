export interface Article {
  id: number;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  header_image: {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      large: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      medium: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      small: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    provider_metadata: any | null;
    folderPath: string;
    createdAt: string;
    updatedAt: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preview_image: null | any; // Replace 'any' with the actual type if it's defined
  tags: {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
  categories: {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
  authors: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
  createdBy: {
    id: number;
    firstname: string;
    lastname: string;
    username: string | null;
    email: string;
    password: string;
    resetPasswordToken: string | null;
    registrationToken: string | null;
    isActive: boolean;
    blocked: boolean;
    preferedLanguage: string | null;
    createdAt: string;
    updatedAt: string;
  };
  updatedBy: {
    id: number;
    firstname: string;
    lastname: string;
    username: string | null;
    email: string;
    password: string;
    resetPasswordToken: string | null;
    registrationToken: string | null;
    isActive: boolean;
    blocked: boolean;
    preferedLanguage: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ApiResponse {
  results: Article[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
