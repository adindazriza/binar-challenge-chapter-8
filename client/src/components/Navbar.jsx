import { Grid } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <Grid display={'flex'}>
        <ColorModeSwitcher justifyContent="flex-end" mr={'auto'} />
        {/* <Grid display={'flex'} flexDirection={'row'}>
          <Link style={{ marginLeft: '10px' }} to="/">
            Home
          </Link>
          {location.pathname !== '/login' && (
            <Link style={{ marginLeft: '10px' }} to="/login">
              Login
            </Link>
          )}
          {location.pathname !== '/register' && (
            <Link style={{ marginLeft: '10px' }} to="/register">
              register
            </Link>
          )}
        </Grid> */}
      </Grid>
    </>
  );
}