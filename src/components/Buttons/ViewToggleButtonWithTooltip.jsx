import React from 'react';
import { Button, Tooltip } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import './ViewToggleButtonWithTooltip.css';

const ViewToggleButtonWithTooltip = ({ viewMode, onToggleView }) => {
  return (
    <Tooltip title={viewMode === 'cards' ? 'Visualizar como Tabela' : 'Visualizar como Cards'}>
      <Button
        variant="contained"
        onClick={onToggleView}
        startIcon={viewMode === 'cards' ? <ViewListIcon /> : <GridViewIcon />}
        className='btncardsortable'
      >
        {viewMode === 'cards' ? 'Tabela' : 'Cards'}
      </Button>
    </Tooltip>
  );
};

export default ViewToggleButtonWithTooltip;
