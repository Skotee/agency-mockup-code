import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, Controller } from 'react-hook-form';

import * as Styled from "./styles";

export default function SignInDialog({
  onClose: handleClose,
  open
}) {
  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
    document.cookie = data;
    console.log(data); //wypisać hasło i nazwe usera oraz zapisać do ciasteczek
    alert("Zapisano dane do cookies, dane logowania zostały wyświetlone w konsoli")
  }

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
    >
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To sign in, please enter your email address here and your password.
        </DialogContentText>
        <br/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Styled.GridRow>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Email"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="email"
                  />
                )}
                rules={{ required: 'Email required' }}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <Styled.StyledTextField
                    label="Password"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="password"
                  />
                )}
                rules={{ required: 'Password required' }}
              />
            </Styled.GridRow>
          <br/>
          <DialogActions>
            <Styled.StyledButton variant="contained" onClick={handleClose}>
              Cancel
            </Styled.StyledButton>
            <Styled.StyledButton type="submit" variant="contained" color="primary">
              Sign in
            </Styled.StyledButton>
          </DialogActions>
      </form>
      </DialogContent>
    </Dialog>
  );
}
