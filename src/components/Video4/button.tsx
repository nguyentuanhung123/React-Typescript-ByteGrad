import React from 'react'

// type Color = 'red' | 'blue' | 'green' | 'yellow';

// type ButtonProps = {
//     backgroundColor: Color;
//     textColor: Color;
//     fontSize: number; 
//     pillShape?: boolean;
//     padding: [number, number, number, number];
// };

// const Button = ({backgroundColor, textColor,  fontSize, pillShape, padding}: ButtonProps) => {

//     return (
//         <button style={{
//             backgroundColor: backgroundColor,
//             color: textColor,
//             fontSize: fontSize,
//             padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
//         }}>
//             Click me
//         </button>
//     )
// }

// type ButtonProps = {
//     style: {
//         backgroundColor: string;
//         fontSize: number;
//         textColor: string;
//     }
// };

//-------------------------------------------------------------------------------------------------------------

// type ButtonProps = {
//     style: React.CSSProperties;
// };

// const Button = ({style}: ButtonProps) => {

//     return (
//         <button style={style}>
//             Click me
//         </button>
//     )
// }

// export default Button;

//-------------------------------------------------------------------------------------------------------------


// type ButtonProps = {
//     borderRadius: Record<string, number>
// };

// const Button = ({ borderRadius }: ButtonProps) => {

//     const style = {
//         borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`
//     };

//     return (
//         <button style={style}>
//             Click me
//         </button>
//     )
// }

// export default Button;

//-------------------------------------------------------------------------------------------------------------

// type ButtonProps = {
//     onClick: (test: string) => void;
// };

// const Button = ({ onClick }: ButtonProps) => {

//     return (
//         <button onClick={() => onClick('5')}>
//             Click me
//         </button>
//     )
// }

// export default Button;

//-------------------------------------------------------------------------------------------------------------

// type ButtonProps = {
//     children: React.ReactNode;
// };

// const Button = ({ children }: ButtonProps) => {

//     return (
//         <button>
//             { children }
//         </button>
//     )
// }

// export default Button;

//-------------------------------------------------------------------------------------------------------------

type ButtonProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ setCount }: ButtonProps) => {

    return (
        <button>
           Click me!
        </button>
    )
}

export default Button;

