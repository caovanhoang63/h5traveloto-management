    import "./feedbackBlock.css"

    function FeedbackBlock({customerName,feedback,roomId,_onClick}) {
        return (
            <div className="feedbackblock-container" onClick={_onClick}>
                <div className="feedbackblock-content">
                    <span className="feedbackblock-name">{customerName}</span>
                    <span className="feedbackblock-room">{roomId}</span>

                </div>
                <p className="feedbackblock-feedback">{feedback}</p>
            </div>
        );
    }

    export default FeedbackBlock;