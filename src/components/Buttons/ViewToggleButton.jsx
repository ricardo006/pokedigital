import React from 'react';
import { Typography, Box } from '@mui/material';
import CountInput from '../TextFields/TextFieldPokemons';
import ViewToggleButtonWithTooltip from './ViewToggleButtonWithTooltip';
import './ViewToggleButton.css';

const ViewToggleButton = ({ viewMode, onToggleView, count, totalCount, onCountChange }) => {
  return (
    <div className='content-view'>
      <Typography variant="h6" className='tableorcard-title'>
        {viewMode === 'cards' ? 'Exibindo Cards' : 'Exibindo Tabela'}
        <Box className='box-count'>
          {`Exibindo ${count} de ${totalCount} resultados`}
        </Box>
      </Typography>

      <CountInput count={count} onCountChange={onCountChange} />

      <ViewToggleButtonWithTooltip
        viewMode={viewMode}
        onToggleView={onToggleView}
      />
    </div>
  );
};

export default ViewToggleButton;
