export default async function getAllPost(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=5`);
    
    if(!res.ok){
        throw new Error('Error fetching posts');
    }

    return await res.json();
}