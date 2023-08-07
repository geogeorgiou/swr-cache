import axiosInstance from "../axiosConfig";

const correctUrl =
  "https://api.openbrewerydb.org/v1/breweries/b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0";
const wrongUrl = `${correctUrl}$`;

const getBrewery = async () => {
  console.log("fetching data");
  const resp = await axiosInstance.get(wrongUrl);
  return resp.data;
};

export const dataApi = { getBrewery };
