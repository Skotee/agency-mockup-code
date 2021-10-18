import * as React from 'react';
import { Button } from "../../components/button";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, Controller } from 'react-hook-form';
import styled from "styled-components";
import { Element } from "react-scroll";
import { theme } from "../../theme";

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

  const GridRow = styled(Element)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  `;

const StyledButton = styled(Button)`
  padding: ${({ small }) => (small ? "5px 8px" : "13px 36px;")};
  border-radius: 40px;
  background-color: ${theme.primary};
  color: white;
  font-weight: bold;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  outline: none;
  border: 2px solid white;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${theme.secondary};
    background-color: #fff;
    border: 2px solid ${theme.secondary};
  }
`;


const StyledTextField = styled(TextField)`
  background-color: white;
`;

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
            <GridRow>
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
                  <StyledTextField
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
            </GridRow>
          <br/>
          <DialogActions>
            <StyledButton variant="contained" onClick={handleClose}>
              Cancel
            </StyledButton>
            <StyledButton type="submit" variant="contained" color="primary">
              Sign in
            </StyledButton>
          </DialogActions>
      </form>
      </DialogContent>
    </Dialog>
  );
}
