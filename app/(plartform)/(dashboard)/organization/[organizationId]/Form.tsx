"use client";
import { create } from "@/actions/create-board";
import { useFormState } from "react-dom";
import { SubmitButton } from "./submit-button";
import FormInput from "./form-input";

const Form = () => {
  const initialState = {
    message: null,
    errors: {},
  };
  const [state, dispatch] = useFormState(create, initialState);
  return (
    <form action={dispatch} className="space-y-3">
      <FormInput errors={state?.errors} />
      <SubmitButton />
    </form>
  );
};

export default Form;
