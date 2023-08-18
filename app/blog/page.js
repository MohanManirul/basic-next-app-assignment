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
                               {post.id} - {post.title }
                            </p>
                                                      
                        )
                    )  
                    }
                </div>
            </section>
        </div>
    )
}