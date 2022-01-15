import styled from 'styled-components'

export default function About() {
    return (
        <Container >
            

            <div className="box1">
                <p className="aboutPar"><h1>About Us</h1>Midnight Motorsports is a state-of-the-art car servicing and car parts hub. It was founded here in Lake Forest, California in 2018. Since then, we have serviced and assisted over 1,000 customers with their car needs. Here are some of our testimonials:</p>
                <img src='https://res.cloudinary.com/dtpgzynwd/image/upload/v1641101298/midnight-motorsports/midnightlogo_ilxpls.png' alt="midnight motorsports black and white logo" className="zimg" />
            </div>
            <div className="box2"></div>
            <div className="box3"></div>
            
        </Container>
    )
}
 
const Container=styled.div`

.aboutContainer {
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

  }

  h1{
    border-bottom: 2px solid white;
  }

.box1 {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  padding: 3%;
  display: flex;
  align-items: center;
  margin: 5%;
  border-left: 1px solid cyan;
  background:black;
  width:80%;
  height:400px;

}


.aboutPar {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 3%;
  background: none;
  border-radius: 4px;
  
}

.zimg {
 
  margin: 3%;
  max-width: 30%;
  max-height: 500px;
}

.box2 {
border: 1px solid cyan;
height:500px;
margin-left:3%;
margin-right:3%;
}
`