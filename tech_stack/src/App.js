import React from 'react';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <ScrollView style={{ flex: 1 }}>
                <Header headerText="Tech Stack" />  
                <LibraryList />
            </ScrollView>
        </Provider>
    );
};

export default App;

