export interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterOrigin {
  name: string;
  url: string;
}

export interface ParamsMany {
  page: number;
}
export interface paramsSearchCharacter {
  page: number;
  name?: string;
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
  data?: unknown;
  error?: unknown;
}

export const CharacterStatus = [
  { value: 'alive', title: 'vivo' },
  { value: 'dead', title: 'Muerto' },
  { value: 'unknown', title: 'Desconocido' },
];
