import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import "../navburger/index.css";
import { Divider } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon/>
      </Button>
      <Menu
        className="basic-menus"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><a href="#Skills"><h4>Skills</h4></a></MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose}><a href="#Experiences"><h4>Experiences</h4></a></MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose}><a href="#Projects"><h4>Projects</h4></a></MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose}><a href="#Contact"><h4>Contact</h4></a></MenuItem>
      </Menu>
    </div>
  );
}
