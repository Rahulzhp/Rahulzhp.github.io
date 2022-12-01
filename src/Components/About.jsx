import React from 'react';
import "./About.css"
import {SimpleGrid, Wrap,Image,Text, Button} from "@chakra-ui/react";
const About=()=> {
  
    
    return (
     <div className='about'>
      <Wrap justify="center">

<SimpleGrid w="fit-content" spacing={3} columns={[1, 2]}>
    
    <div className="home-div">
        <h1 style={{color:"teal"}}>Rahul Das</h1>
        <h1>Full-Stack Web Developer</h1>
        <Text style={{paddingRight:"115px", fontSize:"18px"}}>A full-stack React Js developer trained by Masai School, Bengaluru. I have a passion to create useful projects 
            and systems which can contribute in everyone's wellbeing. I go to full extent in execution.</Text>
        <Text>A self-motivated, hard-working, and ambitious Full-Stack web developer with proficiency 
         in JavaScript, React, HTML and CSS. Problem-solving mindset and the ability to perform well
          in collaboration. Looking forward to working as an accountable and competent employee in an exciting Tech company.</Text>  
    </div>
    <div>
        <Image  src="https://mehfoozkhangithub.github.io/static/media/full-stack-development.7835ddbfd9d23e02b60c.gif" alt="ral"></Image>

    </div>


</SimpleGrid>

</Wrap>

     </div>
    );
  }
export default About