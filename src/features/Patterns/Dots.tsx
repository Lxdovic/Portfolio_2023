const Dots = (props: any) => {
  return (
    <svg
      {...props}
      id="patternId2"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="b"
          patternUnits="userSpaceOnUse"
          width="40"
          height="40"
          patternTransform="scale(1) rotate(0)"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="hsla(0, 0%, 100%, 0)"
          />
          <path
            d="M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z"
            strokeWidth="1"
            stroke="none"
            fill="hsla(259, 0%, 23%, 1)"
          />
          <path
            d="M20 25a5 5 0 110-10 5 5 0 010 10z"
            strokeWidth="1"
            stroke="none"
            fill="hsla(340, 0%, 100%, 0)"
          />
        </pattern>
      </defs>
      <rect
        width="800%"
        height="800%"
        transform="translate(0,0)"
        fill="url(#b)"
      />
    </svg>
  );
};

export default Dots;
