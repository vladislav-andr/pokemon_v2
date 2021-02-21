import axios from "axios"

export default async url => {
  const data = await axios
    .get(url)
    .then(res => res.data.results)
    .catch(error => error)
  return data
}