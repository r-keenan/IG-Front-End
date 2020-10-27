import React from 'react'

const post = {
    "id": 1,
    "description": "This is a lattern.",
    "likes": 20,
    "users_permissions_user": null,
    "published_at": "2020-10-27T17:16:53.059Z",
    "created_at": "2020-10-27T17:14:55.257Z",
    "updated_at": "2020-10-27T17:16:53.140Z",
    "image": {
        "id": 1,
        "name": "ali-karimi-0N1CNxOqwI0-unsplash.jpg",
        "alternativeText": "",
        "caption": "",
        "width": 6000,
        "height": 4000,
        "formats": {
            "thumbnail": {
                "name": "thumbnail_ali-karimi-0N1CNxOqwI0-unsplash.jpg",
                "hash": "thumbnail_ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 234,
                "height": 156,
                "size": 9.41,
                "path": null,
                "url": "/uploads/thumbnail_ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe.jpg"
            },
            "large": {
                "name": "large_ali-karimi-0N1CNxOqwI0-unsplash.jpg",
                "hash": "large_ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 1000,
                "height": 667,
                "size": 84.66,
                "path": null,
                "url": "/uploads/large_ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe.jpg"
            },
            "medium": {
                "name": "medium_ali-karimi-0N1CNxOqwI0-unsplash.jpg",
                "hash": "medium_ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 750,
                "height": 500,
                "size": 55.03,
                "path": null,
                "url": "/uploads/medium_ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe.jpg"
            },
            "small": {
                "name": "small_ali-karimi-0N1CNxOqwI0-unsplash.jpg",
                "hash": "small_ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 500,
                "height": 333,
                "size": 30,
                "path": null,
                "url": "/uploads/small_ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe.jpg"
            }
        },
        "hash": "ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 2894.37,
        "url": "/uploads/ali_karimi_0_N1_C_Nx_Oqw_I0_unsplash_f0855a2dfe.jpg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2020-10-27T17:14:00.272Z",
        "updated_at": "2020-10-27T17:14:00.305Z"
    }
}

/*Function to change URL from strapi to URL that will pull from the Strapi API*/
const API_URL = 'http://localhost:1337'
const formatImageUrl = (url) => `${API_URL}${url}`


export default () => {
    const url = post.image && post.image.url
    console.log("url", url)
    const description = post.description
    console.log("description", description)
    const likes = post.likes
    console.log("likes", likes)
    return (
        <div className="Post">
            <img src={formatImageUrl(url)}/>
            <h4>{description}</h4>
            <div>
            <span>Likes: {likes}</span>
            </div>
        </div>
    )
}


