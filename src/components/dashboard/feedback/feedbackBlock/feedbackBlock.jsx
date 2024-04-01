    import "./feedbackBlock.css"

    function FeedbackBlock({customerName,feedback,roomId,_onClick}) {
        return (
            <div className="feedbackblock-container" onClick={_onClick}>
                <div className="feedbackblock-content">
                    <label className="feedbackblock-name">{customerName}</label>
                    <p className="feedbackblock-feedback">{feedback}</p>
                </div>
                <label className="feedbackblock-room">{roomId}</label>
            </div>
        );
    }
    export default FeedbackBlock;