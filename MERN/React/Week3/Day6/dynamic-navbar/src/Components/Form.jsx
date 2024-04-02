
import { useNameContext } from "./Context";

const Form = () => {
  const { name, setName } = useNameContext();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <label>Your name: </label>{" "}
      <input type="text" id="name" value={name} onChange={handleChange} />
    </div>
  );
};

export default Form;
