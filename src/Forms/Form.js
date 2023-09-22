export const Form = ({ children, ...props }) => {
  return (
    <form className="row" {...props} >
      {children}
    </form>
  );
};
