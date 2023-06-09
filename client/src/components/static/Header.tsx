import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Logo
                        alt="logo"
                        src={logo}
                    />

                    <Nav>
                        <NavLinked to="/" >
                            Auth
                        </NavLinked>
                        <NavLinked to="/todo" >
                            Todo
                        </NavLinked>
                    </Nav>
                </Main>
            </Container>
        </div>
    )
}

export default Header

const NavLinked = styled(NavLink)`
text-transform: uppercase;
font-weight: 700;
margin: 0 5px;
padding: 10px 25px;
border-radius: 3px;
transition: all 300ms;
text-decoration: none;
color: white;

:hover{
cursor: pointer;
background-color: #aa02aa ;
transform: translate(0, 5PX)
}

&.active{
  background-color: #710171;  
}
`

const Nav = styled.div`
display: flex;
`

const Logo = styled.img`
height: 40px;
margin-right: 50px;
`

const Main = styled.div`
width: 90%;
height: 100%;
color: white;
display: flex;
align-items: center;
`

const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 70px;
background-color: black;
`