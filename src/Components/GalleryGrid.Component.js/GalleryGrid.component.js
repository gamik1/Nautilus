import { Grid, Stack, Box } from "@mui/material";
import React from "react";
import { GalleryImages } from "../assets/GalleryImages";
import "./GalleryGrid.Component.css";

//react component for Single Gallery Image
const GridItem = ({ name, src }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Stack className="grid-item" justifyContent="center" alignItems="center">
        <Box component="img" src={src} alt={name} />
        <h5>{name}</h5>
      </Stack>
    </Grid>
  );
};

//react component to house the gallery items
//Gallery Grid
export default function GalleryGrid() {
  return (
    <Grid sx={{textAlign:"center",p:"10px", mt:2}} container spacing={2}>
      {GalleryImages.map((galleryImage) => (
        <GridItem {...galleryImage} />
      ))}
    </Grid>
  );
}
