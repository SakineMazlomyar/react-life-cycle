import React,{CSSProperties} from 'react';
import Form from './components/forms/form';
import axiox from 'axios';
import Week from './components/weeks/week';

interface CurrentDay{
    datum: string,
    unixdatum: number,
    dag: string,
    veckodag: string,
    vecka: string
    }
/* 
https://api.dryg.net/dagar/v1/?datum=20200625
*/
interface State {
  currentDay:CurrentDay,
  currentDate:string
}
interface Props{}
export default class App extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = {
      currentDay: {
      datum: "",
      unixdatum: 0,
      dag: "",
      veckodag: "",
      vecka: ""
    },
    currentDate:""
    }
  }


  componentDidMount(){
    this.getCurrentDayInfo()
  

    
  }
  
  getCurrentDayInfo = async ()=>{
    
    let responseGetRequest = axiox.get(`https://api.dryg.net/dagar/v1/?datum=${this.state.currentDate}`);

    let respose = await responseGetRequest;
    console.log(respose)
    if(respose.status === 200){
      this.setState({currentDay:respose.data},()=>{console.log(this.state.currentDay,'here')})
    }

  }
  componentWillMount(){
    let newDate = new Date();
  
    let year = newDate.getFullYear().toString();
    let month = newDate.getMonth()+1<=9?newDate.getMonth()+1:newDate.getMonth()+1
    let monthWithZero = month<=9?"0"+month.toString():month.toString();
    let day = newDate.getDate()<=9?"0"+newDate.getDate().toString():+newDate.getDate().toString();
   
    this.setState({ currentDate:year+monthWithZero+day})
  }
  
  updateDate = (event:  React.ChangeEvent<HTMLInputElement>)=>{
    let letters = []
    for(let i = 0; i<event.target.value.length;i++){
      if(event.target.value[i] !== "-"){
        letters.push(event.target.value[i] )
      }
    }
    
    this.setState({currentDate:letters.join("")},()=>this.getCurrentDayInfo());
    
  }
  render(){
  return <div className="d-flex flex-row justify-content-center align-self-center mr-auto p-2 bg-info">
            <div>
            <h3> Datum: {this.state.currentDate}</h3>
            <Form label="Välj Ett Nytt Datum: " onChange={this.updateDate}/>

            </div>
            <Week data={this.state.currentDay}/>
        </div>
  }
}


const containerWeek:CSSProperties = {
  display:"block",
  width:"50%",
  margin:"auto",
  backgroundColor:"#e8e8e8"
}