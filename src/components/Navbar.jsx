import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

// const StyledBtn = styled.button`
//   background: red;
//   color: white;
//   font-size: 2rem;
//   padding: 1rem;
// `;

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        {/* <StyledBtn>styled btn</StyledBtn> */}
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.nav`
//   background: red;
//   color: orange;
// `;

export default Navbar;
