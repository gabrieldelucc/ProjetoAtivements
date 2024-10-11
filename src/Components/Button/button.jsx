export const Button = (props) => {
    return <button disabled={props.load} type="submit" className={`py-2 px-4 rounded text-complementary-white bg-[#004582] 
    ${props.styles}`}> {props.children}</button>
}

export const ButtonLink = (props) => {

    return <button OnClick={props.onClick} type="button" className={`p-1 underline text-[#372087]`}>{props.children}</button>

}

export const ButtonTransparent = (props) => {

    return <button type="button" onClick={props.onClick} className={`flex justify-center items-center border rounded py-2 px-4 ${props.styles}`}>{props.children}</button>

} 