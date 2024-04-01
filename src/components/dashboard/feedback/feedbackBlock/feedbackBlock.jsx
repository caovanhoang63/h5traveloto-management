    import "./feedbackBlock.css"

    function FeedbackBlock({customerName,feedback,roomId,_onClick}) {
        return (
            <div className="feedbackblock-container" onClick={_onClick}>
                <div className="feedbackblock-content">
                    <span className="feedbackblock-name">{customerName}</span>
                    <p className="feedbackblock-feedback">{feedback}</p>
                </div>
                <span className="feedbackblock-room">{roomId}</span>
            </div>
        );
    }
    export default FeedbackBlock;