import React from 'react';

import PaintingList from './components/PaintingList'
import Logo from './components/Logo'
import Panel from './components/Panel'

import paintings from './painting.json';


const App = () =>{
    return (
        <div>
            <Panel title="Последние новости">
                <p>Привет</p>
            </Panel>
            <Logo text="Main component"/>
            <PaintingList paintings={paintings}/>
        </div>
    );
};

export default App;