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
<<<<<<< HEAD
        iduser: PropTypes.string.isRequired
=======
        updated_at: PropTypes.string,
        user_id: PropTypes.string.isRequired
>>>>>>> d6e8b07... fronttask 5 first try
    })).isRequired
}


export default PostsList;




