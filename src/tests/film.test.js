const axios = require('axios');

test('Deve retornar dados de um filme', async () => {
  const response = await axios.get('https://swapi.dev/api/films/1/');
  expect(response.status).toBe(200);
  expect(response.data.title).toBe('A New Hope');
});
