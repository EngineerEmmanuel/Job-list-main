import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    // this function will automatically close the mobile menu if the screen width is above 667  and the mobile menu is turned on 
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 667 && isMobile == true){
            setIsMobile(false)
        }
    })
    return ( 
        <nav>
            <div className="nav-con">
                <div className="logo-con">
                    <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>
                </div>
                <ul>
                    <li>Find Job</li>
                    <li>Company Review</li>
                    <li>Find Salaries</li>
                </ul>
                <div className="profile-con">
                    <div className="img-profile-icon-con">
                        <div className="img-con">
                            <img src="https://media.istockphoto.com/id/472825784/photo/happy-young-man-isolated-portrait.jpg?s=612x612&w=0&k=20&c=6G4ExGa4NCn6f_pA2PhFYG9zQduG8jFEuLDhjqNqi2k=" alt="" />
                        </div>
                        <p>Emmanuel</p>
                        <ArrowDropDownIcon/>

                    </div>

                </div>
                <div className="mobile-icon-con" onClick={()=> setIsMobile(!isMobile)}>
                    {isMobile?<CloseIcon/> : <DehazeIcon/> }
                </div>
            </div>
            {isMobile &&
                <div className="mobile-con">
                <ul>
                        <li>Find Job</li>
                        <li>Company Review</li>
                        <li>Find Salaries</li>
                    </ul>
                <div className="img-profile-icon-mobile-con">
                            <div className="img-mobile-con">
                                <img src="https://media.istockphoto.com/id/472825784/photo/happy-young-man-isolated-portrait.jpg?s=612x612&w=0&k=20&c=6G4ExGa4NCn6f_pA2PhFYG9zQduG8jFEuLDhjqNqi2k=" alt="" />
                            </div>
                            <p>Emmanuel</p>
                            <ArrowDropDownIcon/>
    
                        </div>
    
                </div>
            }
            
        </nav>
     );
}
 
export default Header;