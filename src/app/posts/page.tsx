import { getAllPostIds, getPostData } from '@/lib/posts';
import './style.css';

async function ProjectPage() {
  const allPostIds = getAllPostIds();
  const allPostsData = await Promise.all(allPostIds.map((postId) => getPostData(postId.params.id)));

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {allPostsData.map((postData) => (
          <tr key={postData.id}>
            <td>{postData.title}</td>
            <td>
              <a href={`/posts/${postData.id}`}>Read more</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectPage