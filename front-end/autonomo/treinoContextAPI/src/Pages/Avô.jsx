import React from 'react';
import Mae from './Mãe';
import Pai from './Pai';

class Avo extends React.Component {
  render() {
    return (
      <nav>
        <h1>I am the GramFather</h1>
        <Pai />
        <Mae />
      </nav>
    );
  }
}

export default Avo;
