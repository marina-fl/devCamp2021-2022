import './Body.css';
function AddPost({ text }) {

    return (
        <form className="add-post">
            <input placeholder='write your message' />
            <textarea placeholder="Share your news" value={text} />
            <button type="submit">Save</button>
        </form>
    );
}

export default AddPost;