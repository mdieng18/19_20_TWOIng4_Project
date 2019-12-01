import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Container.css'

class Admin extends Component {
    render(){
        return(
            <div className= 'main'>
                <h1>Ajouter un utilisateur</h1>
                <br/>
                <form>
                    <label> Identifiant : 
                        <input
                        type='text'
                        ></input>

                    </label>
                    <br/><br/>
                    <label> Pays : 
                        <input
                        type='text'
                        ></input>

                    </label>
                    <br/><br/>
                    <label> Nombre de personnes : 
                        <input
                        type='text'
                        ></input>

                    </label>
                    <br/><br/>
                    <label> Taille de la maison : 
                        <input
                        type='text'
                        ></input>

                    </label>
                    <br/><br/>
                </form>
                <input 
              type="submit" 
              value="Submit" />

            </div>
            

        );
    }
}
export default Admin