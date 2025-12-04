import * as React from 'react';

import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Divider, IconButton, Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ChevronLeftIcon, ChevronRightIcon, LogOut,  MenuIcon } from 'lucide-react';
import Buttons from './Buttons';
import '../assets/global.css';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `10px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Navbar({children}) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
      <Box sx={{ display: 'flex' }}>
        <Drawer  variant="permanent" open={open} PaperProps={{
            sx: {
                backgroundColor: '#332e86',
                color: 'white',
            },
        }}>
          
            <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>

                <Box>
                  <DrawerHeader>
                    {open ?(<>
                              <Typography variant='h6' noWrap component='div'>
                                  Leave Scheduler
                              </Typography>
                              <IconButton onClick={handleDrawerClose} color='inherit'>
                                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                              </IconButton>
                        </>): <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} edge='start' sx={[
                        {
                          marginRight: 1,
                        },
                        open && { display: 'none'}
                    ]}>
                      <MenuIcon />
                    </IconButton>}
                  </DrawerHeader>
                  <Divider />
                  <Buttons open={open}/>
                </Box>
                <Box>
                    <Divider />
                    <div className='drawerFooter'>
                        <div className='userAvatar'>
                            <Avatar className='avatarIcon'/>
                            <div className='userDetails'>
                                <Typography variant='h6'>Sipho Mciwa<br/><span className='role'>Employee</span></Typography>
                            </div>
                        </div>
                        <div className='logout'>
                            <IconButton color='inherit' sx={[{marginRight: 1,}]}><LogOut /></IconButton>
                            <p>Logout</p>
                        </div>
                    </div>
                    
                </Box>
            </Box>
        </Drawer>
        <Main open={open}>
          {children}
        </Main>
      </Box> 
  );
}