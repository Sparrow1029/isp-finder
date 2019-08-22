import axios from 'axios';

const BLOCK_URL = 'https://geo.fcc.gov/api/census/block/find?format=json&showall=true&';
const ISP_URL = 'https://opendata.fcc.gov/resource/b5f4-szwq.json?';

async function fetchBlockcode({ lat, lon }) {
  const response = await axios.get(`${BLOCK_URL}latitude=${lat}&longitude=${lon}`);
  return response;
}

async function fetchIspData(blockcode) {
  const response = await axios.get(`${ISP_URL}blockcode=${blockcode}`);
  return response;
}

export { fetchBlockcode, fetchIspData };
