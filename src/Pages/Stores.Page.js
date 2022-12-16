import { Box, Grid, Stack } from "@mui/material";
import React from "react";

import "./Stores.Page.Styles.css";

//react component for stores Page
export default function Stores() {
  return (
    <Box sx={{mb:2}} component="div" className="collection stores">
      <Box component="div" className="container">
        <h4>Visit Our Stores Today!</h4>
        <p className="store-p">
          We are thrilled to welcome you at our stores. We are expanding our
          business, and for now our stores are located at 3 places in Ontario.
          We will soon be opening our stores in Alberta and Quebec in 2023.
        </p>
        <p className="store-p">
          To get more info, email us:{" "}
          <a href="mailto:info@nautilus.com">info@nautilus.com</a>
        </p>
        <Grid sx={{textAlign:"center",p:"10px", mt:2}} container spacing={2}>
          <Grid item xs={12} sm={4} md={4} >
          <Stack className="grid-item" justifyContent="center" alignItems="center">
            <h5>Kitchener</h5>
            <p>
              100 King Street,
              <br />
              Kitchener, Ontario, <br />
              Canada, N2A 1A1
            </p>
            <a
              href="http://www.google.com/maps/"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
          <Stack className="grid-item" justifyContent="center" alignItems="center">
            <h5>Toronto</h5>
            <p>
              Wolf Boulevard,
              <br />
              Toronto, Ontario, <br />
              Canada, N2A 5J2
            </p>
            <a
              href="href='http://www.google.com/maps/"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Stack className="grid-item" justifyContent="center" alignItems="center">
            <h5>Waterloo</h5>
            <p>
              21 Queen Street,
              <br />
              Waterloo, Ontario, <br />
              Canada, N2A 2B2
            </p>
            <a
              href="http://www.google.com/maps/"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
