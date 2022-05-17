import { Container, Grid } from "@mui/material";
import { Paper } from "@mui/material";
import React from "react";
import Identifica from "../../images/identifica-productomilagro.png";
import Alerta from "../../images/alerta.jpeg";
import Suplemento from "../../images/suplemento-productomilagro.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from '@mui/material';

import "./cards.css";

const Cards = () => {
  return (
    <Container>
      <Grid container spacing={5} justify="center" >
        <Grid item xs={4} >
          <Paper elevation={3} align="center">
            <img
              src={Identifica}
              alt="identifica un producto milagro"
              className="img"
            ></img>
            <Box padding={2}>
              <Typography variant="h6" component="h2">
                Identifica un producto milagro
              </Typography>
              <Typography variant="body" component="p" padding={2}>
              Conoce cómo puedes identificar un producto milagro de acuerdo a estas características en la etiqueta, es muy fácil...
              </Typography>
              <Button variant="contained" className="btn">Entrar</Button>
              </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
                    <Paper elevation={3} align="center">
            <img
              src={Alerta}
              alt="Alertas sanitarias"
              className="img"
            ></img>
            <Box padding={2}>
              <Typography variant="h6" component="h2">
              Alertas sanitarias
              </Typography>
              <Typography variant="body" component="p" padding={2}>
              Conoce los productos que tienen alertas sanitarias por COFEPRIS, los cuales no pueden ser comercializados ni consumidos...
              </Typography>
              <Button variant="contained" className="btn">Entrar</Button>
              </Box>
          </Paper>
        </Grid>

        <Grid item xs={4}>
                    <Paper elevation={3} align="center">
            <img
              src={Suplemento}
              alt="Suplemento alimenticio o producto milagro"
              className="img"
            ></img>
            <Box padding={2}>
              <Typography variant="h6" component="h2">
              ¿Suplemento alimenticio o producto milagro?
              </Typography>
              <Typography variant="body" component="p" padding={2}>
              Conoce cómo puedes diferenciar entre un suplemento alimenticio y un producto milagro...
              </Typography>
              <Button variant="contained" className="btn">Entrar</Button>
              </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;
