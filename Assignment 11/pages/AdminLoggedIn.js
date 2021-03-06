import React from 'react';
import Link from 'next/link';
import Dashboard from '../components/dashboard';
import axios from 'axios';
export default class extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {currentUser:'' ,greeting:''}
  }
  componentWillMount(){
    axios.get('/userdata').then((response)=>{
           this.setState({currentUser:JSON.stringify(response.data)})
       })
    var date=new Date();
       if(date.getHours() <= 6){
           this.setState({greeting:'Good Night'})
       }
       else if(date.getHours() <= 12){
           this.setState({greeting:'Good Morning'})
       }
       else if(date.getHours() <= 18){
           this.setState({greeting:'Good Afternoon'})
       }
       else if(date.getHours() <= 24){
           this.setState({greeting:'Good Evening'})
       }
}
    render(){
        return(
          <main>
            <Dashboard/>
            <div id='navbar'>
    <h2 id='hello'>Welcome Admin {this.state.currentUser}</h2>
    <form method='post' action='/logout'>
        <button type='submit' className='btn btn-success'>Logout</button>
    </form>
    <h3 id='greeting'>{this.state.greeting}</h3>
    </div>
<div id="sidebar">
<div id="space"></div>
<img src='../static/dashboard-icon.png' width='50%' id='imagespace'/>
<div id='space'></div>
  <Link href='/AddAdmin'><a><button className='btn btn-info btn-block'>Add Admin</button></a></Link>
<div id='space'></div>
  <Link href='/AddWebmaster'><a><button className='btn btn-info btn-block'>Add Webmaster</button></a></Link>
</div>
            </main>
        )
    }
}
