import React ,{Component} from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'
import Scroll from './Scroll'

class App extends Component {
     
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange= (event) =>{
        this.setState({searchfield: event.target.value})
    }



    render(){   
        const filterRobots=this.state.robots.filter(robots=>{
           return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return !robots.length ?
        <h1>LODAING</h1> :
        (
        <div className='tc'>
           <h1 className='f1'>Robo friends</h1>
           <SearchBox searchChange={this.onSearchChange}></SearchBox>
           <Scroll><CardList robots={filterRobots}></CardList></Scroll>
        </div>

   );}
}


export default App;

