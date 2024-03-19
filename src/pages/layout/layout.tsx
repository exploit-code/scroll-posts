import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
