import { Container } from "@mui/material";
import React from "react";
import bgimg1 from "../images/bgimg1.jpeg";
import bgimg2 from "../images/bgimg2.jpg";
import "../styles/HomeStyles.css";
import Card1 from "../components/Card1";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import education from "../images/educate.jpg";
import food from "../images/food.jpg";
import human_rights from "../images/human_rights.jpg";
import developing from "../images/developing.jpeg";
import love from "../images/love.jpg";

function Home() {
  return (
    <>
      <div className="bgimg" style={{ backgroundImage: `url(${bgimg1})` }}>
        <Container>
          <h1 className="text-white text-6xl font-bold mb-2">EVERY SMILE IS</h1>
          <h2 className="text-white text-6xl font-bold mb-2">OUR STRENGTH</h2>
          <script async src="https://js.stripe.com/v3/buy-button.js"></script>
          <stripe-buy-button
            buy-button-id="buy_btn_1NtaV4SCUFMeBCba1SPb0FXC"
            publishable-key="pk_test_51NmXd7SCUFMeBCbaYi0H1JVHPSG6KmSTyRcdKLZwFL7HjLm2gBP8xjQhiCE5c1j8rVUx0wiDf9iR7yYZjcm1HLKk00TKyPaExP"
          ></stripe-buy-button>
        </Container>
      </div>

      <Container sx={{ my: 10 }}>
        <h1 className="text-4xl font-bold mb-2 flex justify-center">
          When you sponsor one child, eight other children benefit
        </h1>
        <h3 className="text-xl mb-2 flex justify-center">
          Create a greater and positive impact in the lives of children.
        </h3>
      </Container>

      <div
        className="bgimg"
        style={{ backgroundImage: `url(${bgimg2})` }}
      ></div>
      <br />
      <br />

      <div>
        <h1 className="text-4xl font-bold mb-2 flex justify-center">
          Our Promises To Children
        </h1>
        <br />
        <Container>
          <h3 className="text-xl mb-2 flex justify-center">
            Caring Hearts promises to improve the lives of the most vulnerable
            children and strengthen communities so that
          </h3>
          <h3 className="text-xl mb-2 flex justify-center">
            children can reach their full potential. We ensure that
          </h3>
        </Container>
        <br />

        <Container>
          <div className="grid grid-cols-2 gap-1 mx-20">
            <Card1 imgSrc={education}>
              <p className="text-xl font-bold mb-2 text-black box-content h-15 w-100 border-4 bg-slate-200 rounded-lg p-2">
                "Children are educated."
                <AutoStoriesIcon />
              </p>
            </Card1>

            <Card1 imgSrc={food}>
              <p className="text-xl font-bold mb-2 text-black box-content h-15 w-100 border-4 bg-slate-200 rounded-lg p-2">
                "Children are healthy and well-nourished."
                <LocalHospitalIcon />
              </p>
            </Card1>
          </div>
        </Container>

        <div className="grid grid-cols-1 gap-2 justify-items-center">
          <Card1 imgSrc={human_rights}>
            <p className="text-xl font-bold mb-2 text-black box-content h-15 w-100 border-4 bg-slate-200 rounded-lg p-2">
              "Children are made aware of their basic rights."
              <CheckCircleIcon />
            </p>
          </Card1>
        </div>

        <Container>
          <div className="grid grid-cols-2 gap-1 mx-20">
            <Card1 imgSrc={developing}>
              <p className="text-xl font-bold mb-2 text-black box-content h-15 w-100 border-4 bg-slate-200 rounded-lg p-2">
                "Children participate in their own development."
                <ShowChartIcon fontSize="large" />
              </p>
            </Card1>

            <Card1 imgSrc={love}>
              <p className="text-xl font-bold mb-2 text-black box-content h-15 w-100 border-4 bg-slate-200 rounded-lg p-2">
                "Children are valued, cared for and feel loved in the
                community."
                <FavoriteIcon />
              </p>
            </Card1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
