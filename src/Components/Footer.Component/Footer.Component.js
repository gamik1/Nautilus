import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./Footer.Component.css";

//React Component for Footer
export default function Footer(){
    return(
        <Stack component="footer">
        <Box className="container" component="div">
            <Stack alignItems="center" justifyContent="space-between" direction={{sm:"column",md:"row"}} >
            <Typography className="logofooter" sx={{p:{sm:1,md:3,lg:5}}}>Nautilus</Typography>
            <Box justifySelf="flex-end" sx={{textAlign:{sm:"center", md:"right"}}} component="div">
                <p>For more info, send us email at: <a href="mailto:requestinfo@nautilus.com">requestinfo@nautilus.com</a></p>
                <p>OR Call us at: <a href="tel:+14564564565">+14564564565</a></p>
            </Box>
            </Stack>
            <p>All rights reserved &copy; Nautilus Group</p>
        </Box>
        </Stack>
    );
}