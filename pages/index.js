import Layout from './layout'
import Link from 'next/link'

function Home()
{
    return <div>
        <Layout >
            <br></br>
           <Post title = "Hello next.js first"></Post> 
           <Post title = "Hello next.js second"></Post> 
        </Layout>
    </div>
}
function Post (props)
{
    return <div>
       <Link href={'/post?title=${props.title}'}><a>{props.title}</a></Link>
    </div>
}
export default Home;