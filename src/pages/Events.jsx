import React from 'react'
import { Container } from "@mui/material";
import Card3 from '../components/Card3';
import logo1 from "../images/logo1.png"
import img1 from "../images/water.jpeg"
import img2 from "../images/childhelp.jpg"
import img3 from "../images/happy.jpg"
import img4 from "../images/covid.jpg"
import img5 from "../images/life_skills.jpg"
import img6 from "../images/disable.jpg"




function Events() {

  return (
   <>

    <Container sx={{my:15}}>
    <h1 className="text-4xl font-bold mb-2 flex justify-center">
    Child Sponsorship</h1>
    <h1 className="text-2xl mb-2 flex justify-center">
    is a recurring giving and it's a long-term association with the child.</h1>
    <h1 className="mb-2 flex justify-center">
    <img src={logo1} className="App-logo h-20 w-22" alt="logo" /></h1>
    </Container>


    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    <stripe-pricing-table pricing-table-id="prctbl_1NtwuPSCUFMeBCbaQYGrEDxI"
    publishable-key="pk_test_51NmXd7SCUFMeBCbaYi0H1JVHPSG6KmSTyRcdKLZwFL7HjLm2gBP8xjQhiCE5c1j8rVUx0wiDf9iR7yYZjcm1HLKk00TKyPaExP">
    </stripe-pricing-table>
    

    <Container className='py-10'>
      <div className="grid grid-cols-3 content-evenly">

      <Card3 imgSrc={img1}>
        <div className='italic text-black box-content h-15 w-100 bg-gradient-to-r from-slate-300 p-2'>
        <h2 className="text-2xl font-bold mb-2 ">1,08,420</h2>
        <p className='font-bold'>"children have access to basic handwashing system at an education facility."</p>
        </div>
      </Card3>

      <Card3 imgSrc={img2}>
      <div className='italic text-black box-content h-15 w-100 bg-gradient-to-r from-slate-300 p-2'>
        <h1 className="text-2xl font-bold mb-2">83,332</h1>
        <p className='font-bold'>"children (0-59 months) reached by a trained community health worker."</p>
        </div>
      </Card3>

      <Card3 imgSrc={img3}>
      <div className='italic text-black box-content h-15 w-100 bg-gradient-to-r from-slate-300 p-2'>
        <h1 className="text-2xl font-bold mb-2">41,221</h1>
        <p className='font-bold'>"children and youth participated in actions that support ending violence against children."</p>
        </div>
      </Card3>

      <Card3 imgSrc={img4}>
      <div className='italic text-black box-content h-15 w-100 bg-gradient-to-r from-slate-300 p-2'>
        <h1 className="text-2xl font-bold mb-2">6.6 million</h1>
        <p className='font-bold'>"people reached through COVID-19 Emergency Response."</p>
        </div>
      </Card3>

      <Card3 imgSrc={img5}>
      <div className='italic text-black box-content h-15 w-100 bg-gradient-to-r from-slate-300 p-2'>
        <h1 className="text-2xl font-bold mb-2">75,387</h1>
        <p className='font-bold'>"children aged 6-18 completed the Life Skills Education for Transformation (LSET) modules."</p>
        </div>
      </Card3>

      <Card3 imgSrc={img6}>
      <div className='italic text-black box-content h-15 w-100 bg-gradient-to-r from-slate-300 p-2'>
        <h1 className="text-2xl font-bold mb-2">6,351</h1>
        <p className='font-bold'>"children with disabilities are part of Caring Hearts Charity programmes."</p>
        </div>
      </Card3>

      </div>
      </Container>
  </>
  )
}

export default Events
