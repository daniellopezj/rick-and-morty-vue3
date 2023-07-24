export interface CharacterLocation {
  name: string,
  url: string
}

export interface CharacterOrigin {
  name: string,
  url: string
}

export interface ParamsMany {
  page: number;
}
export interface PaginationItems {
  count: number;
  pages: number;
  next: string;
}

export interface PaginationParams {
  info: PaginationItems;
  results: unknown;
}

export interface CustomRequest {
  data?:unknown,
  error?: unknown
}
