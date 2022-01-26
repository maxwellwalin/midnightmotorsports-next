import Aos from 'aos'
import { useEffect } from 'react'
import styled from 'styled-components'
import "aos/dist/aos.css"
const About = () => {

useEffect(() => {
  Aos.init({ duration:2000 })
})

  return (
    <Container >
      <div className="box1" data-aos="fade-up">
        <div className='aboutInfo' >
          <p className="aboutPar"><h1>About Us</h1>Midnight Motorsports is a state-of-the-art car servicing and car parts hub. It was founded here in Lake Forest, California in 2018. Since then, we have serviced and assisted over 1,000 customers with their car needs. Here are some of our testimonials:</p>
          <div className='testBox'>
            <div className='testimonials'>Chris is an outstanding customer-service oriented owner!<div>- John</div></div>
            <div className='testimonials'>What a great place to find car parts! Diamond in the rough. <div>- Mike</div></div>
            <div className='testimonials'>We were very satisfied with the products we purchased for our new M4!<div>- Steve</div></div>
          </div>
        </div>
        <img src='/images/midnightlogo-transparent.png' alt="midnight motorsports transparent background and white logo" className="brandImg" data-aos="fade-up" />
      </div>
      <div className="box2" data-aos="fade-right">
        <img className='lamboimg' src='https://giffiles.alphacoders.com/129/12938.gif' alt='rear end of a lambo' data-aos="fade-right" />
        <img className='skylineimg' src='https://giffiles.alphacoders.com/130/13051.gif' alt='a nissan r34 drifting' data-aos="fade-left" />
      </div>
      <div className="box3" data-aos="fade-right">
        <img className='supraimg' src='https://images.hdqwalls.com/download/toyota-supra-2020-tuned-4k-us-2560x1080.jpg' alt='a toyota supra' data-aos="fade-up" />
      </div>
    </Container>
  )
}

export default About

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1 {
  border-bottom: 2px solid white;
}

.box1 {
  display: flex;
  font-size: 14px;
  border-left: 2px solid #6FFFE9;
  background-color: #1c2541ff;
  padding: 2rem;
  border-radius: 0 12px 12px 0;
  margin: 3% 15%;
}

.aboutInfo {
  min-height: 100%;
}

.testBox {
  display: flex;
  justify-content: space-evenly;
}

.testimonials {
  width: 25%;
}

.aboutPar {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 5%;
  margin-bottom: 0;
}

.brandImg {
  max-width: 30%;
}

.box2 {
  border: 1px solid #6FFFE9;
  min-height:50%;
  margin: 0 15%;
}

.lamboimg {
  max-width: 50%;
}

.skylineimg {
  max-width: 50%;
}

.box3 {
  margin-top: 3%;
  border-top: 40px solid #6FFFE9;
}

.supraimg {
  width: 100%;
}
`