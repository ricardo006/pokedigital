import React, { useState } from 'react';
import { Container, Card, CardContent, TableHead, TableBody, TableRow, TableCell, Typography, Box, Table, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import './PokemonTable.css';
import CardNotFound from '../CardNotFound';
import { getInitials, handleKeyNavigation } from '../../utils';

const Badge = styled(Box)({
    display: 'inline-block',
    backgroundColor: '#e0e0e0',
    borderRadius: '12px',
    padding: '2px 8px',
    margin: '2px',
    fontSize: '0.75rem',
    color: '#333',
});

const PokemonTableBody = ({ pokemons }) => {
    const [focusIndex, setFocusIndex] = useState(null);
    const tableRef = React.useRef(null);

    const handleKeyDown = (e) => {
        handleKeyNavigation(e, pokemons, setFocusIndex);
    };

    const handleMouseEnter = (index) => {
        setFocusIndex(index);
    };

    // Garantindo que o item em foco esteja visível na tela
    React.useEffect(() => {
        if (focusIndex !== null && tableRef.current) {
            const row = tableRef.current.querySelector(`[data-index="${focusIndex}"]`);
            if (row) {
                row.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }
    }, [focusIndex]);

    if (pokemons.length === 0) {
        return (
            <Container>
                <CardNotFound />
            </Container>
        );
    }

    return (
        <Box sx={{ overflowX: 'auto' }}>
            <Table>
                <TableHead className="table-head-pokemon">
                    <TableRow>
                        <TableCell sx={{ color: 'var(--text-color)' }}>Imagem</TableCell>
                        <TableCell sx={{ color: 'var(--text-color)' }}>Nome e Habilidades</TableCell>
                        <TableCell sx={{ color: 'var(--text-color)' }}>Tipos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody
                    className="table-body-pokemon"
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    ref={tableRef}
                >
                    {pokemons.map((pokemon, index) => (
                        <TableRow
                            className="table-row-hover"
                            key={index}
                            data-index={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            sx={{
                                backgroundColor: focusIndex === index ? '#02121f' : 'transparent',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: focusIndex === index ? '#02121f' : '#011627',
                                },
                            }}
                        >
                            <TableCell
                                sx={{
                                    color: 'var(--text-color)',
                                    width: '5%',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    border: 0,
                                }}
                            >
                                {pokemon.sprites.front_default ? (
                                    <img
                                        src={pokemon.sprites.front_default}
                                        alt={pokemon.name}
                                        width="70"
                                        style={{ borderRadius: '50%', backgroundColor: '#0d1b2a' }}
                                    />
                                ) : (
                                    <Avatar sx={{ width: 50, height: 50, fontSize: '1.5rem' }}>
                                        {getInitials(pokemon.name)}
                                    </Avatar>
                                )}
                            </TableCell>
                            <TableCell sx={{ color: 'var(--text-color)', border: 0 }}>
                                <Typography variant="subtitle1">
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                </Typography>
                                <Box mt={2}>
                                    {pokemon.abilities.map((ability, i) => (
                                        <Badge sx={{ color: '#086375', backgroundColor: '#b2f7ef', fontWeight: 500, fontSize: 16 }} key={i}>
                                            {ability.ability.name}
                                        </Badge>
                                    ))}
                                </Box>
                            </TableCell>
                            <TableCell sx={{ border: 0 }}>
                                {pokemon.types.map((type, i) => (
                                    <Typography sx={{ color: 'var(--text-color)' }} key={i} variant="body2" color="textSecondary">
                                        {type.type.name}
                                        {i < pokemon.types.length - 1 && ', '}
                                    </Typography>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default PokemonTableBody;
