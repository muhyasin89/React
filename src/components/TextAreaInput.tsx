function TextAreaInput({ label, field, props, handleInputChange }) {
  return (
    <>
      <label htmlFor="message" className="label">
        {label.title}
      </label>
      <textarea
        id="message"
        className="inputTextField"
        placeholder={props.placeholder}
        onChange={handleInputChange}
      ></textarea>
    </>
  );
}

export default TextAreaInput;
