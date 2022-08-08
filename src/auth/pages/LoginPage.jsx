import { Grid, Typography, TextField } from '@mui/material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      aligItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant='h5' sx={{ mb: 1 }}>
          Login
        </Typography>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <TextField
                label='Email'
                type='email'
                placeholder='john@doe.com'
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <TextField
                label='Password'
                type='password'
                placeholder='password'
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
