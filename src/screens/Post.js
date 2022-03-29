import { useParams } from "react-router-dom";


const Post = (props) => {
  console.log(props)
  
  const { post_id } = useParams(); // takes Id from url
  const postNumber = parseInt(post_id) - 1;// turning string to integer and subtract 1 to count from 0
  const post = props[postNumber];
// using cs id extracted above, putting it into index to select the correct object 
  return (
    <div className="post">
      <div className="hero">
    <img src={post.image}  alt="post banner"/>
      </div>

      <div className="content">
        <h3>{post.title }</h3>
        <p>{post.body }</p>
      </div>

    </div>
  )
}

export default Post