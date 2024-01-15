import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Autocomplete } from '@mui/material';
import { useState,useEffect } from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function Listfacture() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
           CLIENT
          </Button>
          <Menu {...bindMenu(popupState)}>
          <a href="/AJOUTER"> <MenuItem onClick={popupState.close}>AJOUTER CLIENT</MenuItem></a> 
          <a href="/APP"> <MenuItem onClick={popupState.close}>LISTES</MenuItem></a>
          
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}