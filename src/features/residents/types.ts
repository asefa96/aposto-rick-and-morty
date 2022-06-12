export interface ICharacter {
  info: {
    count: number;
    next?: string;
    pages: number;
    prev?: number;
  };
  results: Array<IResident>;
}

export interface IResident {
  name: string;
  created: string;
  episode: Array<String>;
  gender: string;
  id: number;
  image: string;
  location: Location;
  origin: Location;
  species: string;
  status: string;
  type: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}
