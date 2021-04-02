function request(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      const error = new Error("not okay");
      error.status = response.status;
      throw error;
    } else {
      return response.json();
    }
  });
}

function testApi(heroName) {
  return request(
    `http://gateway.marvel.com/v1/public/characters?name=${heroName}&apikey=139c2bdff32d5999ceacca00253fbcb3&hash=cd471a13a017d492c710d9dd9969723d`
  );
}

export default testApi;
