import React, {useState} from "react";
import {Element, scroller} from "react-scroll";
import Container from "@mui/material/Container";
import {useForm, Controller} from "react-hook-form";

import {DownArrow} from "../../../components/downArrow";
import {Marginer} from "../../../components/marginer";
import {Navbar} from "../../../components/navbar";
import SignInDialog from "../../../components/signInDialog";
import {CompaniesSection} from "../companiesSection/companiesSection";
import rank4 from "../../../assets/rank4.png";
import stacked3 from "../../../assets/stacked3.png";
import stats2 from "../../../assets/stats2.png";
import charts1 from "../../../assets/charts1.png";
import * as Styled from "./styles";

export function TopSection() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const {handleSubmit, control} = useForm();

  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", {smooth: true, duration: 1500});
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const onSubmit = (data) => {
    document.cookie = data;
    console.log(data);
    alert(
      "Zapisano dane do cookies, email z pola kontaktowego został wyświetlony w konsoli"
    );
  };

  return (
    <Element name="topSection">
      <Styled.TopContainer>
        <Container>
          <SignInDialog
            open={isDialogOpen}
            onClose={() => setDialogOpen(false)}
          />
          <Marginer direction="vertical" margin="3em" />
          <Navbar onOpen={() => handleDialogOpen()} />
          <Marginer direction="vertical" margin="8em" />
          <Styled.GridRow>
            <Styled.GridColumn>
              <Styled.MotivationalText>
                Best <Styled.ExtraBold>Solution</Styled.ExtraBold> <br />{" "}
                <Styled.ExtraBold>Provider</Styled.ExtraBold> For Your <br />{" "}
                <Styled.ExtraBold>Business.</Styled.ExtraBold>
              </Styled.MotivationalText>
              <Marginer direction="vertical" margin="2em" />
              <Styled.StyledParagraph>
                Vivamus ut arcu dignissim massa pulvinar scelerisque a in purus.
                Vivamus sit amet ex dui. In tortor massa, sollicitudin id ligula
                nec, vulputate viverra purus.
              </Styled.StyledParagraph>
              <Marginer direction="vertical" margin="3em" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Styled.GridRow>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({
                      field: {onChange, value},
                      fieldState: {error},
                    }) => (
                      <Styled.StyledTextField
                        label="Your email"
                        placeholder="Name@company.com"
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
                  <Styled.StyledButton type="submit">
                    Try for free
                  </Styled.StyledButton>
                </Styled.GridRow>
              </form>
              <Marginer direction="vertical" margin="2em" />
              <CompaniesSection />
            </Styled.GridColumn>
            <Styled.GridColumn>
              <Styled.Image1 src={charts1} alt="rank" />
              <Styled.Image2 src={stats2} alt="rank" />
              <Styled.Image3 src={stacked3} alt="rank" />
              <Styled.Image4 src={rank4} alt="rank" />
            </Styled.GridColumn>
          </Styled.GridRow>
          <Styled.DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </Styled.DownArrowContainer>
        </Container>
      </Styled.TopContainer>
    </Element>
  );
}
