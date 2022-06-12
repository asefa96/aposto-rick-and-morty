export abstract class ApiService {
  async _get(url:string,options={}) {
      const resp= await fetch(url,options)
      return await resp.json()
  }
}
