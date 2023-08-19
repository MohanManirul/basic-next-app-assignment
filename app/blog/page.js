import Link from "next/link";
import getAllPost from "../lib/getAllPost"


export default async function Blog(){
    const posts = await getAllPost();
    console.log(posts);
    return(
        <div className="blogContent">
            <section>
                <h2>Blog posts</h2>
                <div className="mt-4">
                    {
                      posts.map((post,index) =>
                        ( 
                           <Link key={index} href={`/blog/${post.id}`}>
                                                        
                              <p>{post.id} - {post.title }</p>  
                               
                           </Link>
                            
                                                      
                        )
                    )  
                    }
                </div>
            </section>
        </div>
    )
}