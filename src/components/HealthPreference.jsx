import { Stack, Typography, Box, Button } from "@mui/material";
import React from "react";
import { health } from "../utils/constant";
import { useNavigate } from "react-router-dom";
const HealthPreference = () => {
  const navigate = useNavigate();
  return (
    <Stack textAlign="center" marginTop="10px">
      <Typography variant="h4" fontSize="bold">
        Choose your Health Preference
      </Typography>
      <Typography variant="body2">
        Choosing your health preference is an important step towards healthy
        life.
      </Typography>
      <Box marginTop="30px" textAlign="center">
        {health.map((item, idx) => {
          return (
            <Button
              className="btn"
              key={idx}
              onClick={() => {
                navigate(`/search/${item}`);
              }}
              sx={{
                color: "white",
                background: "#d50000",
                margin: "5px",
                borderRadius: "8px",
              }}
            >
              {item}
            </Button>
          );
        })}
      </Box>
    </Stack>
  );
};

export default HealthPreference;
