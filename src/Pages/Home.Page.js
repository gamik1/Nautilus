import { Box } from "@mui/material";
import React from "react";

import Header from "../Components/Header.Component/Header.Component";
import ValuesAndMission from "../Components/ValuesAndMission.Component/ValuesAndMission.Component";
import OurServices from "../Components/OurServices.Component/OurServices.Component";

import "./Home.Page.Styles.css";

//react component for Hmoe Page
export default function Home() {
  return (
    <Box sx={{mb:3}} component="div">
      <Header />
      <ValuesAndMission />
      <Box component="div" className="bg-img"></Box>{
        //div image break
      }
      <OurServices />
      <Box component="div" className="resp-img">
        <Box
          component="img"
          sizes="(max-width: 1440px) 100vw, 1440px"
          srcSet="
            img/img1_nqzdkx_0.png 645w,
            img/img1_nqzdkx_1.png 951w,
            img/img1_nqzdkx_2.png 1440w"
          src="img/img1_nqzdkx_2.png"
          alt=""
        />
      </Box>{
        //div image break
      }
    </Box>
  );
}
