import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getRaces} from './redux/actions'
import RacesList from './RacesList';
function App({getRaces}) {

  useEffect(() => {
    getRaces()
  }, []);
  return (
    <div className="App">
      <RacesList/>
    </div>
  );
}

export default connect(null,{getRaces})(App);
