const axios = require('axios');

test('Deve retornar dados de um planeta', async () => {
  const response = await axios.get('https://swapi.dev/api/planets/1/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Tatooine');
});
