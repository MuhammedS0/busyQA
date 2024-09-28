
import React, { useState } from "react";

const Post = (props) => {

    const {message} = props.post
    
    // useState for the likes
    const [likes, setLikes] = useState(0);

    // useState for the post comment
    const [comments, setComments] = useState([])

    // useState for the user(myself) comment
    const [userCommment, setUserComment] = useState("")

    // function that updates the like amount
    const handleLike = () => {
        setLikes(likes + 1);
    };

    // function that updates the user comment 
    const handleCommentChange = (event) => {
        setUserComment(event.target.value);
    };

    // function to handle when the user post a comment
    const handleCommentSubmit = (event) => {
        // get the date and time of the user comment
        const timeOfComment = new Date().toLocaleString();
        event.preventDefault();
        // checking to see if comment has writting, if it does, add the new comment to the comments array including the day and time after
        if (userCommment.trim()) {
            setComments([...comments, { text: userCommment, timestamp: timeOfComment}])
            // Then this function clears the input field so we can type again
            setUserComment('');
        }
    };
    
    
    
    
    
    return <>
        <div className="post">
         <p className="post-message">{message}</p>
                <p>{likes} likes</p>
                    <p class="post-message">Post Message</p>
                    <button className="like-button" onClick={handleLike}>Like</button>
                    <h4>Comments:</h4>
                    <ul>
                        {comments.map((comment, i) => (
                            <li key={i} className="comment">{comment.text} {comment.timestamp}</li>
                        ))}
                    </ul>
                    <form id="comment-form" onSubmit={handleCommentSubmit}>
                        <input
                            className="comment-input"
                            id="control-input"
                            type="text"
                            placeholder="Add a comment"
                            aria-label="Comment input"
                            required
                            value={userCommment}
                            onChange={handleCommentChange}
                        />
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
    </>
}
export default Post;