import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export default function Day4PAH() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Function to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
    setUsername('');
    setPassword('');
    setError(false);
  };

  // Function to handle login
  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setError(false);
      handleClose();
    } else {
      setError(true);  // Show error if login is unsuccessful
    }
  };

  return (
    <div>
      {/* Login button */}
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Login
      </Button>

      {/* Dialog box for login */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {/* Username TextField */}
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={error && username === ''}
            helperText={error && username === '' ? 'Username is required' : ''}
          />

          {/* Password TextField */}
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error && password === ''}
            helperText={error && password === '' ? 'Password is required' : ''}
          />
        </DialogContent>

        {/* Dialog actions */}
        <DialogActions>
          {/* Cancel button */}
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>

          {/* Login button */}
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
