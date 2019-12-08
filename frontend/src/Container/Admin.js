import React,{Component} from 'react';
import axios from 'axios'
import './Container.css'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_chart : [],
            taille : 0
        }
       
      }
    
    componentDidMount(){
        
        this.setState({data_chart: []});
        axios.get("http://localhost:3001/users")
        .then(({data})=> {
            
            for(var i = 0; i<data.length;i++){
                this.setState(prevState => ({
                taille:data.length,
                data_chart: [...prevState.data_chart, {id:data[i]._id, location:data[i].location,
                personsInHouse:data[i].personsInHouse,houseSize:data[i].houseSize}]
            }))
        }}   
        )
        
    }
    send = async (e) => {{
        
          axios.put(
          'http://localhost:3001/user',
          
          {
            location: this.state.input1,
            personsInHouse:this.state.input2,
            houseSize:this.state.input3,
        })
        .then(function(response){
          console.log('user saved succesfully')
          
        });
        }
    }
    
    render(){
        
        return(
            <div className= 'adminBloc'>
                <h1>Ajouter un utilisateur</h1>
                <br/>
                <form>
                    <label> Location : 
                    <input
                        type="text"
                        defaultValue=""
                        onChange={e => this.setState({input1: e.target.value})} 
                        />

                    </label>
                    <br/><br/>
                    <label> Nombres de Personnes :
                    <input
                        type="text"
                        defaultValue=""
                        onChange={e => this.setState({input2: e.target.value})} 
                        />

                    </label>
                    <br/><br/>
                    <label> Taille de la maison : 
                    <input
                        type="text"
                        defaultValue=""
                        onChange={e => this.setState({input3: e.target.value})} 
                        />

                    </label>
                    <br/><br/>
                    
                </form>
                <input 
              type="submit" 
              value="Submit" 
              onClick={this.send}/>
              <br/><br/>
              <h3>Liste utilisateur</h3>

        {this.state.data_chart.map(data_chart => <div>{data_chart.id}:{data_chart.location}:{data_chart.houseSize}:{data_chart.personsInHouse}</div>)}
            
                
              
                        


            </div>
            

        );
    }
}
export default Admin