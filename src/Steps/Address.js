import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const Address = () => {
  const [state, setState] = useAppState();
  const { 
    handleSubmit, 
    register,
    formState: { errors },
  } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Address Details</legend>
        <Field label="Street" error={errors?.street}>
          <Input
            {...register("street", { required: "Street is required" })}
            type="street"
            id="street"
          />
        </Field>
        <Field label="City, State, Zip" error={errors?.cityState}>
          <Input
            {...register("cityState", { required: "City, State, and Zip is required" })}
            type="cityState"
            id="cityState"
          />
        </Field>
        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/contact">
            {"<"} Previous
          </Link>
          <Button>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};
