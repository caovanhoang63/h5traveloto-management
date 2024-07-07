import "./CustomersFeedback.css";
import FeedbackBlock from "../feedback/feedbackBlock/feedbackBlock";
import {useEffect, useState} from "react";
import {Spin} from "antd";
import {listReviews} from "../../../api/reviews";
export default function CustomersFeedback() {
    const [reviews, setReviews] = useState(null)
    const hotelId = '\"' + sessionStorage.getItem("hotel-id") + '\"';
    useEffect(() => {
        setInterval(() => {
            listReviews({"hotel_id" : hotelId}).then(res => {
                try {
                    setReviews(res)
                } catch (error) {
                    console.log(error)
                }
            }).catch(

            ).finally(

            )
        },5000 )
    }, []);

    const  func = () => {};
    return (
        <div className="customersfeedback-container">
            <h1 className="customersfeedback-header">Customers Feedback</h1>
            {reviews != null ?
            <div className="customersfeedback-blocks">
                { reviews.data?.map((feedback) => (
                    <FeedbackBlock
                        key={feedback.id}
                        feedback={feedback.comment}
                        _onClick={func}
                        rating={feedback.rating}
                        customerName={feedback.user.last_name}
                    />
                ))}
            </div> : <Spin></Spin>}
        </div>
    );

}