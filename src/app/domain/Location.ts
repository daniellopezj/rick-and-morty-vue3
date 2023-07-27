import LocationResponse from "@/app/infrastructure/response/LocationResponse";

export default class Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;

  constructor(
    id: number = 0,
    name: string= '',
    type: string= '',
    dimension: string= '',
    residents: string[]= [],
    url: string='',
    created: string=''
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.dimension = dimension;
    this.residents = residents;
    this.url = url;
    this.created = created;
  }

  static one(item: LocationResponse) {
    return new Location(
      item.id,
      item.name,
      item.type,
      item.dimension,
      item.residents,
      item.url,
      item.created,
    );
  }

  static many(items: LocationResponse[]) {
    return items.map((item: LocationResponse) =>
    Location.one(item),
    );
  }

}
