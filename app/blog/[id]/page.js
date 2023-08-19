import Comments from "@/app/components/comments";
import getSinglePostComments from "@/app/lib/getPostComments";
import getSinglePost from "@/app/lib/getSinglePost";
import { Suspense } from "react";

export default async function SingleBlog({ params }) {
  const id = params.id;
  const post = await getSinglePost(id);
  const commentsPromise = await getSinglePostComments(id);

  //request in parallel
  // const [post,comments] = await Promise.all([postPromise,commentsPromise]);

  return (
    <div className="blogContent">
      <section>
        <h2>{post.title}</h2>
        <div className="card mt-4">{post.body}</div>
        <Suspense fallback={<h2>Loading comments...</h2>}>
          <Comments commentsPromise ={commentsPromise}/>
        </Suspense>
      </section>
    </div>
  );
}
