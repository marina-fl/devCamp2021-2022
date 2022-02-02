import PostsList from '../../components/body/PostsList';
import getPosts from './api/crud';
import { useQuery } from 'react-query';

function PostListContainer() {
        const { isFetching, data } = useQuery('posts', () => getPosts());
        const posts = data?.data || [];
       return (
         
                <div>
                    {isFetching && <div>Loading...</div>}
                    <PostsList posts={posts} />
                </div>
            );
        };
      
  
export default PostListContainer;