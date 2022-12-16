import React from "react";
import {Box, Stack} from "@mui/material";
import "./Header.Component.css";
import HeaderImg from "../assets/img/watch.png"; //image import for the header

//react component for Header
export default function Header(){
    return(
        
            <Stack direction={{xs:"comumn", sm:"column", md:"row"}} sx={{width: "80%", mx:"auto"}} className="header">
                <Stack direction="column" alignItems={{ sm:"center", md:"start"}} sx={{my:"auto"}} className="container">
                    <h6>Just Launched:</h6>
                    <h1>Luxurious 'Prestige' Series</h1>
                    <p>fulfilling the dream of our customers with a concern for absolute satisfaction.</p>
                </Stack>
                <Box
                    sx={{mx:"auto"}}
                    component="img"
                    alt="Luxurious 'Prestige' Series"
                    src={HeaderImg}
                />
            </Stack>
       
    );
}