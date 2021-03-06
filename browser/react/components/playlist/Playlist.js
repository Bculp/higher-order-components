import React from 'react';

export default function Playlist(props) {

	const submitPlaylist = function(evt) {
		evt.preventDefault();
		console.log("name: ", evt.value)
	}

	return (
		<div className="well">
		  <form className="form-horizontal" onSubmit={(evt) => {submitPlaylist(evt)}}>
		    <fieldset>
		      <legend>New Playlist</legend>
		      <div className="form-group">
		        <label className="col-xs-2 control-label">Name</label>
		        <div className="col-xs-10">
		          <input className="form-control" type="text"/>
		        </div>
		      </div>
		      <div className="form-group">
		        <div className="col-xs-10 col-xs-offset-2">
		          <button type="submit" className="btn btn-success">Create Playlist</button>
		        </div>
		      </div>
		    </fieldset>
		  </form>
		</div>
	)
}