import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library.item} />;
    }

    render() {
        return (
            <FlatList 
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { libraries: state.libraries }; //returning an object gives the component access to it as a prop
};

export default connect(mapStateToProps)(LibraryList);
