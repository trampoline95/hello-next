import {withRouter} from 'next/router'
const Post=withRouter(props)=>{
    return (
        <h1>{props.router.query.title}</h1>
        <p>This is dynamic content</p>
    )
})

export default Post;