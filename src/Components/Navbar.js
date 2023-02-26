import { useRef } from 'react';

const Navbar = () => {
    const navref = useRef();
    const navToggle = () =>{
        navref.current.classList.toggle('block')
        navref.current.classList.toggle('toggle')
    }

    const lisToggle = () =>{
        navref.current.classList.toggle('toggle')
        navref.current.classList.toggle('block')
    }
    
    return(
<>
        <div className="display-desktop">
            <div className="nav-bar">
                <ul className="nav-f">
                    <h2>MBN</h2>
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contacts">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="display-mobile">
            <ul className="nav-fix">
                <h2 style={{color:'#7e22ce', animation:'animate 0.5s infinite'}}>MBN</h2>
                <i className="fa fa-bars hamburger" aria-hidden="true" onClick={navToggle}></i>
            </ul> 
        </div>
        <div className="display-mobile">
            <div className="none" ref={navref} onClick={lisToggle}>
                <ul className="list" id="list">
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contacts">Contact</a></li>
                </ul>
            </div>  
        </div>
</>
        
    )
}
export default Navbar;