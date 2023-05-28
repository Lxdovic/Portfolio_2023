const GradientText = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <span
      {...otherProps}
      className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
    >
      {children}
    </span>
  );
};

export default GradientText;
