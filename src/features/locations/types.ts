export interface ILocation {
    info: {
      count: number;
      next?: string;
      pages: number;
      prev?: number;
    };
    results: Array<LocationResults>;
  }
  
  export interface LocationResults {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: Array<string>
    url: string;
    created: string;
  }
  
  