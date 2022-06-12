

export let characterHelper = { 

  //to get character img via id url
  getImage(characterUrl: string): string {
    return `https://rickandmortyapi.com/api/character/avatar/${characterUrl.substr(
      characterUrl.lastIndexOf("/") + 1
    )}.jpeg`;
  },

   //to get residents id as a string array to generate link
   // for insatance [1,2,3] => "1,2,3"
   // this usage to generate id filtered link => .../locations/1,2,3
  getRedisdentsId(residentUrls: Array<string>):string{
    return residentUrls.map((residentId) =>
      residentId.substr(residentId.lastIndexOf("/") + 1)
    ).join(',');
  },
};
