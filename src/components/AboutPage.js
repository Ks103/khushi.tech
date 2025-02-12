import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid rgb(252, 246, 244);
    color: rgb(252, 246, 244);
    padding: 1.5rem;
    width: 60vw;
    height: 65vh;
    z-index: 3;
    line-height: 1.5;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);
    position: absolute;
    left: calc(2.5rem + 5vw);
    top: 10rem;
    font-family: "Ubuntu Mono", monospace;
    font-style: italic;
`



const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
      "I can build and design your ideas"
Always ready to discover new things.
<br /> <br/>
I have two years of experience in UI/UX design, with a strong background in creating designs across AI-generated platforms, blockchain, e-commerce, and various product-based applications. My expertise in Figma, combined with hands-on experience from multiple internships and freelancing projects, has allowed me to successfully deliver designs for over 10 clients.
<br/> <br/>
Additionally, my proficiency in frontend development further enhances my ability to create seamless and interactive user experiences, making me a strong candidate for this role. 
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
