import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  ListItemIcon,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { Link } from 'react-router-dom';
import themeColorPink from '../../styles/theme';

const pid = '5500-Grand-Lake-Dr,-San-Antonio,-TX-78244';
const themeColor = themeColorPink;
const pages = [
  { name: 'Home', icon: <HomeOutlinedIcon />, path: '/home' },
  { name: 'Property', icon: <FeedOutlinedIcon />, path: `/properties/${pid}` },
  { name: 'Compare', icon: <CompareArrowsOutlinedIcon />, path: '/compare' },
];
const settings = [
  { name: 'Profile', path: '/mypage' },
  { name: 'Likes', path: '/likes' },
  { name: 'Logout', path: '/logout' },
];

function ResponsiveAppBar({ setSearchToggle }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleSearchBarVisibility = e => {
    const pathSuffix = e.currentTarget.href?.split('/').pop();
    if (pathSuffix === 'home') {
      setSearchToggle(true);
    } else {
      setSearchToggle(false);
    }
  };

  const handleCloseNavMenu = e => {
    setAnchorElNav(null);
    handleSearchBarVisibility(e);
  };

  const handleCloseUserMenu = e => {
    setAnchorElUser(null);
    handleSearchBarVisibility(e);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'flex-start' }}>
          <HomeIcon sx={{ color: themeColor, fontSize: 'large', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: themeColor,
              textDecoration: 'none',
              fontSize: 15,
            }}
          >
            VanCityPropertyPulse
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#bdbdbd"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              }}
            >
              {pages.map(page => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <HomeIcon sx={{ fontSize: 'large', display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h3"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VanCityPropertyPulse
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map(page => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ fontSize: '2rem', my: 2, color: themeColor, display: 'block' }}
                component={Link}
                to={page.path}
              >
                {page.icon}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Link to={setting.path}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;