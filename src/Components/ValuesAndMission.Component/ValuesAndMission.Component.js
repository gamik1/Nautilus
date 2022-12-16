import { Box, Stack } from "@mui/material";
import React from "react";

//react component for ValueAndMission
export default function ValuesAndMission() {
  return (
    <Stack className="generic-text" sx={{mb:3}}>
      <h4 className="section-heading">Our Values and Mission:</h4>
      <Box className="container" component="div">
        <p>
          At nautilus, we thrive for perfection. We care for the smallest detail
          and keep our audience in mind when designing any watch. the brand
          constantly enhances the aesthetics and technologies of its emblematic
          timepieces. They are an invitation to push boundaries, to reach ever
          higher. Our brand's mission is to meet their expectations by designing
          timepieces as technically impressive as they are aesthetically
          stunning.
        </p>
      </Box>
    </Stack>
  );
}
