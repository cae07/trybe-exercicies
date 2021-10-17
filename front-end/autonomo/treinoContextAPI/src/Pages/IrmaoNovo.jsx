import React from 'react';
import MyContext from '../Context';

class IrmaoNovo extends React.Component {
  render() {
    const valor = this.context;
    console.log(valor);
    return (
      <div>
        
      </div>
    );
  }
}

IrmaoNovo.ContextType = MyContext;

export default IrmaoNovo;
