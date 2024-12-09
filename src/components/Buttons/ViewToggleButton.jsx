import React from 'react';
import { Typography, Box } from '@mui/material';
import CountInput from '../TextFields/TextFieldPokemons';
import ViewToggleButtonWithTooltip from './ViewToggleButtonWithTooltip';
import './ViewToggleButton.css';

const ViewToggleButton = ({ viewMode, onToggleView, count, totalCount, onCountChange }) => {
  return (
    <div className='content-view'>
      <div className='title-container'>
          <Typography variant="span" className='tableorcard-title'>
            {viewMode === 'cards' ? 'Exibindo Cards' : 'Exibindo Tabela'}
          </Typography>
          <Box className='box-count'>
            {`Exibindo ${count} de ${totalCount} resultados`}
          </Box>
      </div>

      <div className='action-container'>
        <CountInput count={count} onCountChange={onCountChange} />

        <ViewToggleButtonWithTooltip
          viewMode={viewMode}
          onToggleView={onToggleView}
        />
      </div>
    </div>
  );
};

export default ViewToggleButton;
