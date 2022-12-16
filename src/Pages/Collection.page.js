import { Stack } from "@mui/material";
import React from "react";
import "./Collection.page.Styles.css";

import GalleryGrid from "../Components/GalleryGrid.Component.js/GalleryGrid.component";

//react component for Collection page
export default function Collection(){
    return(
        <Stack sx={{mb:3}}component="div" className="collection">
            <Stack component="div" className="container">
                <h4>Explore our Collection!</h4>
                <GalleryGrid />
            </Stack>
        </Stack>
    );
};