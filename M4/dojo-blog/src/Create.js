import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPanding, setPending] =useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body, author};

        setPending(true);
        setTimeout(() => {
            
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {'Content-Type': 'aplication/json'},
                body: JSON.stringify(blog)
            })
            .then(()=>{
                console.log('new blog added');
                setPending(false);
            })
        }, 1000);
    }

    return (
        <div className="create">
            <h2>Create new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                  type="text" 
                  required 
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                  required
                  value = {body}
                  onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                  value={author}
                  onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPanding && <button>Add blog</button>}
                {isPanding && <button>Adding...</button>}
            </form>
        </div>
    );
}
 
export default Create;