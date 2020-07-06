import React from 'react';

interface Props{
  label:string,
  onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
interface State{
  value:string
}
export default class Form extends React.Component<Props,State>{
    constructor(props:Props) {
        super(props);
        this.state = {
          value:''
        };
    
     
      }
    


  handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();
    
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.label}
          <input type="date"  onChange={this.props.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }


}