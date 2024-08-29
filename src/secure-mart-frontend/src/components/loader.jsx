import { RotatingLines } from "react-loader-spinner"

export default function Loader({ size }) {
    return (
        <RotatingLines
            visible={true}
            height="50"
            width="50"
            strokeColor="black"
            strokeWidth={size ? `'${size}'` : "25"}
            animationDuration="0.50"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""

        />
    )
}