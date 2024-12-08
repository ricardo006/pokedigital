import axios from 'axios';

const getPokemons = async (count = 100) => {
  try {
    const endpoints = [];
    for (let i = 1; i <= count; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    
    const responses = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
    return responses.map((res) => res.data);
  } catch (error) {
    console.error('Erro ao buscar pokémons:', error);
    throw error;
  }
};

export default {
  getPokemons,
};
