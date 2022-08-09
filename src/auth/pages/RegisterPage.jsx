import { Google } from '@mui/icons-material';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label='Name'
              type='text'
              placeholder='John Doe'
              fullWidth
            ></TextField>
          </Grid>
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
          <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                Create account
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ marginLeft: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent={'end'}>
            <Typography sx={{ marginRight: 1 }}>Already an account?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
