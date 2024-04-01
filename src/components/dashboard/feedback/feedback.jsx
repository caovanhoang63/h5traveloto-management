import "./feedback.css"
import FeedbackBlock from "./feedbackBlock/feedbackBlock";

function Feedback({data}) {
    const func = () => {
        console.log("clicked");
    }
    return (
        <div className="feedback-container">
            <h1 className="feedback-header">Feedback</h1>
            <div className="feedback-blocks">
                {data.data.map((feedback) => (
                    <FeedbackBlock
                        key={feedback.id}
                        feedback={feedback.comment}
                        _onClick={func}
                        roomId={feedback.hotel_id}
                        customerName={feedback.booking_id}

                    />
                ))}

            </div>
        </div>
    );
}
export default Feedback;