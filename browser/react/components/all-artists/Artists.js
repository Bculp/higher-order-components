'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  const artists = props.artists;
  
  return (
    <div>
      <h3>Artists</h3>
      <form className="form-group">
        <input className="form-control" name="post" type="text" />
      </form>
      <div className="list-group">
        {
          artists.map(artist => (
            <div className="list-group-item" key={ artist.id }>
              <Link to={`/artists/${artist.id}`}>
                { artist.name }
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}