'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ApiIcon from '@mui/icons-material/Api';

const pages = [
  'Home',
  'About us',
  'Work',
  'Services',
  'Clients',
  'Team',
  'Contact us',
  // { name: 'Home', to: '/home' },
  // { name: 'About us', to: '/about' },
  // { name: 'Work', to: '/work' },
  // { name: 'Services', to: '/services' },
  // { name: 'Clients', to: '/clients' },
  // { name: 'Team', to: '/team' },
  // { name: 'Contact us', to: '/contact-us' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const preventDefault = (event) => event.preventDefault();
  return (
    <AppBar
      position='sticky'
      sx={{ padding: '0.3rem', zIndex: '20', backgroundColor: '#fff' }}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters sx={{ gap: '2rem', color: '#333' }}>
          {/* Large screen */}
          <ApiIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#333' }}
          />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#333',
              textDecoration: 'none',
            }}>
            Landing
          </Typography>

          {/* Mobile nav */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page, i) => (
                <MenuItem key={i + 1} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Small screen */}
          <ApiIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#333' }}
          />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#333',
              textDecoration: 'none',
            }}>
            Landing
          </Typography>

          {/* Desktop nav */}
          <Box
            style={{
              // width: '100%',
              // height: '100%',
              background:
                'linear-gradient(270deg, rgba(230, 143, 80, 0.10) 0%, rgba(10, 86, 241, 0.10) 100%)',
              boxShadow: '0px 4px 10px rgba(101, 101, 101, 0.25)',
            }}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '50px',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
            onClick={preventDefault}>
            {pages.map((page, i) => (
              <React.Fragment key={i + 1}>
                {i === 0 ? (
                  <Button
                    variant='contained'
                    sx={{
                      my: 2,
                      color: '#333',
                      display: 'block',
                      borderRadius: '50px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0px 4px 10px rgba(101, 101, 101, 0.35)',
                      borderRadius: 50,
                      ':hover': {
                        backgroundColor: '#FFFFFF',
                      },
                    }}>
                    {page}
                  </Button>
                ) : (
                  <Button
                    key={i + 1}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#333', display: 'block' }}>
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
