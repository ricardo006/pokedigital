import React, { useEffect, useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import PokemonTable from "../components/PokemonTable";
import ViewToggleButton from '../components/Buttons/ViewToggleButton';
import pokemonService from '../services/pokemonService';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [viewMode, setViewMode] = useState('table');
  const [count, setCount] = useState(100);

  // Buscar pokémons com base na quantidade
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await pokemonService.getPokemons(count); 
        setPokemons(data);
        setFilteredPokemons(data);
      } catch (error) {
        console.error('Erro ao buscar pokémons:', error);
      }
    };

    fetchData();
  }, [count]);

  const pokemonFilter = (name) => {
    if (name.trim() === '') {
      setFilteredPokemons(pokemons);
      return;
    }

    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );

    setFilteredPokemons(filtered);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <NavBar pokemonFilter={pokemonFilter} />

        <ViewToggleButton 
          viewMode={viewMode}
          onToggleView={() => setViewMode(viewMode === 'cards' ? 'table' : 'cards')}
          count={count}
          onCountChange={handleCountChange}
        />

        {viewMode === 'cards' ? (
          <Grid container spacing={3}>
            {filteredPokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                <PokemonCard
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                  abilities={pokemon.abilities}
                  types={pokemon.types.map((typeObj) => typeObj.type.name)}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <PokemonTable pokemons={filteredPokemons} />
        )}
      </Container>
    </div>
  );
};
