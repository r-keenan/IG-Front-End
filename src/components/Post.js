import React from 'react'

const post = {
    "id": 1,
    "description": "This is a lantern.",
    "likes": 20,
    "users_permissions_user": null,
    "published_at": "2020-10-27T17:16:53.059Z",
    "created_at": "2020-10-27T17:14:55.257Z",
    "updated_at": "2020-10-27T17:16:53.140Z",
    "image": {
        },
        "url": "/uploads/ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe.jpg",
}

/*Function to change URL from strapi to URL that will pull from the Strapi API*/
const API_URL = 'http://localhost:1337'
const formatImageUrl = (url) => `${API_URL}${url}`


export default ({description, likes, url}) => {
    return (
        <div className="Post">
            <img className="Post__Image" src={formatImageUrl(url)}/>
            <h4>{description}</h4>
            <div>
            <span>Likes: {likes}</span>
            </div>
        </div>
    )
}


