export default async function getSinglePost(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    if(!res.ok){
        throw new Error('Error fetching post');
    }
    return res.json();
}