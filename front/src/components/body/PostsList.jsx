import Post from './Post';
import { Link } from "react-router-dom";
import { getPosts } from "../../data";

function PostsList() {
    let posts = getPosts();

    return (
        <div style={{ display: "flow" }}>
            {posts.map(post => (
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/articles/${post.id}`}
                    key={post.id}
                >
                    <Post title={post.title} text={post.text} date={post.date} />

                </Link>
            ))}
        </div >
    )
}

export default PostsList;




