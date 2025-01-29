import styled from "styled-components";
import { CgAnchor } from "react-icons/cg";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;
const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: cornflowerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h2 {
    font-size: 22px;
    font-weight: 700;
  }
`;
const Menu = styled.div`
  ul {
    display: flex;
    gap: 40px;
  }

  li {
    font-size: 18px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  all: unset;
  width: 100px;
  height: 30px;
  background-color: lightsalmon;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  margin: 10px 0;
  cursor: pointer;
`;

const Home = () => {
  return (
    <Wrap>
      <Header>
        <Logo>
          <CgAnchor style={{ fontSize: "34px" }} />
          <h2>COGO</h2>
        </Logo>
        <Menu>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </Menu>
      </Header>
      <Link to={"/main"}>
        <Button>메인으로</Button>
      </Link>
    </Wrap>
  );
};

export default Home;
