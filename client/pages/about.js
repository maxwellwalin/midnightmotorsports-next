import styled from 'styled-components'

export default function About() {
    return (
        <Container >
            

            <div className="box1">
              <div className='aboutAndTest'>
                <p className="aboutPar"><h1>About Us</h1>Midnight Motorsports is a state-of-the-art car servicing and car parts hub. It was founded here in Lake Forest, California in 2018. Since then, we have serviced and assisted over 1,000 customers with their car needs. Here are some of our testimonials:</p>
                <div className='testBox'>
                <div className='testimonials'>Chris is an outstanding customer-service oriented owner! - John</div>
                <div className='testimonials'>What a great place to find car parts! Diamond in the rough. - Mike</div>
                <div className='testimonials'>We were very satisfied with the products we purchased for our new M4! - Steve</div>
                </div>
                </div>
                <img src='https://res.cloudinary.com/dtpgzynwd/image/upload/v1641101298/midnight-motorsports/midnightlogo_ilxpls.png' alt="midnight motorsports #0b132b and white logo" className="zimg" />
                
            </div>
            <div className="box2">
<img className='lamboimg' src='https://giffiles.alphacoders.com/129/12938.gif' alt='rear end of a lambo' />
<img className='skylineimg' src='https://giffiles.alphacoders.com/130/13051.gif' alt='a nissan r34 drifting' />

            
            </div>
            <div className="box3">
              <img className='supraimg' src='https://images.hdqwalls.com/download/toyota-supra-2020-tuned-4k-us-2560x1080.jpg' alt='a toyota supra' />
            </div>
            
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
  border-left: 1px solid #6FFFE9;
  background:#0b132b;
  width:80%;
  height:400px;

}

.aboutAndTest {
  display: flex;
  flex-direction: column;
}

.testBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.testimonials {
  width: 25%;
  height:100px
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
border: 1px solid #6FFFE9;
width: 93%;
max-height:50%;
margin-left:3%;
margin-right:3%;
margin-bottom: 3%;
}

.lamboimg {
  max-width: 50%;
  height: 100%;
}
.skylineimg {
  max-width: 50% ;
  max-height: 100%;
}

.box3 {
  margin-top: 15%;
 
  border-top: 40px solid #6FFFE9;
}

.supraimg {
width: 100%;
}

`