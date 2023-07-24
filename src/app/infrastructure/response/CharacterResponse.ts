import { CharacterLocation, CharacterOrigin } from "@/utils/general.types";

export default interface CharacterResponse{
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}
