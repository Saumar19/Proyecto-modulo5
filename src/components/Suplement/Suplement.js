import React from "react";
import { Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import Etiqueta1 from "../../images/etiqueta_2.png";
import Etiqueta2 from "../../images/puede_contener_2.png";
import Etiqueta3 from "../../images/no_puede_contener_2.png";
import Ingredients from "./Ingredients";

import "./suplement.css"

const Suplement = () => {
  return (
    <Container className="container" justifyContent = "center">
      <Typography variant="h5" component="h4" align = "center">
      Debes revisar los productos que adquieres con esta denominación... No te confundas
</Typography>
      <Grid container align = "center" justifyContent = "center">
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <img src={Etiqueta1} className="box-image" /> 
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <img src={Etiqueta2} className="box-image" /> 
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <img src={Etiqueta3} className="box-image" /> 
        </Grid>
      </Grid>
      <Grid container align = "center" justifyContent = "center">
      <Ingredients 
      />
      </Grid>

    </Container>

  );
};

export default Suplement;
