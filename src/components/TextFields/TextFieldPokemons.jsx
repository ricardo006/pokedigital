import React from 'react';
import { TextField } from '@mui/material';

const CountInput = ({ count, onCountChange }) => {
    const handleChange = (e) => {
        const newValue = Math.max(0, e.target.value); 
        onCountChange({ target: { value: newValue } }); 
    };

    return (
        <TextField
            label="Quantidade de Pokémons"
            type="number"
            value={count}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{
                width: '220px',
                height: '45px !important',
                marginRight: '20px',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#cbf3f0',
                    },
                    '&:hover fieldset': {
                        borderColor: '#0097a7',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#cbf3f0',
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#cbf3f0',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#cbf3f0',
                },
                '& .MuiInputBase-input': {
                    color: '#cbf3f0',
                },
            }}
        />
    );
};

export default CountInput;
