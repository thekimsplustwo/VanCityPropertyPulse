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
  styled as muiStyled,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { themeColorPink } from '../../styles/theme';

const StyledMenu = muiStyled(Menu)`
  z-index: 100
`;

const pid = '5500-Grand-Lake-Dr,-San-Antonio,-TX-78244';
const themeColor = themeColorPink;
const navIconStyle = { fontSize: '2rem', color: themeColor };
const pages = [
  { name: 'Home', icon: <HomeOutlinedIcon sx={navIconStyle} />, path: '/home' },
  // { <Delete Compare btn>
  //   name: 'Compare',
  //   icon: <CompareArrowsOutlinedIcon sx={navIconStyle} />,
  //   path: '/compare',
  // },
  {
    name: 'Likes',
    icon: <FavoriteBorderIcon sx={navIconStyle} />,
    path: '/likes',
  },
];
const settings = [
  { name: 'Profile', path: '/mypage' },
  { name: 'Logout', path: '/logout' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ justifyContent: 'flex-start' }}>
          <HomeIcon
            sx={{
              color: themeColor,
              fontSize: '1.5rem',
              display: { xs: 'none', md: 'flex' },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 630,
              letterSpacing: '.3rem',
              color: themeColor,
              textDecoration: 'none',
              fontSize: '1.5rem',
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
            <StyledMenu
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
                  <Link to={page.path}>
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </StyledMenu>
          </Box>
          <HomeIcon
            sx={{
              color: themeColor,
              fontSize: '2rem',
              display: { xs: 'flex', md: 'none' },
              mr: 1,
            }}
          />
          <Typography
            variant="h3"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: themeColor,
              textDecoration: 'none',
              fontSize: '2rem',
            }}
          >
            VanCity
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {pages.map(page => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
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
            <StyledMenu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
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
            </StyledMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
