import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <div className="postCat">Music</div>
                    <div className="postCat">Life</div>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <div className="postDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla inventore, eligendi qui rem magni vel, 
                deleniti nemo officiis placeat, corrupti ipsa assumenda ex molestias sequi quaerat. Maxime, fuga illo!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla inventore, eligendi qui rem magni vel, 
                deleniti nemo officiis placeat, corrupti ipsa assumenda ex molestias sequi quaerat. Maxime, fuga illo!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nulla inventore, eligendi qui rem magni vel, 
                deleniti nemo officiis placeat, corrupti ipsa assumenda ex molestias sequi quaerat. Maxime, fuga illo!
            </div>
        </div>
    )
}
