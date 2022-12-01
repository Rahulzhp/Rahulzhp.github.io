import {SimpleGrid, Wrap,Image,Text, Button} from "@chakra-ui/react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Wrap justify="center">

                <SimpleGrid w="fit-content" spacing={3} columns={[1, 2]}>
                    <div>
                        <Image  src="https://avatars.githubusercontent.com/u/107567053?v=4" alt="ral"></Image>

                    </div>
                    <div className="home-div">
                        <h1 style={{color:"teal",marginTop:"3px"}}>Hi.. <Image style={{width:"9%"}} src="https://cdn-icons-png.flaticon.com/128/2339/2339864.png" alt="hlw"></Image></h1>
                        <h1 style={{marginTop:"-7px"}}>I'm  Rahul Das</h1>
                        <Text style={{padding:"0px", fontSize:"63px", marginTop:"-15px",lineHeight:"69px"}}>FULL - STACK <br></br> WEB DEVELOPER</Text>
                        <Text style={{marginTop:"-25px"}}>Full stack developer who cares deeply about user experience.</Text>
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