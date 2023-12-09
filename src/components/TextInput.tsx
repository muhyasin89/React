const TextInput = ({ label, field, props,  handleInputChange }) => {
  return (
    <>
      <label
        htmlFor="email"
        className="label"
      >
        {label.title}
      </label>
      <input
        {...field} {...props}
        onChange={handleInputChange}
        className="inputFile"
      />
    </>
  );
};

export default TextInput;
