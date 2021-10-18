import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import { Element } from "react-scroll";
import { theme } from "../../theme";
import { Button } from "../../components/button";
import { useForm, Controller } from 'react-hook-form';

const StyledTextField = styled(TextField)`
  background-color: white;
  width: 400px;
  margin: 20px !important;

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const GridColumn = styled(Element)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GridRow = styled(Element)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const CheckboxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  color: white;
`;

const StyledButton = styled(Button)`
  border-radius: 20px;
  background-color: ${theme.secondary};
  color: white;
  font-weight: bold;
  outline: none;
  border: 2px solid ${theme.secondary};
  transition: all 220ms ease-in-out;
  cursor: pointer;
  height: 70px;
  width: 400px;
  margin-right: 20px;

  &:hover {
    color: ${theme.secondary};
    background-color: #fff;
    border: 2px solid ${theme.secondary};
  }

  @media screen and (max-width: 900px) {
    width: 400px;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    margin: 0 auto;
  }
`;

function CountactUs() {
  const [checked, setChecked] = React.useState([true, false]);
  const { handleSubmit, control } = useForm();

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const onSubmit = data => {
    document.cookie = data;
    console.log(data);
    alert("Zapisano dane do cookies, dane z formularza kontaktowego zostały wyświetlone w konsoli")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridRow>
        <GridColumn>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <StyledTextField
                label="your name"
                type="text"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
              />
            )}
            rules={{ required: 'Name required' }}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <StyledTextField
                label="your email"
                type="email"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
              />
            )}
            rules={{ required: 'Email required' }}
            />
           <Controller
              name="company"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
              <StyledTextField
                label="your company"
                type="text"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
              />
            )}
              rules={{ required: 'Company required' }}
          />
        </GridColumn>
        <GridColumn>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <StyledTextField
              label="message"
              type="text"
              variant="outlined"
              multiline
              rows={10}
              maxRows={10}
              error={!!error}
              helperText={error ? error.message : null}
              value={value}
              onChange={onChange}
            />
            )}
            rules={{ required: 'Message required' }}
          />
        </GridColumn>
      </GridRow>
      <GridRow>
        <CheckboxContainer>
          <StyledFormControlLabel
            label="Accept all"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                onChange={handleChange1}
              />
            }
          />
          <StyledFormControlLabel
            label="I agree to the processing my data"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <StyledFormControlLabel
            label="RODO processing my data by company"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </CheckboxContainer>
        <StyledButton
          color="primary"
          type="submit"
        >
          Request a demo
        </StyledButton>
      </GridRow>
    </form>
  );
}
export default CountactUs;
