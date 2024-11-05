const axios = require('axios');

test('Deve retornar dados de um veículo', async () => {
  const response = await axios.get('https://swapi.dev/api/vehicles/4/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Sand Crawler');
});
