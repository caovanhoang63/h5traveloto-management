import "./divider.css"

// thick: 3px...
// type: dashed, dotted, solid
const Divider = ({isHorizontal = true, thick, type, color}) => {
    const styleBottom = {
        borderBottomColor: color,
        borderBottomWidth: thick,
        borderBottomStyle: type
    };
    const styleRight = {
        borderRightColor: color,
        borderRightSpacing: thick,
        borderRightStyle: type
    };
    return ( 
        <div className="divider" style={(isHorizontal ? styleBottom : styleRight)}></div>
     );
}
 
export default Divider;