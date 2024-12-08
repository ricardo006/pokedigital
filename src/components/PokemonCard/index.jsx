import React from 'react';
import { Avatar, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './PokemonCard.css';
import AbilitiesList from '../AbilitiesList/AbilitiesList';

const getInitials = (name) => {
  const nameParts = name.split(' ');

  if (nameParts.length > 1)
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();

  return nameParts[0][0].toUpperCase();
};

const getRandomColor = () => {
  const colors = ['#4CAF50', '#FFC107', '#2196F3', '#F44336', '#9C27B0'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const PokemonCard = ({ name, image, types, abilities }) => {
  const typeHandler = (types) => {
    if (!types || types.length === 0)
      return <span>No types available</span>;
    

    return types.map((type, index) => (
      <React.Fragment key={index}>
        <span className="type-text">{type}</span>
        {index < types.length - 1 && <span className="type-divider">|</span>}
      </React.Fragment>
    ));
  };

  return (
    <Card className='pokemoncard' sx={{ minHeight: 500, borderRadius: '30px', backgroundColor: '#011627', color: '#cbf3f0' }}>
      <CardMedia
        component="img"
        alt={name}
        className="pokemon-card-media"
        image={image}
        title={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '';
        }}
      />

      {!image && (
        <Avatar
          className="avatar-fallback"
          sx={{
            backgroundColor: getRandomColor(),
            width: 140,
            height: 140,
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          {getInitials(name)}
        </Avatar>
      )}

      <CardContent>
        <Typography variant="h5" component="div">
          {typeHandler(types)}
        </Typography>

        <Typography variant="h6" component="div">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>

        <AbilitiesList abilities={abilities} />
      </CardContent>
    </Card>
  );
};


export default PokemonCard;
