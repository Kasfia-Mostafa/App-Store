

const InputContainer = ({ placeholder, onChangeText ,stateValue}) => {

  const handleChange = (e) => {
    onChangeText(e.target.value);
  };

  return (
    <input
    className="w-full h-12 rounded-md outline-none border border-third shadow-md bg-secondary px-4 text-lg font-semibold fonts-sans"
      type="text"
      placeholder={placeholder}
      value={stateValue}
      onChange={handleChange}
    />
  );
};

export default InputContainer;
