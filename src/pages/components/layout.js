import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const history = useNavigate();
  const onLogout = () => {
    sessionStorage.clear();
    history('/');
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component={RouterLink} to="/home" color="inherit" underline="hover" className="mr-10">Home</Link>
            <Link component={RouterLink} to="/branch" color="inherit" underline="hover">Branch</Link>
          </Typography>
          <Button onClick={onLogout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className="mt-20">
        {children}
      </Container>
    </>
  );
}
