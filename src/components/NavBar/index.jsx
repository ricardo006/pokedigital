import React, { useState, useEffect, useRef } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import { addShortcutFocusListener } from '../../utils';

import './NavBar.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    width: '100%',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar({ pokemonFilter }) {
    const [searchValue, setSearchValue] = useState('');
    const searchInputRef = useRef(null);

    useEffect(() => {
        const cleanup = addShortcutFocusListener(searchInputRef);
        return cleanup;
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        pokemonFilter(value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position="static" 
                sx={{
                    overflowX: 'hidden',
                    backgroundColor: '#011627',
                    color: '#cbf3f0',
                    borderRadius: '20px 20px 0 0',
                    marginTop: '12px',
                    border: '1.8px solid #032541',
                    height: 70,
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                }}
            >
                <Container maxWidth="sx">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img 
                                src="/images/pokemonnf.png" 
                                alt="Logo" 
                                style={{ height: '60px', marginRight: '16px' }} 
                            />

                            <Typography
                                variant="span"
                                noWrap
                                component="div"
                                sx={{ color: '#cbf3f0', fontSize: 12, fontWeight: 600, display: { xs: 'none', sm: 'block' } }}
                            >
                                Sua Biblioteca de PokéDigital
                            </Typography>
                        </Box>

                        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    ref={searchInputRef}
                                    value={searchValue}
                                    onChange={handleInputChange}
                                    placeholder="Pesquisar..."
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
