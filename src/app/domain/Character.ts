import { CharacterLocation, CharacterOrigin } from "@/utils/general.types";


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

  constructor(id = 0, name = '', status = '', species = '', gender = '', origin = null, location = null, image = '', episode = [], url = '', created = '',) {
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
}
