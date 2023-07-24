export interface CharacterLocation {
  name: string,
  url: string
}

export interface CharacterOrigin {
  name: string,
  url: string
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
