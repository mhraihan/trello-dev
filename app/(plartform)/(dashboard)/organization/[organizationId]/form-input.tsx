import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col space-y-2">
      <Input name="title" placeholder="Title" disabled={pending} />
      {errors?.title
        ? errors.title.map((error: string) => (
            <p key="error" className="text-rose-500 mb-1">
              {error}
            </p>
          ))
        : null}
    </div>
  );
};

export default FormInput;
