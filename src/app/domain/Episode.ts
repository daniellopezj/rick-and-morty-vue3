import EpisodeResponse from "@/app/infrastructure/response/EpisodeResponse";

export default class Episode {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;

  constructor(
    id: number,
    name: string,
    airDate: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
  ) {
    this.id = id;
    this.name = name;
    this.airDate = airDate;
    this.episode = episode;
    this.characters = characters;
    this.url = url;
    this.created = created;
  }

  static one(item: EpisodeResponse) {
    return new Episode(
      item.id,
      item.name,
      item.air_date,
      item.episode,
      item.characters,
      item.url,
      item.created,
    );
  }

  static many(items: EpisodeResponse[]) {
    return items.map((item: EpisodeResponse) =>
    Episode.one(item),
    );
  }

}
