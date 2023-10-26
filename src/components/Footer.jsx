import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 1 }}
      >
        <Box
          sx={{
            my: 1,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 1,
            },
            "& svg:hover": {
              color: "white",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:100px)": {
            fontSize: "8px",
            },
          }}
        >
          All Rights Reserved &copy; Caring Hearts<br/>
          Caring Hearts, Bldg No. 16, S.V. Road, Andheri (W), Mumbai-400058. Toll free (India): +1-800-425-4550 Tel: +91-44-24807070
        </Typography>
      </Box>
    </>
  );
};

export default Footer;