import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RootObject } from "./interface";

const Country: React.FC<{ country: string }> = ({ country }) => {
  const [countryData, setCountryData] = useState<RootObject>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let url = `https://restcountries.com/v3.1/name/{{${country}}}`;

  async function fetchCountry() {
    axios.get<RootObject>(url).then((response) => {
      console.log(response.data);
      setCountryData(response.data);

      setIsLoading(false);
      console.log(typeof countryData);
      console.log("abc", countryData?.[0]);
    });
  }

  useEffect(() => {
    fetchCountry();
  }, [isLoading]);

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
        {!isLoading && (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={countryData?.[0].flags.svg}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Capital : {countryData?.[0].capital}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Population : {countryData?.[0].population}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Latitude : {countryData?.[0].latlng[0]} Longitude :{" "}
                {countryData?.[0].latlng[1]}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/capital-weather" style={{ textDecoration: "none" }}>
                <Button size="small">Capital Weather</Button>
              </Link>
            </CardActions>
          </Card>
        )}
      </Box>
    </Container>
  );
};
export default Country;
