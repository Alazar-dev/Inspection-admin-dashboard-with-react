import { useForm } from "react-hook-form";

const UserForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="firstName" ref={register} placeholder="First name" />

      <input name="lastName" ref={register} placeholder="Last name" />

      <select name="category" ref={register}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>

      <input type="submit" />
    </form>
  );
}
export default UserForm;