import moment from "moment";
import PropTypes from 'prop-types';

function PostsList({posts}) {
    return (
        <div style={{ display: "flow" }}>
            {posts.map(({ idpost, text, created_at, iduser }) =>
                <div key={idpost}>
                    <p>
                        {iduser}
                    </p>
                    <p>
                        {text}
                    </p>
                            
                    <p>
                        {moment(created_at).format('MMMM Do YYYY, h:mm:ss ')}
                    </p>
                        </div>   

                )}
        </div >
    )
}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        iduser: PropTypes.string.isRequired
    })).isRequired
}


export default PostsList;




