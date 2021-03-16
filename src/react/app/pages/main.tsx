import * as React from "react";
import { MainLayout } from "../layout/main";
import { DatePickerForm } from "../ui/cards/date_picker_form";

export const Main = () => {
  return (
    <MainLayout>
      <DatePickerForm />
    </MainLayout>
  );
};
