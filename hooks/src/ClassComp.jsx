import {Component} from "react"
 export default class ClassComp extends Component{
   constructor(props){
    super(props)
    this.state={
       name:"Abc"
   }
    this.getName=this.getName.bind(this)
   }
   
   getName(){
       console.log("getName",this)
       
       this.setState({name:"Sanskrati"})
   }
   render(){
       return (<>
       <button onClick={this.getName}> Click</button>
       </>)
   }
}