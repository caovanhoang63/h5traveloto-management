import "./textunderline.css";

function TextUnderline({ textUnderline, isFocused, onClick }) {
    return (
        <div
            className={`underline-text ${isFocused ? "focused" : ""}`}
            onClick={onClick}
        >
            <p className="text-underline">{textUnderline}</p>
            <div className="underline"></div>
        </div>
    );
}

export default TextUnderline;
