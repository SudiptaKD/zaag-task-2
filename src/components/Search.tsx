import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

export default function Search({ handleCountry }) {
  const [country, setCountry] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCountry(country);
    setCountry("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={country}
            id="enterCountry"
            label="Enter Country"
            name="enterCountry"
            autoFocus
            onChange={(e) => setCountry(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!country}
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
