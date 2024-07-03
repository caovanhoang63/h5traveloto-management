import "./textblock.css";

const TextBlock = ({content}) => {
    return ( 
        <div className={"TextBlock-Holder "}>
            <div>{content}</div>
            <div className="TextBlock-Holder-Important">*</div>
        </div>
     );
}
 
export default TextBlock;