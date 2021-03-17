import React, { FC } from "react";
import { MainLayout } from "../layout/main";
import { RegistrationForm } from "../ui/cards/forms/reg_form";

export const Registration: FC = () => (
  <MainLayout>
    <RegistrationForm />
  </MainLayout>
);
