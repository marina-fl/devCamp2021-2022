function AddPost({ props }) {

    return (
        <form>
            <input value={props.title} />
            <textarea placeholder="Share your news" value={props.text} />
            <button type="submit">Save</button>
        </form>
    );
}

export default AddPost;