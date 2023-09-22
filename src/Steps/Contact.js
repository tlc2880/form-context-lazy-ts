import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const Contact = () => {
  const [state, setState] = useAppState();
  const { 
    handleSubmit, 
    register,
    formState: { errors },
  } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/address");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Contact Details</legend>
        <Field label="Phone" error={errors?.email}>
          <Input
            {...register("phone", { required: "Phone is required" })}
            type="phone"
            id="phone"
          />
        </Field>
        <Field label="Email" error={errors?.email}>
          <Input
            {...register("email", { required: "Email is required" })}
            type="email"
            id="email"
          />
        </Field>
        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/">
            {"<"} Previous
          </Link>
          <Button>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};