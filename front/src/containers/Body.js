
import PostListContainer from './PostsList';
import AddPostContainer from './AddPost';
import ProfileContainer from './Profile';

export function BodyContent({ Content }) {
  if (Content === 'add article') {
    return (<AddPostContainer/>);
  } else if (Content === 'profile') {
    return (<ProfileContainer/>);
  } else if(Content === 'articles') {
    return (<PostListContainer/> );
  }
}


