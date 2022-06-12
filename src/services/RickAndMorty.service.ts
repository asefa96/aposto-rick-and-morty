import { useAppSelector } from "../store/hooks";
import { ILocation, LocationResults } from "../features/locations/types";
import { IResident, ICharacter } from "../features/residents/types";
import { characterHelper } from "../helpers/getCharacterInfoUrl";
import { ApiService } from "./Api.service";
import { urls } from "../helpers/generateLink";

class RickAndMortyService extends ApiService {
  async getLocations(paginationNum: number): Promise<Array<LocationResults>> {
    return  this._get(urls.GET_LOCATIONS(paginationNum));
  }

  async getLocationById(locationId: number): Promise<LocationResults> {
    return  this._get(urls.GET_LOCATION_BY_ID(locationId));
  }


  async getLocationsInfo(): Promise<ILocation> {
    return this._get(urls.GET_LOCATIONS());
  }

  async getResidents(residents: Array<string>): Promise<Array<IResident>> {
    let residentIds = characterHelper.getRedisdentsId(residents);

    if(residents.length==1){
      return new Array(await this._get(urls.GET_RESIDENTS(residentIds)))
    }
    return  await this._get(urls.GET_RESIDENTS(residentIds));
  }

}

export default new RickAndMortyService();
