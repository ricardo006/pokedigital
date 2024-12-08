import React from 'react';
import { Button, Tooltip, Typography, TextField } from '@mui/material';
import CountInput from '../TextFields/TextFieldPokemons';
import ViewToggleButtonWithTooltip from './ViewToggleButtonWithTooltip';

const ViewToggleButton = ({ viewMode, onToggleView, count, onCountChange }) => {
  return (
    <div style={{ margin: '20px auto', color: '#cbf3f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant="h6" sx={{ flexGrow: 1, fontSize: 14, fontWeight: 600, fontFamily: 'Inter', justifyContent: 'space-between', alignSelf: 'center', textAlign: 'left' }}>
        {viewMode === 'cards' ? 'Exibindo Cards' : 'Exibindo Tabela'}
        <span style={{ marginLeft: '10px', fontSize: 14, fontWeight: 400, color: '#b2f7ef' }}>
          ({count} resultados)
        </span>
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
