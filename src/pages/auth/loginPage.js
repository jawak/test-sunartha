import {
  Button, Grid, Paper, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import authService from '../../services/authService';

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [btnDisable, setBtnDisable] = useState(true);
  const [error, setError] = useState('');
  const [onLoading, setOnLoading] = useState(false);

  const onChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onLogin = async () => {
    setOnLoading(true);
    setError('');
    const resp = await authService.loginService(form);
    if (resp === 200) {
      console.log('berhasil login');
    } else {
      setError(resp);
    }
    setOnLoading(false);
  };

  useEffect(() => {
    setBtnDisable(true);
    setError('');
    if (form.username !== '' && form.password !== '') {
      setBtnDisable(false);
    }
  }, [form]);

  return (
    <Grid>
      <Paper
        elevation={5}
        style={{
          padding: 20, height: '30vh', width: 280, margin: '20px auto',
        }}
      >
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <TextField onChange={onChange} label="Username" name="username" placeholder="Enter username" variant="standard" fullWidth required />
        <TextField onChange={onChange} label="Password" name="password" placeholder="Enter password" variant="standard" type="password" fullWidth required />
        {onLoading ? (
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
            fullWidth
            style={{ margin: '20px 0' }}
          >
            Sign in
          </LoadingButton>
        ) : (
          <Button type="submit" color="primary" disabled={btnDisable} onClick={onLogin} variant="contained" style={{ margin: '20px 0' }} fullWidth>Sign in</Button>
        )}
        {error !== '' && (
        <Grid align="center">
          <span className="txt-red">{error}</span>
        </Grid>
        )}
      </Paper>
    </Grid>
  );
}
