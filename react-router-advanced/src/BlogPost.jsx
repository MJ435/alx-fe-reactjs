import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return <div>Displaying post with ID: {postId}</div>;
}

export default BlogPost;
