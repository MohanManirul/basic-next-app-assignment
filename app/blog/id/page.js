

export default async function SingleBlog({params}){
    const id = params.id ;
    const post = await getSinglePost(id);
 
    return(
        <div className="blogContent">
            <section>
                <h2>{post.title}</h2>
                <div className="card mt-4">
                    {post.body}
                </div>
            </section>
        </div>
    )
}