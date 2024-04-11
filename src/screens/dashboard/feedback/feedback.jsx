import "./feedback.css"
import FeedbackBlock from "./feedbackBlock/feedbackBlock";
import {useEffect, useState} from "react";
import {listReviews} from "../../../api/reviews";

function Feedback() {

    // const hotelId = "\"3mKb6KGah2LTST\"";

    // const params = {
    //     hotel_id : hotelId,
    // }
    const params = {}
    const [reviews, setReviews] = useState([])


    useEffect(() => {

        listReviews(params).then((res => {
            console.log(res.data)
            setReviews(res.data)
        })).catch(
            (e) => {
                // handle loi
            }).finally(

        )

    }, []);


    const func = () => {}
    
    
    return (
        <div className="feedback-container">
            <h1 className="feedback-header">Feedback</h1>
            <div className="feedback-blocks">
                {reviews.map((feedback) => (
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