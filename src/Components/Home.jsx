import {SimpleGrid, Wrap,Image,Text, Button} from "@chakra-ui/react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Wrap justify="center">

                <SimpleGrid w="fit-content" spacing={3} columns={[1, 2]}>
                    <div>
                        <Image src="https://avatars.githubusercontent.com/u/107567053?v=4" alt="ral"></Image>

                    </div>
                    <div className="home-div">
                        <h1>Hi..</h1>
                        <h2>I'm  Rahul Das</h2>
                        <Text style={{paddingRight:"115px", fontSize:"18px"}}>A full-stack React Js developer trained by Masai School, Bengaluru. I have a passion to create useful projects 
                            and systems which can contribute in everyone's wellbeing. I go to full extent in execution.</Text>
                        <button>Resume</button>
                        <div className="anchor">
                            <Image style={{width:"25%",margin:"auto"}} src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" alt="lin"></Image> 
                            <Image style={{width:"24%", margin:"auto"}} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="lin"></Image> 
                            <Image style={{width:"24%", margin:"auto", backgroundColor:"white"}} src="https://pngimg.com/uploads/gmail_logo/gmail_logo_PNG12.png" alt="lin"></Image> 
                        </div>    
                    </div>


                </SimpleGrid>

            </Wrap>

        </div>
    )
}
export default Home