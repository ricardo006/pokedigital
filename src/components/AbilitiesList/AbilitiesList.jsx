import React from 'react';
import { Box, Typography, Badge } from '@mui/material';

const AbilitiesList = ({ abilities }) => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 1,
            flexWrap: 'nowrap',
            overflowX: 'auto', 
            maxWidth: '100%',
            paddingBottom: '10px',
        }}
    >
        {abilities && abilities.length > 0 ? (
            abilities.map((ability, index) => (
                <Badge
                    key={index}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '50px',
                        height: '20px',
                        backgroundColor: '#b2f7ef',
                        color: '#086375',
                        textTransform: 'capitalize',
                        borderRadius: '30px',
                        fontSize: '12px',
                        p: '6px',
                        fontWeight: 600,
                        border: '0.6px solid #086375',
                        whiteSpace: 'nowrap',
                        marginTop: '10px'
                    }}
                >
                    <Typography variant="body2" component="span">
                        {ability.ability.name}
                    </Typography>
                </Badge>
            ))
        ) : (
            <Typography variant="body2" color="textSecondary">
                Nenhuma habilidade
            </Typography>
        )}
    </Box>
  );
};

export default AbilitiesList;
