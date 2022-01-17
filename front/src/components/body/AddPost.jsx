import './Body.css';

function AddPost() {

    return (
        <form className="add-post">
            <input placeholder='write your message' />
            <button type="submit">Save</button>
        </form>
    );
}

export default AddPost;
