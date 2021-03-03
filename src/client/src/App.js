import React from 'react';
import Navigation from './components/Navigation/index';
import View from './components/View/index';
import GlobalStyle from './styles/globalStyle';

function App() {
    return (
        <div className="App">
            <Navigation />
            <View />
            <GlobalStyle />
        </div>
    );
}

export default App;
