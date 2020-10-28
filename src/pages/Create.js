import React, {useState} from 'react';

export default () => {

    const [description, setDescription] = useState('')

    const handleSubmit = async (event) => {
        /*This prevents it from reloading the same page when submiting*/
        event.preventDefault();

        const response = await fetch('http://localhost:1337/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description
            })
        })
        const data = await response.json()

        console.log("data", data)
    }

    return(
        <div className='Create'>
        <h2>Create</h2>

        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button>Submit</button>
        </form>
    </div>
    )
}