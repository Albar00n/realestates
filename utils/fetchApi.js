import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
    headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': 'b5c0c11385mshf320cf642998fdap18fb4bjsn1c0ca26dd6c9'
  }
  })

  return data;
}

