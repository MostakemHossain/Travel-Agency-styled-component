import styled from "styled-components";
import logo from "../assets/logo.png";
import { BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

export default function Navber() {
  return (
    <Nav>
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <div className="toggle"></div>
      <div className="link">
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#destinations">Destinations</a>
          </li>
          <li>
            <a href="#offer">Offers</a>
          </li>
          <li>
            <a href="#tour">Tour</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>

      <div className="account-info">
        <div className="account">
          <span>
            <BsPerson></BsPerson>
          </span>
          <span>My Account</span>
        </div>
        <div className="search">
          <IoSearchOutline></IoSearchOutline>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    img {
      cursor: pointer;
    }
  }
  .toggle {
    display: none;
  }

  .link {
    ul {
      display: flex;
      gap: 3rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: black;
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  .account-info {
    display: flex;
    gap: 2rem;
    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }
  
`;
