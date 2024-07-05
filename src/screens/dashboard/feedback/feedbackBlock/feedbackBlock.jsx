import "./feedbackBlock.css"
import Divider from "../../../../components/divider/divider";

function FeedbackBlock({customerName, feedback, rating, _onClick}) {
    return (
        <div className="feedbackblock-container" onClick={_onClick}>
            <div className="feedbackblock-content">
                <span className="feedbackblock-name">{customerName}</span>
                <span className="feedbackblock-room">{rating + "/10"}</span>

            </div>
            <p className="feedbackblock-feedback">{feedback}</p>
            <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
        </div>

    );
}

export default FeedbackBlock;