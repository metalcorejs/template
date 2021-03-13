import * as React from "react";
import { Header } from "../app/ui/header";
import { Footer } from "../app/ui/footer";
import { DatePickerForm } from "../app/ui/cards/date_picker_form";

export const Main = () => {
  return (
    <>
      <Header />
      <main className="main">
        <DatePickerForm />
      </main>
      <Footer />
    </>
  );
};
