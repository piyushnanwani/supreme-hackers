import data from '../data/MOCK_DATA';

export default function getProfileData (id) {
  // fetch from API and token

  // abhi ke liye
  let filtered_data = data.filter((ele) => ele.id === id); 
  return filtered_data
}