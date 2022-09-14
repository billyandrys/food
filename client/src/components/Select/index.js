import Select from "react-select";
export default function index({
  placeholder,
  options,
  handleChange 
}) {
  
  return (
    <Select
      placeholder={placeholder}
      options={options}
      onChange={handleChange}
    />
  );
}
