import Post from '../components/body/Post';

function PostContainer(){
   
    return (
        <Post message='just one post' id='1' date = {new Date('2021-12-01')}/>
    );
}

export default PostContainer;