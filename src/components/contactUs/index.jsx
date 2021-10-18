import React from "react";
import Checkbox from "@mui/material/Checkbox";
import {useForm, Controller} from "react-hook-form";

import * as Styled from "./styles";

function CountactUs() {
  const [checked, setChecked] = React.useState([true, false]);
  const {handleSubmit, control} = useForm();

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const onSubmit = (data) => {
    document.cookie = data;
    console.log(data);
    alert(
      "Zapisano dane do cookies, dane z formularza kontaktowego zostały wyświetlone w konsoli"
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styled.GridRow>
        <Styled.GridColumn>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <Styled.StyledTextField
                label="your name"
                type="text"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
              />
            )}
            rules={{required: "Name required"}}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <Styled.StyledTextField
                label="your email"
                type="email"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
              />
            )}
            rules={{required: "Email required"}}
          />
          <Controller
            name="company"
            control={control}
            defaultValue=""
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <Styled.StyledTextField
                label="your company"
                type="text"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
              />
            )}
            rules={{required: "Company required"}}
          />
        </Styled.GridColumn>
        <Styled.GridColumn>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <Styled.StyledTextField
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
            rules={{required: "Message required"}}
          />
        </Styled.GridColumn>
      </Styled.GridRow>
      <Styled.GridRow>
        <Styled.CheckboxContainer>
          <Styled.StyledFormControlLabel
            label="Accept all"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                onChange={handleChange1}
              />
            }
          />
          <Styled.StyledFormControlLabel
            label="I agree to the processing my data"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <Styled.StyledFormControlLabel
            label="RODO processing my data by company"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </Styled.CheckboxContainer>
        <Styled.StyledButton color="primary" type="submit">
          Request a demo
        </Styled.StyledButton>
      </Styled.GridRow>
    </form>
  );
}
export default CountactUs;
