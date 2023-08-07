import { CharacterLocation, CharacterOrigin } from "@/types/general.types";

export default interface CharacterResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: CharacterOrigin | null;
  location: CharacterLocation | null;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}
