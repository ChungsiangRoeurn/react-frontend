import { Outlet } from "react-router-dom";
import Header from "../components/storefront/layout/header";
import Footer from "../components/storefront/layout/footer";

const StorefrontLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer />
    </>
  );
};

export default StorefrontLayout;
