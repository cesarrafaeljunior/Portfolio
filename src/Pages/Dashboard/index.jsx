import { Header } from "../../Components/Header";
import { Container } from "../../Components/Container";
import { Main } from "../../Components/Main/style";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
