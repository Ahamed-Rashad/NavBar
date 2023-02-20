import React, { useState } from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography, Popover, List, ListItem, ListItemText,} from '@material-ui/core';
import { Notifications as NotificationsIcon, Flag as FlagIcon } from '@material-ui/icons';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElFlag, setAnchorElFlag] = useState(null);
    const [notificationBoxColor, setNotificationBoxColor] = useState('transparent');
    const [flagBoxColor, setFlagBoxColor] = useState('transparent');
    const open = Boolean(anchorEl);
    const openFlag = Boolean(anchorElFlag);
  
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setNotificationBoxColor('#212121');
      };
    
      const handlePopoverClose = () => {
        setAnchorEl(null);
        setNotificationBoxColor('transparent');
      };
    
      const handlePopoverOpenFlag = (event) => {
        setAnchorElFlag(event.currentTarget);
        setFlagBoxColor('#212121');
      };
    
      const handlePopoverCloseFlag = () => {
        setAnchorElFlag(null);
        setFlagBoxColor('transparent');
      };
  

  const notifications = [
    { id: 1, primary: 'Notification 1', secondary: 'Description of notification 1' },
    { id: 2, primary: 'Notification 2', secondary: 'Description of notification 2' },
    { id: 3, primary: 'Notification 3', secondary: 'Description of notification 3' },
    { id: 4, primary: 'Notification 4', secondary: 'Description of notification 4' },
    { id: 5, primary: 'Notification 5', secondary: 'Description of notification 5' },
  ];

  const flagItems = [
    { id: 1, primary: 'Flag 1', secondary: 'Description of flag 1' },
    { id: 2, primary: 'Flag 2', secondary: 'Description of flag 2' },
    { id: 3, primary: 'Flag 3', secondary: 'Description of flag 3' },
    { id: 4, primary: 'Flag 4', secondary: 'Description of flag 4' },
    { id: 5, primary: 'Flag 5', secondary: 'Description of flag 5' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
        <div style={{ flexGrow: 1 }} />
        <div style={{ backgroundColor: notificationBoxColor, border: `2px solid ${notificationBoxColor}`, borderRadius: '5px' }}>
          <IconButton
            aria-label="notifications"
            aria-owns={open ? 'notifications-menu' : undefined}
            aria-haspopup="true"
            onClick={handlePopoverOpen}
            color="inherit"
          >
            <Badge badgeContent={notifications.length} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
        <div style={{ backgroundColor: flagBoxColor, border: `1px solid ${flagBoxColor}`, borderRadius: '5px' }}>
          <IconButton
            aria-label="flag"
            aria-owns={openFlag ? 'flag-menu' : undefined}
            aria-haspopup="true"
            onClick={handlePopoverOpenFlag}
            color="inherit"
          >
            <Badge badgeContent={flagItems.length} color="secondary">
                <FlagIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
      <Popover
        id="notifications-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={{ marginTop: '9px' }}
      >
        <List style={{ maxHeight: 200, overflow: 'auto' }}>
          {notifications.map((notification) => (
            <ListItem key={notification.id}>
              <ListItemText primary={notification.primary} secondary={notification.secondary} />
            </ListItem>
          ))}
        </List>
      </Popover>
      <Popover
            id="flag-menu"
            open={openFlag}
            anchorEl={anchorElFlag}
            onClose={handlePopoverCloseFlag}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            style={{ marginTop: '9px' }}
            >
            <List style={{ maxHeight: 200, overflow: 'auto' }}>
                {flagItems.map((flag) => (
                <ListItem key={flag.id}>
                    <ListItemText primary={flag.primary} secondary={flag.secondary} />
                </ListItem>
                ))}
            </List>
        </Popover>
    </AppBar>
  );
};

export default Navbar;
