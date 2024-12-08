import React from 'react';
import { Button, Tooltip } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';

const ViewToggleButtonWithTooltip = ({ viewMode, onToggleView }) => {
  return (
    <Tooltip title={viewMode === 'cards' ? 'Visualizar como Tabela' : 'Visualizar como Cards'}>
      <Button
        variant="contained"
        onClick={onToggleView}
        startIcon={viewMode === 'cards' ? <ViewListIcon /> : <GridViewIcon />}
        sx={{
          textTransform: 'none',
          alignSelf: 'flex-start',
          backgroundColor: '#b2f7ef',
          color: '#0d1b2a',
          width: 120,
          height: 40,
          borderRadius: '10px',
        }}
      >
        {viewMode === 'cards' ? 'Tabela' : 'Cards'}
      </Button>
    </Tooltip>
  );
};

export default ViewToggleButtonWithTooltip;
