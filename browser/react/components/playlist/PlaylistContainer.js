import React from 'react';
import { connect } from 'react-redux';
import Playlist from './Playlist';
import FormDecorator from '../FormDecorator';

const initialState = {
	title: "",
	songs: []
}

const mapStateToProps = function(state = initialState) {
	return {

	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		addSong: function(){},
		removeSong: function() {},
		onSubmit: function() {}
	}
}

const statefulPlaylistCreator = connect(mapStateToProps, mapDispatchToProps);

const PlaylistContainer = statefulPlaylistCreator(Playlist);

export default PlaylistContainer;