import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Grid, Typography } from '@mui/material';

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
        },
        marginLeft: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          arial-label='icon'
          edge='start'
          sx={{ marginRight: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems={'center'}
        >
          <Typography variant='h6' noWrap component={'div'}>
            JournalApp
          </Typography>
          <IconButton color='error'>
            <LogoutOutlined></LogoutOutlined>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
