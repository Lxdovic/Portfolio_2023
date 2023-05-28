const AboutCard = (props: any) => {
  const { children, className, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={`relative border bg-darker border-white/25 rounded-xl p-10 z-10 w-full ${className}`}
    >
      <p className="text-white/80 text-2xl font-['Poppins-Semibold']">
        {children}
      </p>
    </div>
  );
};

export default AboutCard;
