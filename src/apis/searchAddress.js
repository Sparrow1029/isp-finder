import { fetchBlockcode, fetchIspData } from './fcc';
import nominatim from './nominatim';

async function searchAddress(address) {
  const nominatimRes = await nominatim
    .get('', {
      params: {
        q: address,
        format: 'json',
        countrycodes: 'us',
        limit: 1,
      },
    })
    .catch(() => null);
  const blockcode = await fetchBlockcode({
    lat: nominatimRes.data[0].lat,
    lon: nominatimRes.data[0].lon,
  }).catch(() => null);
  const ispDataRes = await fetchIspData(blockcode.data.Block.FIPS).catch(() => null);
  return { ispData: ispDataRes.data, address: nominatimRes.data[0].display_name };
}

export default searchAddress;
