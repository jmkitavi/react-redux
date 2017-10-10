import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Plural sight HomePage</h1>
        <Link to="about" className="btn btn-primary btn-lg">Learn mORE</Link>
      </div>
    );
  }
}

export default HomePage;