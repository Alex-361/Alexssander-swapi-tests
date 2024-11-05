const axios = require('axios');

test('Deve retornar dados de uma nave estelar', async () => {
  const response = await axios.get('https://swapi.dev/api/starships/9/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Death Star');
});
