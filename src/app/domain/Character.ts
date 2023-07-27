import { CharacterLocation, CharacterOrigin } from "@/types/general.types";
import CharacterResponse from "@/app/infrastructure/response/CharacterResponse";
export default class Character {
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

  constructor(id = 0, name = '', status = '', species = '', gender = '', origin: CharacterLocation | null = null, location: CharacterLocation | null = null, image = '', episode: Array<string> = [], url = '', created = '',) {
    this.id = id
    this.name = name
    this.status = status
    this.species = species
    this.gender = gender
    this.location = location
    this.image = image
    this.origin = origin
    this.episode = episode
    this.url = url
    this.created = created
  }

  static one(item: CharacterResponse) {
    return new Character(
      item.id,
      item.name,
      item.status,
      item.species,
      item.gender,
      item.origin,
      item.location,
      item.image,
      item.episode,
      item.url,
      item.created,
    );
  }

  static many(items: CharacterResponse[]) {
    return items.map((item: CharacterResponse) =>
      Character.one(item),
    );
  }

}
