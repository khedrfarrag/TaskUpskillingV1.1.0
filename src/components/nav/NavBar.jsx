import React, { useState } from 'react'
import { Button, Nav } from 'react-bootstrap'
import { Link ,NavLink} from 'react-router-dom'
import styleNave from "./nave.module.css"
function NavBar() {
  const [naveColor, Setnavcolor] = useState(false)
  const [menuopne, setmenuopen] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 50) {
      Setnavcolor(true)
      } else {
        Setnavcolor(false)
        
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <>

      <Nav className={styleNave.navContaner}>



        <div className={naveColor ? styleNave.fixed : styleNave.mainNav} >
          <h2>khoder</h2>
          <ul className={styleNave.mainLink}>
            <li>

            <NavLink className={styleNave} to={"/"}>home</NavLink>
            </li>
            <li>

            <NavLink to={"/about"}>about</NavLink>
            </li>
            <li>

            <NavLink to={"/services"}>services</NavLink>
            </li>
            <li>
            <NavLink to={"/Testymonials"}>Testymonials</NavLink>

            </li>
            <li>
            <NavLink to={"/contact"}>contact us</NavLink>

            </li>
          </ul>
          <div className={styleNave.mainDivBtn} onClick={()=>{setmenuopen(!menuopne)}}>
            <box-icon name='menu'></box-icon>
          </div>


        </div>
        <div className={menuopne ? styleNave.opend :  styleNave.mainBtn } >
          <ul className={styleNave.mainLinkMenu}>
            <Link to={"/"}><li className="itemLink">home</li></Link>
            <Link to={"/about"}><li className="itemLink">about</li></Link>
            <Link to={"/services"}><li className="itemLink">services</li></Link>
            <Link to={"/Testymonials"}><li className="itemLink">Testymonials</li></Link>
            <Link to={"/contact"}><li className="itemLink">contact us</li></Link>
          </ul>
        </div>
      </Nav>



    </>
  )
}
export default NavBar