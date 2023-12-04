// import React, {Children, useState} from "react";
// import menu from '../../assets/menu.png'
// import { Link } from 'react-scroll/modules';
// import ReactDOM from "react-dom";


// const root = document.getElementById('root') as HTMLElement
// export default function Dropdown() {
//     const [showMenu, setShowMenu] = useState(false);
//     return ReactDOM.createPortal (
//         <div className="mobMenu">            
//             <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
//             <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
//                 <Link to='intro' activeClass='active' smooth={true} spy={true} offset={-100} duration={1000} className="desktopMenuListItem" onClick={() => setShowMenu(false)}>Home</Link>
//                 <Link to='skills' activeClass='active' smooth={true} spy={true} className="desktopMenuListItem">About</Link>
//                 <Link className="desktopMenuListItem">Portfolio</Link>
//                 <Link className="desktopMenuListItem">Clients</Link>
//             </div></div>, root
//     )
// }

