import { baseURL } from "../config";
import { generateChunkOrdered } from "./generateChunk";


//to generate req api link 
// for instance https://rickandmortyapi.com/api/location/1,2,3,4
export const urls= {
    GET_RESIDENTS: (n?: string) => `${baseURL.residents}/${n || ""}`,
  
    GET_LOCATIONS: (n?: number) =>
      `${baseURL.locations}/${n ? generateChunkOrdered(n).join(",") : ""}`,
    GET_LOCATION_BY_ID: (id: number) => `${baseURL.locations}/${id}`,
  };
  