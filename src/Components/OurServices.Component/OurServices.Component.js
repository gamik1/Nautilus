import React from "react";
import { Box, Stack } from "@mui/material";
import { Services } from "../assets/servicesList";

import "./OurServices.Component.css";

//react component for OurServices
export default function OurServices() {
  const SingleBox = ({ title, body }) => {
    return (
      <Box component="div" className="box">
        <h5>{title}</h5>
        <p>{body}</p>
      </Box>
    );
  };
  return (
    <Stack sx={{mb:2}} className="boxes">
      <h4 className="section-heading">Our Services:</h4>
      <Stack direction={{sm:"comumn", md:"row"}} className="container">
        {Services.map((service) => (
          <SingleBox
            key={service.id}
            title={service.title}
            body={service.body}
          />
        ))}
      </Stack>
    </Stack>
  );
}
