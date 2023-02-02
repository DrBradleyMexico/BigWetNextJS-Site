import * as React from "react";

// TODO fix type later
const Max = (props: any) => (
    <svg
        width={9}
        height={9}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0H0v9h9V0zM8 2H1v6h7V2z"
            fill="#000"
        />
    </svg>
);
export default Max;