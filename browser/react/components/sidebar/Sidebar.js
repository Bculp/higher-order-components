'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function () {
  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section>
        <Link to="/albums" activeClassName="menu-item active" className="menu-item">ALBUMS</Link>
      </section>
      <section>
        <Link to="/artists" activeClassName="menu-item active" className="menu-item">ARTISTS</Link>
      </section>
      <section>
        <h3>PLAYLISTS</h3>
          <ul className = "list-unstyled">
            <li>
              <Link to="/playlists" className="btn btn-outline-secondary">+ PLAYLIST</Link>
            </li>
          </ul>
      </section>
    </sidebar>
  );
}