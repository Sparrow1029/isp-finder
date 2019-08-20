import axios from 'axios';

const BLOCK_URL = 'https://geo.fcc.gov/api/census/block/find?format=json&showall=true&';
const ISP_URL = 'https://opendata.fcc.gov/resource/b5f4-szwq.json?';

async function fetchBlockcode({ lat, lon }) {
  try {
    const response = await axios.get(`${BLOCK_URL}latitude=${lat}&longitude=${lon}`);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function fetchIspData(blockcode) {
  try {
    const response = await axios.get(`${ISP_URL}blockcode=${blockcode}`);
    return response;
  } catch (error) {
    console.log(error);
  }

  return null;
}

export { fetchBlockcode, fetchIspData };

// export default fetchFccData = async ({ lat, lon }) => axios
// .get(`${BLOCK_URL}latitude=${lat}&longitude=${lon}`)
// .then((response) => {
//   axios.get(`${ISP_URL}blockcode=${response.data.Block.FIPS}`);
// });

// const fetchFccData = async ({ lat, lon }) => {
//   const blockcode = await axios.get(`${BLOCK_URL}latitude=${lat}&longitude=${lon}`);
//   const ispData = await axios.get(`${ISP_URL}blockcode=${blockcode.data.Block.FIPS}`);
//
//   return ispData;
// };

// export default fetchFccData;

// Notes
// useEffect with no 2nd arg    -> run every update
// useEffect with []            -> eq to componentDidMount
// useEffect with [dif values]  -> componentDidUpdate with check
