
import {
    Primary400,
    Primary50,
    Red400,
    Red50,
    Success400,
    Success50,
    Warning400,
    Warning50
} from "../../common/constant";
function Tag({children,style}) {

    return <span style ={style}>{children}</span>;
}
export function RedTag({children}){
    const style = {
        display: "inline-block",
        padding: "0.5em 1em",
        margin: "0.5em",
        background: Red50 ,
        borderRadius: "16px",
        fontsize: "0.8em",
        color: Red400,
    };
    return <Tag style={style}>{children}</Tag>;
}
export function GreenTag({children}){
    const style = {
        display: "inline-block",
        padding: "0.5em 1em",
        margin: "0.5em",
        background: Success50 ,
        borderRadius: "16px",
        fontsize: "0.8em",
        color: Success400,
    };
    return <Tag style={style}>{children}</Tag>;
}
export function YellowTag({children}){
    const style = {
        display: "inline-block",
        padding: "0.5em 1em",
        margin: "0.5em",
        background: Warning50 ,
        borderRadius: "16px",
        fontsize: "0.8em",
        color: Warning400,
    };
    return <Tag style={style}>{children}</Tag>;
}
export function BlueTag({children}){
    const style = {
        display: "inline-block",
        padding: "0.5em 1em",
        margin: "0.5em",
        background: Primary50 ,
        borderRadius: "16px",
        fontsize: "0.8em",
        color: Primary400,
    };
    return <Tag style={style}>{children}</Tag>;
}

export default Tag;