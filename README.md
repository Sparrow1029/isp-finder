# ISP Locator
### List ISPs that offer service at a geographic location

Based on data provided by the FCC, made available through a public API.

Uses Nominatim API to perform geocoding on address searches.

Currently you may have to try various levels of specificity in searches...

Example: 

>_123 Fake St, Wallawalla WA_

may not return any results, while 

>_123 Fake St, Washington_

might return something...

`npm start` should start the dev server at `https://localhost:3000`

you can add a file called `.env` or `.env.development.local` with the line
`BROWSER=none` in order to keep the browser from automatically opening a window
when you start the server.

### TODOs:
- [x] Connect FCC API and Nominatim search API
- [x] Create basic search functionality with async requests
- [ ] Add filter functionality for Business vs Consumer, Mbps vs MBps, etc
- [ ] Integrate Leaflet with Mapbox/OSM to Add interactive map for selecting area
- [ ] Reformat and move search results into floating interactive / side nav div


- [ ] (One day) Use `bounding box` data to create geojson representation of ISP area coverage
