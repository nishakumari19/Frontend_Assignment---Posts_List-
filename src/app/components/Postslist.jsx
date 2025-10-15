import React, {useState, useEffect} from 'react';
import PostItems from './PostItems';



export default function Postslist(){
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if(!res.ok) throw new Error('Failed to fetch posts');
            return res.json();
            })
        .then(data => setPosts(data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    return (
        <div className='posts'>
            {posts.map(post => (
                <PostItems key={post.id} post={post} />
            ))}
        </div>
    )

}


 