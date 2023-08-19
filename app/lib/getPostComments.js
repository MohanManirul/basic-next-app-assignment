export default async function getSinglePostComments(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    
    if(!res.ok){
        throw new Error('Error fetching post');
    }
    return res.json();
}