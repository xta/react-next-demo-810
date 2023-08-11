export default function Outer({ children }) {
    return (
        <>
            <div>*Outer</div>
            <div>{children}</div>
        </>
    )
}