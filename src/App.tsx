import styled from "styled-components";
import Store from "./pages/Store";
import { Address, Restaurant } from "./model/resturant";
import { useState } from "react";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: cornflowerblue;
  color: #fff;
  font-size: 32px;
  text-align: center;
  line-height: 300px;
`;

let data: Restaurant = {
  name: "누나네 식당",
  category: "Korean",
  address: {
    city: "Busan",
    detail: "Onchendong",
    zipCode: 123456,
  },
  menu: [
    { name: "제육볶음", price: 8000, category: "식사" },
    { name: "돈까스", price: 7000, category: "육류" },
    { name: "칼국수", price: 6500, category: "면류" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  // =>이 useState를 쓸 때 Restaurant라는 타입을 쓰겠다

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  return (
    <>
      <Box></Box>
      <Store info={myRestaurant} changeAddress={changeAddress} />
    </>
  );
};

export default App;
