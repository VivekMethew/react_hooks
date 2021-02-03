import React from 'react'
import ClassCounter from './components/classCounter';
import HookCounter from './components/HookCounter';
import HookMouse from './components/HookMouse';
import HooksContainer from './components/HooksContainer';
import HooksCounterFour from './components/HooksCounterFour';
import HooksCounterOne from './components/HooksCounterOne';
import HooksCounterThree from './components/HooksCounterThree';
import IntervalHooksCounter from './components/IntervalHooksCounter';

function App() {
  return (
    <div className="section">
      <div class="container">
        <div class="row mt-4">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            {/* <ClassCounter/> */}
            {/* <HookCounter/> */}
            {/* <HooksCounterThree/> */}
            {/* <HooksCounterFour /> */}
            {/* <HooksCounterOne/> */}
            {/* <HookMouse/> */}
            {/* <HooksContainer/> */}
            <IntervalHooksCounter/>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
