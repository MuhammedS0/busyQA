
import Post from "./Post"
import React, { useEffect } from "react";

const Feed = () => {

    // This function Logs a message to the console when the Feed component mounts
    useEffect(() => {
    console.log(`Feed component is mounted`);}, []);

    // Example of posts to diplay on the post component feed
    const posts = [{message: "React is the best front end library"},
                   {message: "Blockchain technology will change the financial system"},
                   {message: "I like JavaScript!!!!"}
    ]

    // Rendering the Feed
    return <>
    <div className="feed">
                <h1 className="app">Social Feed</h1>
                {posts.map((post, i) => (<Post key={i} post={post.message}/>))}
                
            </div>
            </>
        };
    export default Feed;