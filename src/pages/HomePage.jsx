import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <div className="app-menu">
        <Link to="/beers">
          <div>
            <img src={require('../assets/beers.png')} alt="" />
            <h2>All Beers</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Link>
      </div>
      <div className="app-menu">
        <Link to="/beers/random">
          <div>
            <img src={require('../assets/random-beer.png')} alt="" />
            <h2>Random Beer</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Link>
      </div>
      <div className="app-menu">
        <Link to="/new-beer">
          <div>
            <img src={require('../assets/new-beer.png')} alt="" />
            <h2>New Beer</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
