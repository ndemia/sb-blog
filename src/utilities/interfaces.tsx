export interface FetchPropsInterface {
  endPoint: string;
  fetchConfig: {
    method: string;
    body?: string;
  };
}

export interface CategoryInterface {
  id: number;
  name: string;
  created_at: number | null;
  updated_at: number | null;
}

export interface BlogpostInterface {
  category: CategoryInterface;
  category_id: number;
  content: string;
  created_at: string;
  id: number;
  img_url: string;
  title: string;
  updated_at: string;
}

export interface BlogpostsResponseInterface {
  current_page: number;
  data: BlogpostInterface[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {}[];
  next_page_url: string;
  path: string;
  per_page: number | string;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface FetchReturnInterface {
  data: CategoryInterface[] | BlogpostsResponseInterface[];
  isLoading: boolean;
  error: string | null;
}

export interface BlogpostCardProps {
  blogpostData: BlogpostInterface;
}
