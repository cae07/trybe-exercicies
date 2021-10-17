import React from 'react';
import Avo from './Avô';
import MyContext from '../Context';

class Bisavo extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      heranca: 1000000,
    }

    this.gastarHeranca = this.gastarHeranca.bind(this);
  }


  gastarHeranca() {
      this.setState((prevState) => ({
        heranca: prevState.heranca - 100,
      }));
  };


  render() {
    const { heranca } = this.state;
    const myObject = ({
      valor: heranca,
      gastar: this.gastarHeranca,
    })

    return (
      <MyContext.Provider value={ myObject } >
        <header>
          <h1>I am the GreatGramFather</h1>
          <Avo />
        </header>
      </MyContext.Provider>
    );
  }
}

export default Bisavo;
