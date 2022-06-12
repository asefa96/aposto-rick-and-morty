export let characterHelper = {
  getImage(characterUrl: string): string {
    return `https://rickandmortyapi.com/api/character/avatar/${characterUrl.substr(
      characterUrl.lastIndexOf("/") + 1
    )}.jpeg`;
  },
  getRedisdentsId(residentUrls: Array<string>):string{
    
    return residentUrls.map((residentId) =>
      residentId.substr(residentId.lastIndexOf("/") + 1)
    ).join(',');
  },
};
