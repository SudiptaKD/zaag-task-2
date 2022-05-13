import { Avatar, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RootObject } from "./weatherInterface";

const Capital: React.FC<{ capital: string }> = ({ capital }) => {
  const [capitalData, setCapitalData] = useState<RootObject>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let api_key = "b3739bea3d420fbd68f142fa24440eb9";
  //   let params = {
  //     access_key: api_key,
  //     query: capital,
  //   };
  let url = `http://api.weatherstack.com/current?access_key=${api_key}&query={{${capital}}}`;

  async function fetchCountry() {
    axios.get<RootObject>(url).then((response) => {
      console.log(response.data);
      setCapitalData(response.data);

      setIsLoading(false);
      console.log(typeof capitalData);
      console.log("abc", capitalData);
    });
  }

  useEffect(() => {
    fetchCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 56, height: 56 }}
                variant="rounded"
                src={capitalData?.current.weather_icons[0]}
              />
            </Box>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Temparature : {capitalData?.current.temperature} Celcious
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wind Speed : {capitalData?.current.wind_speed} km/h
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Precip : {capitalData?.current.precip} mm
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
};
export default Capital;
