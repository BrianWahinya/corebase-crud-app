import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function LocalStepper({ dataObj }) {
  const [activeStep, setActiveStep] = useState(0);

  const matches400 = useMediaQuery("(max-width:400px)");
  const matches600 = useMediaQuery("(max-width:600px)");
  const steps = dataObj;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const stepWr = (stepInfo) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: matches400 ? "100%" : matches600 ? "70vw" : "40vw",
          minHeight: matches400 ? "40vh" : "60vh",
          margin: "auto",
          mt: 2,
        }}
      >
        {stepInfo}
      </Box>
    );
  };

  const stepGen = () => {
    console.log(activeStep);
    return (
      <>
        <Stepper
          activeStep={activeStep}
          orientation={matches400 ? "vertical" : "horizontal"}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              {matches400 && (
                <StepContent>
                  {stepWr(step.description)}
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              )}
            </Step>
          ))}
        </Stepper>
        {!matches400 && activeStep < steps.length && (
          <div>
            {stepWr(steps[activeStep].description)}
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          </div>
        )}
      </>
    );
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Customer Registration
      </Typography>
      {stepGen()}
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, textAlign: "center" }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
