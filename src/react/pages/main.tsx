import * as React from "react";
import { MainLayout } from "../app/layout/main";
import { DatePickerForm } from "../app/ui/cards/date_picker_form";

export const Main = () => {
  return (
    <MainLayout>
      <DatePickerForm />
    </MainLayout>
  );
};
