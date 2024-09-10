
//  For each post, let's make a Post component that will display the title and an excerpt of the text of the article. Make a Post.js in the components subdirectory.
// Components that do not connect to Redux are still important and useful for smaller, reusable areas, such as this Post component.
 export const Post = ({ post }) => {
     return (
     <article className="post-excerpt">
         <h2>{ post.title }</h2>
         <p>{ post.body.substring(0, 100) }</p>
     </article>
    )
}