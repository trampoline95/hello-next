import Nav from './nav'

function Layout(props)
{
    return <div>
        <Nav/>
        {props.content}
    </div>
}

export default Layout;