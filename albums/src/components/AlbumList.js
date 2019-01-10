import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    
    state = { albums: [] };

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((data) => this.setState({ albums: data }));
    }

    renderAlbums() {
        //for each index in the array return a new array that contains the album titles
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        ); 
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
