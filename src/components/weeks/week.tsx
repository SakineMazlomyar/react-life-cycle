import React,{CSSProperties} from 'react';

interface Props{
  data:{
    datum: string,
    unixdatum: number,
    dag: string,
    veckodag: string,
    vecka: string
    }
}
interface State{
  
}
export default class Week extends React.Component<Props,State>{
    constructor(props:Props) {
        super(props);
        this.state = {
          
        };
    
     
      }
   
    displayDate = ()=>{
        
           return  Object.entries(this.props.data).map(([key,value])=>{
            return <li key={Math.random()*2000}>{key.charAt(0).toLocaleUpperCase()+key.substring(1)}: {value}</li>
            })
        
            
        
        
    }

  render() {
    
    return (
      <ul style={weekInfo}>
          {this.displayDate()}
      </ul>
    );
  }


}
const weekInfo:CSSProperties = {

  listStyle:"none",
}