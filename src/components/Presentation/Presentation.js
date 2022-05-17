import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Suplementos from "../../images/Suplementos.jpeg";
import Suplementos2 from "../../images/Suplementos-aliment.jpeg";
import "./presentacion.css";

const Presentation = () => {
  return (
    <Container className="container">
      <Grid container spacing={3} alignItems="center">
        <Grid item lg={8} md={4} sm={6} xs={12}>
          <Typography variant="h3">Hola,</Typography>
          <Typography variant="body1" component="div" fontSize={18}>
            ¡Gracias por visitarnos!. Queremos que despues de conocernos amplíes
            tus conocimientos sobre suplementos alimenticios, conozcas las
            alertas sanitarias, elijas y consumas responsablemente y puedas
            elaborar tus propios productos.
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12} align="center">
          <img src={Suplementos} className="box-image" />
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="center">
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <img src={Suplementos2} className="box-image" />
        </Grid>
        <Grid item lg={8} md={4} sm={6} xs={12}>
          <Typography variant="h4" >¿Qué es un suplemento alimenticio? </Typography>
          <Typography fontSize={18}>Son productos que aportan
          nutrimentos como proteinas, grasas, carbohidratos o hidratos de
          carbono, vitaminas y minerales. NO SON PRODUCTOS DIRIGIDOS PARA
          TRATAR, CURAR, PREVENIR O ALIVIAR SÍNTOMAS DE ALGUNA ENFERMEDAD,
          REDUCCIÓN DE PESO, TALLA, USO AFRODISIACO, ETC.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Presentation;
