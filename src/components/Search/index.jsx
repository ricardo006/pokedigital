import React, { useState, useEffect, useRef } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const SearchWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    color: '#cbf3f0', // Cor do texto do input e do ícone
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
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
    color: '#cbf3f0', // Cor do ícone
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#cbf3f0', // Cor do texto do input
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        color: '#cbf3f0', // Cor do texto dentro do input
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Search = ({ value = '', onChange }) => {
    const [searchValue, setSearchValue] = useState(value);
    const searchInputRef = useRef(null);

    useEffect(() => {
        const handleShortcutFocus = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                searchInputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleShortcutFocus);
        return () => {
            window.removeEventListener('keydown', handleShortcutFocus);
        };
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <SearchWrapper>
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
        </SearchWrapper>
    );
};

export default Search;
