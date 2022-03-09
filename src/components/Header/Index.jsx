import styled from "styled-components";
import logo from "../../assets/logo.jpg"
const StyledHeader = styled.header`
position: absolute;
z-index: 999;
width: 100%;
    nav {
        display: flex;
        justify-content: space-between;
        img {
            width: 150px;
        }
        ul {
            display: flex;
            align-items: center;
            padding-top: 58px;
            li {
                padding: 0 10px;
                color: white;
                a {
                    text-decoration: none;
                    color: white;
                }                
            }
        }
    }
`


const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <nav>
                    <div>
                        <img src={logo} />
                    </div>
                    <div>
                        <ul>
                            <li style={{display: "flex", alignItems: "center"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                <span style={{paddingLeft: 7}}>Andraniki Vagharshapat, Armenia</span>
                            </li>
                            <li><a href="#">043 043041</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </StyledHeader>
    )
}

export default Header;