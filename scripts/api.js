async function getAllPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  const response = await fetch(url);
  const { results } = await response.json();
  return results;
}

async function getOnePokemonSprite(url) {

  // fetch the response from url 
  // return one of the sprites we get
  
  const response = await fetch(url);
  var  {sprites} =  await response.json();
  return sprites.front_default;

}
export { getAllPokemon, getOnePokemonSprite };
