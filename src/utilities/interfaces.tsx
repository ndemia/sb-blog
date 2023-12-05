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
