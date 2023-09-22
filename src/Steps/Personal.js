import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const Personal = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/contact");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Personal Details</legend>
        <Field label="Name" error={errors?.name}>
          <Input
            {...register("name", { required: "Name is required" })}
            id="name"
          />
        </Field>
        <Field label="Age" error={errors?.age}>
          <Input
            {...register("age", { required: "Age is required" })}
            id="age"
          />
        </Field>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};
