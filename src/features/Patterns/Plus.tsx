const Plus = (props: any) => {
  return (
    <svg
      {...props}
      id="patternId"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="a"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
          patternTransform="scale(2) rotate(45)"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="hsla(0, 0%, 100%, 0)"
          />
          <path
            d="M3.25 10h13.5M10 3.25v13.5"
            strokeLinecap="square"
            strokeWidth="0.5"
            stroke="hsla(259, 0%, 23%, 1)"
            fill="none"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        transform="translate(0,0)"
        fill="url(#a)"
      />
    </svg>
  );
};

export default Plus;
