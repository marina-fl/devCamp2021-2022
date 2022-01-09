import Post from './Post';
import List from '@mui/material/List';

function PostsList(props) {

    return (
        <List>
            <Post message='Happy New Year' />
            <Post message='And Merry Cristmas' />
        </List>
    )
}

export default PostsList;


