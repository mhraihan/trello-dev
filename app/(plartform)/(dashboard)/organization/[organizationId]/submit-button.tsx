import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="disabled:bg-sky-950 disabled:text-red-50"
      disabled={pending}
    >
      {pending ? "Creating" : "Create"}
    </Button>
  );
};
