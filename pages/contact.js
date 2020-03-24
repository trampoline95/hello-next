import { Component } from 'react'
import Layout from './layout'
const data = <h1>Contact component</h1>
export default class Contact extends Component{
    render()
    {
        return(
            <div>
                <Layout content = {data}>
                    
                </Layout>
            </div>
        )
    }
}