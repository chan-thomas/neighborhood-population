## Objective
- Search cities by state
- View total population of a city
- List top populous cities in a state
- Add and remove a zip entry

## TASK: Create Routes

- GET /api/states/:state/cities: list cities in a state (Provided)
- GET /api/state/:state/top: top 5 populous cities in a state
   - [aggregate data](https://mongoosejs.com/docs/api/aggregate.html#Aggregate())
- GET /api/city/:city/pop: total population for a city
- POST /api/zip
  - Add a zip entry (Additional Frontend code is required)  
- DELETE /api/zip/:id:
  - Delete a zip entry (Additional Frontend code is required
