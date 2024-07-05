import ReactECharts from "echarts-for-react";
import "./CustomersFeedback.css";
import Chart from "../chart/chart";
import FeedbackBlock from "../feedback/feedbackBlock/feedbackBlock";
export default function CustomersFeedback() {
    const reviews = {
        "data": [
            {
                "id": "66097b00898579fbdf72e9b9",
                "status": 1,
                "created_at": "2024-03-31T15:02:24.805Z",
                "updated_at": "2024-03-31T15:02:24.805Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097b51d7bcf2dcecb9175a",
                "status": 1,
                "created_at": "2024-03-31T15:03:45.85Z",
                "updated_at": "2024-03-31T15:03:45.85Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097b53d7bcf2dcecb9175b",
                "status": 1,
                "created_at": "2024-03-31T15:03:47.886Z",
                "updated_at": "2024-03-31T15:03:47.886Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097b57d7bcf2dcecb9175c",
                "status": 1,
                "created_at": "2024-03-31T15:03:51.817Z",
                "updated_at": "2024-03-31T15:03:51.817Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097b7d5db64c13350552cd",
                "status": 1,
                "created_at": "2024-03-31T15:04:29.237Z",
                "updated_at": "2024-03-31T15:04:29.237Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097baaa8e482fdd650f2f0",
                "status": 1,
                "created_at": "2024-03-31T15:05:14.255Z",
                "updated_at": "2024-03-31T15:05:14.255Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097bc4290d65dbe4d54075",
                "status": 1,
                "created_at": "2024-03-31T15:05:40.362Z",
                "updated_at": "2024-03-31T15:05:40.362Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097bd4ea9b21865cc98b8d",
                "status": 1,
                "created_at": "2024-03-31T15:05:56.36Z",
                "updated_at": "2024-03-31T15:05:56.36Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097c613fa8c49b7c928162",
                "status": 1,
                "created_at": "2024-03-31T15:08:17.714Z",
                "updated_at": "2024-03-31T15:08:17.714Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097c75c47a65b8c302835a",
                "status": 1,
                "created_at": "2024-03-31T15:08:37.938Z",
                "updated_at": "2024-03-31T15:08:37.938Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097c77c47a65b8c302835b",
                "status": 1,
                "created_at": "2024-03-31T15:08:39.775Z",
                "updated_at": "2024-03-31T15:08:39.775Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097c92bfeb4540bb0c56d2",
                "status": 1,
                "created_at": "2024-03-31T15:09:06.791Z",
                "updated_at": "2024-03-31T15:09:06.791Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097cad9d188bf926fa8aef",
                "status": 1,
                "created_at": "2024-03-31T15:09:33.658Z",
                "updated_at": "2024-03-31T15:09:33.658Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d08dd477c82283c623e",
                "status": 1,
                "created_at": "2024-03-31T15:11:04.674Z",
                "updated_at": "2024-03-31T15:11:04.674Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d1e46864a53fd539cd8",
                "status": 1,
                "created_at": "2024-03-31T15:11:26.152Z",
                "updated_at": "2024-03-31T15:11:26.152Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d2046864a53fd539cd9",
                "status": 1,
                "created_at": "2024-03-31T15:11:28.42Z",
                "updated_at": "2024-03-31T15:11:28.42Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d2146864a53fd539cda",
                "status": 1,
                "created_at": "2024-03-31T15:11:29.512Z",
                "updated_at": "2024-03-31T15:11:29.512Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d2346864a53fd539cdb",
                "status": 1,
                "created_at": "2024-03-31T15:11:31.01Z",
                "updated_at": "2024-03-31T15:11:31.01Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d2446864a53fd539cdc",
                "status": 1,
                "created_at": "2024-03-31T15:11:32.47Z",
                "updated_at": "2024-03-31T15:11:32.47Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0bc0c52ee239ea5b79",
                "status": 1,
                "created_at": "2024-03-31T17:14:51.14Z",
                "updated_at": "2024-03-31T17:14:51.14Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0bc0c52ee239ea5b7a",
                "status": 1,
                "created_at": "2024-03-31T17:14:51.764Z",
                "updated_at": "2024-03-31T17:14:51.764Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0cc0c52ee239ea5b7b",
                "status": 1,
                "created_at": "2024-03-31T17:14:52.436Z",
                "updated_at": "2024-03-31T17:14:52.436Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0dc0c52ee239ea5b7c",
                "status": 1,
                "created_at": "2024-03-31T17:14:53.16Z",
                "updated_at": "2024-03-31T17:14:53.16Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0dc0c52ee239ea5b7d",
                "status": 1,
                "created_at": "2024-03-31T17:14:53.825Z",
                "updated_at": "2024-03-31T17:14:53.825Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a12c0c52ee239ea5b7e",
                "status": 1,
                "created_at": "2024-03-31T17:14:58.223Z",
                "updated_at": "2024-03-31T17:14:58.223Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 10,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a12c0c52ee239ea5b7f",
                "status": 1,
                "created_at": "2024-03-31T17:14:58.904Z",
                "updated_at": "2024-03-31T17:14:58.904Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 10,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a13c0c52ee239ea5b80",
                "status": 1,
                "created_at": "2024-03-31T17:14:59.52Z",
                "updated_at": "2024-03-31T17:14:59.52Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 10,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a14c0c52ee239ea5b81",
                "status": 1,
                "created_at": "2024-03-31T17:15:00.229Z",
                "updated_at": "2024-03-31T17:15:00.229Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 10,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a17c0c52ee239ea5b82",
                "status": 1,
                "created_at": "2024-03-31T17:15:03.305Z",
                "updated_at": "2024-03-31T17:15:03.305Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a18c0c52ee239ea5b83",
                "status": 1,
                "created_at": "2024-03-31T17:15:04.003Z",
                "updated_at": "2024-03-31T17:15:04.003Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a18c0c52ee239ea5b84",
                "status": 1,
                "created_at": "2024-03-31T17:15:04.613Z",
                "updated_at": "2024-03-31T17:15:04.613Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a19c0c52ee239ea5b85",
                "status": 1,
                "created_at": "2024-03-31T17:15:05.279Z",
                "updated_at": "2024-03-31T17:15:05.279Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a19c0c52ee239ea5b86",
                "status": 1,
                "created_at": "2024-03-31T17:15:05.85Z",
                "updated_at": "2024-03-31T17:15:05.85Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            }
        ],
        "paging": {
            "limit": 50,
            "page": 1,
            "total": 33,
            "cursor": "",
            "next_cursor": "66099a19c0c52ee239ea5b86"
        },
        "filter": {
            "user_id": null,
            "hotel_id": null,
            "booking_id": null,
            "room_type_id": null,
            "rating": 0
        }
    }
    const func = () => {};
    return (
        <div className="customersfeedback-container">
            <h1 className="customersfeedback-header">Customers Feedback</h1>
            <div className="customersfeedback-blocks">
                {reviews.data.map((feedback) => (
                    <FeedbackBlock
                        key={feedback.id}
                        feedback={feedback.comment}
                        _onClick={func}
                        rating={feedback.rating}
                        customerName={feedback.booking_id}
                    />
                ))}
            </div>
        </div>
    );

}