import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Form, Section, SectionRow } from "../Forms";

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <Section title="Personal Details" url="/">
        <SectionRow>
          <div>Name</div>
          <div>{state.name}</div>
        </SectionRow>
        <SectionRow>
          <div>Age</div>
          <div>{state.age}</div>
        </SectionRow>
      </Section>
      <Section title="Contact Details" url="/contact">
        <SectionRow>
          <div>Email</div>
          <div>{state.email}</div>
        </SectionRow>
        <SectionRow>
          <div>Phone</div>
          <div>{state.phone}</div>
        </SectionRow>
      </Section>
      <Section title="Address Details" url="/address">
        <SectionRow>
          <div>Street</div>
          <div>{state.street}</div>
        </SectionRow>
        <SectionRow>
          <div>City, State, Zip</div>
          <div>{state.cityState}</div>
        </SectionRow>
      </Section>
      <div className="d-flex justify-content-start">
        <Button>Submit</Button>
      </div>
    </Form>
  );
};
