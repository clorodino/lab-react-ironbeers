import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <div className="app-menu">
        <Link to="/beers">
          <div>
            <img src={require('../assets/beers.png')} alt="" />
            <div className="link">
              <h2>All Beers</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus possimus molestiae dolores nam fugit autem dolor aliquid deleniti. Possimus vitae iusto saepe. 
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="app-menu">
        <Link to="/beers/random">
          <div>
            <img src={require('../assets/random-beer.png')} alt="" />
            <div className="link">
              <h2>Random Beer</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet atque accusantium incidunt inventore iusto amet numquam asperiores. Earum expedita provident inventore?
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="app-menu">
        <Link to="/new-beer">
          <div>
            <img src={require('../assets/new-beer.png')} alt="" />
            <div className="link">
              <h2>New Beer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptas aut voluptatum totam laborum laboriosam fuga ipsam optio, quae libero molestias beatae aperiam quia!
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
