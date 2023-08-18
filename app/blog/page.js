import getAllPost from "../lib/getAllPost"
import { Link } from 'next/link';


export default async function Blog(){
    const posts = await getAllPost();
 
    return(
        <div className="blogContent">
            <section>
                <h2>Blog posts</h2>
                <div className="mt-4">
                    {
                      posts.map((post,index) =>
                        (
                            
                            <p key={index}>
                               <Link href={`/blog/${post.id}`} > {post.id} - {post.title } </Link>
                            </p>
                                                      
                        )
                    )  
                    }
                </div>
            </section>
        </div>
    )
}