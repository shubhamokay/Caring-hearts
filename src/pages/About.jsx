import React from "react";
import Card2 from "../components/Card2";
import img1 from "../images/volunteer1.jpg";
import img2 from "../images/volunteer2.jpg";
import img3 from "../images/volunteer3.jpg";
import img4 from "../images/volunteer4.jpg";
import img5 from "../images/volunteer5.jpg";
import img6 from "../images/volunteer6.jpg";
import img7 from "../images/volunteer7.jpg";
import img8 from "../images/volunteer8.jpg";
import img9 from "../images/volunteer9.jpg";
import { Container } from "@mui/material";

function About() {
  return (
    <>
      <Container sx={{ my: 15 }}>
        <h1 className="text-2xl font-bold font-[-Poppins] flex justify-center">
          Volunteers are dedicated individuals who selflessly contribute their
          time, skills, and passion to support various causes and organizations.
          They exemplify commitment, generosity, and a strong sense of
          community, making a significant positive impact on the lives of
          others."
        </h1><br/>
        <h3 className="text-2xl font-bold font-[-Poppins] flex justify-center">
          Here are some of our Top Volunteers</h3>

        <div className="h-94 grid grid-cols-3 gap-2 content-evenly">

          <Card2 imgSrc={img1}>
            <h2 className="text-xl font-[Poppins] font-bold mb-2 content-end">
              Sohel Salmani
            </h2>
            <p>
              "Volunteers do not necessarily have the time; they just have the
              heart."
            </p>
          </Card2>

          <Card2 imgSrc={img2}>
            <h1 className="text-xl font-[Poppins] font-bold mb-2">
              Sandesh Madoori
            </h1>
            <p>"In giving, we receive the greatest gift of all."</p>
          </Card2>

          <Card2 imgSrc={img3}>
            <h1 className="text-xl font-[Poppins] font-bold mb-2">
              Tanmay Londhe
            </h1>
            <p>
              "What is the essence of life? To serve others and to do good."
            </p>
          </Card2>

          <Card2 imgSrc={img4}>
            <h1 className="text-xl font-[Poppins] font-bold mb-2">
              Deepika Shinde</h1>
            <p>
              "Volunteers do not necessarily have the time; they just have the
              heart."
            </p>
          </Card2>

          <Card2 imgSrc={img5}>
            <h1 className="text-xl font-[Poppins] font-bold mb-2">
              Akhil Mistry
            </h1>
            <p>"In giving, we receive the greatest gift of all."</p>
          </Card2>

          <Card2 imgSrc={img6}>
            <h1 className="text-xl font-[Poppins] font-bold mb-2">
              Samiksha Jain
            </h1>
            <p>
              "Volunteers do not necessarily have the time; they just have the
              heart."
            </p>
          </Card2>

          <Card2 imgSrc={img7}>
            <h1 className="text-xl font-[Poppins] font-bold mb-2">
            Ronit Poojary
            </h1>
            <p>
              "Volunteers do not necessarily have the time; they just have the
              heart."
            </p>
          </Card2>

          <Card2 imgSrc={img8}>
            <h1 className="text-xl font-[Poppins] font-bold mb-2">
              Rakhi Sawant
            </h1>
            <p>
              "Volunteers do not necessarily have the time; they just have the
              heart."
            </p>
          </Card2>

          <Card2 imgSrc={img9}>
            <h1 className="text-xl font-[Poppins] font-bold mb-2">
            Jenny Lawrence
            </h1>
            <p>
              "You make a living by what you get. You make a life by what you
              give."
            </p>
          </Card2>
          
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 row-span-2 box-content border-4 bg-slate-300 rounded-lg p-2">
            <h1 className="text-3xl text-bold"> About Caring Hearts :</h1>
            <br />
            Caring Hearts Charity is a child-focused humanitarian organisation
            that has been serving the most vulnerable children and their
            families, for over 70 years. The non-profit organisation
            passionately serves in 111 districts, impacting around 3 lakh
            children and their families in over 1113 communities, spread across
            22 states and 1 union territory. With over seven decades of
            experience at the grassroots, we employ proven, effective
            development, public engagement and relief practices empowering
            vulnerable children and communities living in contexts of poverty
            and injustice to become self-sufficient and bring lasting change.
            With you, we can build a nation fit for children. Join us. Together
            for children. For change. For life.
          </div>
          <div
            className="col-span-2 row-span-2 box-content border-4 bg-slate-300
           rounded-lg p-4 flex justify-center"
          >
            <h1 className="text-3xl text-bold">Our Areas of Work include: </h1>
            <ol style={{ listStyleType: "decimal" }}>
              <li>Child Health and Nutrition</li>
              <li>Education</li>
              <li>Livelihood and Resilience</li>
              <li>Gender and Women Empowerment</li>
              <li>Water, Sanitation and Hygiene</li>
              <li>Disability</li>
              <li>Disaster Management</li>
            </ol>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
