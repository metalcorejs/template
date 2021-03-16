import * as React from "react";
import { Footer } from "../../ui/footer";
import { Header } from "../../ui/header";

export const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container main__container">{children}</div>
      </main>
      <Footer />
    </>
  );
};
