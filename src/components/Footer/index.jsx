import React from 'react'
import "./style.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
const Footer = () => {
    return (
       <footer>
           <a href="https://www.linkedin.com/in/akash-dubey-1040791a7/">
               <LinkedInIcon/>
           </a>
           <a href="https://www.facebook.com/profile.php?id=100025704156015">
               <FacebookIcon/>
           </a>
           <a href="https://github.com/akashdubey2211">
               <GitHubIcon/>
           </a>
           

       </footer>
    )
}

export default Footer;
