import React from 'react';
import FilhaVelha from './FilhaVelha';
import FilhoVelho from './FilhoVelho';
import IrmaoNovo from './IrmaoNovo';

class Pai extends React.Component {
  render() {
    return (
      <section>
        <h1>I am Father</h1>
        <FilhoVelho />
        <FilhaVelha />
        <IrmaoNovo />
      </section>
    );
  }
}

export default Pai;
