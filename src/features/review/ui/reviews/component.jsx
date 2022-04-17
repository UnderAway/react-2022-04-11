import { Review } from "../review/component";

export const Reviews = ({reviews}) => {
    return (
        <div>
            Reviews:
            {reviews.map((review) =>
            <Review key={review.id} review={review} />
                )}
        </div>
    )
}