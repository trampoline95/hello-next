import About from './about'
import Contact from './contact'
import Link from 'next/Link'
function Nav()
{
    return <div>
        
        <Link href="/About">
            <a style = {{ marginRight : 15 }}>About</a>
        </Link>
       
        <Link href="/Contact">
            <a style = {{ marginRight : 15 }}>Contact</a>
        </Link>
      
        <Link href="/">
            <a style = {{ marginRight : 15 }}>Home</a>
        </Link>
    </div>
}
export default Nav;