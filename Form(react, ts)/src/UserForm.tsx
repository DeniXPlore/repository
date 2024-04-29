import FormWrapper from "./FormWrapper";

type UserData = {
  firstname: string;
  lastname: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstname,
  lastname,
  age,
  updateFields,
}: UserFormProps) => {

  return (
    <FormWrapper title="User Details">
      <label> First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstname}
        onChange={(e) => updateFields({ firstname: e.target.value })}
      />
      <label>Last Name</label>
      <input type="text" value={lastname} onChange={(e) => updateFields({ lastname: e.target.value })}/>
      <label>Age</label>
      <input type="number" required min={1} value={age} onChange={(e) => updateFields({ age: e.target.value })} />
    </FormWrapper>
  );
};
export default UserForm;
