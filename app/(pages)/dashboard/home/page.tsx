"use client";

import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import UploadFileTab from "./UploadFileTab";
import { useForm } from "react-hook-form";
import Specialties from "./components/specialties";
import UploadFile from "./components/uploadFile";
import PatientForm from "./components/patientForm";
import Success from "./components/success";
import { HOME_TABS } from "@/constants/tabs";
import { NoSsr } from "@mui/material";

const Wrapper = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  color: transparent;
  background: linear-gradient(
    83deg,
    rgb(0, 0, 0) 0%,
    rgb(17, 0, 158, 0.45) 25%
  );
  -webkit-background-clip: text;
  line-height: 50px;
  font-size: 45px;
  font-weight: 500;
`;

const ButtonBack = styled(Button)`
  background-color: #fff;
  border: 1px solid #dddddd;
  color: grey;
  height: 53px;
  letter-spacing: 2.5px;
  font-family: "Prompt";
  font-weight: 400;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  width: 100%;
`;

const Actions = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 60px);
  margin-top: 100px;
  display: flex;
  & button:first-child {
    margin-right: 10px;
  }
`;

const Index = () => {
  const [tab, setTab] = useState<number>(HOME_TABS.SPECIALITY);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Title>
            Let's start <br /> Dr. Sara!
          </Title>
          <Description>
            Unlock the power of Artificial Intelligence and save your valuable
            time
          </Description>
        </Grid>
        <Grid item xs={6}>
          <UploadFileTab>
            {tab === HOME_TABS.SPECIALITY && <Specialties setTab={setTab} />}
            {tab === HOME_TABS.UPLOAD && <UploadFile />}
            {tab === HOME_TABS.INFO && (
              <PatientForm
                register={register}
                control={control}
                errors={errors}
              />
            )}
            {tab === HOME_TABS.SUCCESS && <Success />}
            {tab !== HOME_TABS.SUCCESS && (
              <NoSsr>
                <Actions>
                  <ButtonBack
                    fullWidth={true}
                    onClick={() => setTab(tab - 1)}
                    disabled={tab === HOME_TABS.SPECIALITY ?? true}
                  >
                    back
                  </ButtonBack>
                  <Button
                    fullWidth={true}
                    onClick={() => setTab(tab + 1)}
                    variant="contained"
                  >
                    {tab === HOME_TABS.INFO ? "interpret" : "continue"}
                  </Button>
                </Actions>
              </NoSsr>
            )}
          </UploadFileTab>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Index;
