import { useState } from "react";
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, title: "Favorite Item 1", description: "Description of favorite item.", image: "https://placehold.co/100" },
    { id: 2, title: "Favorite Item 2", description: "Description of favorite item.", image: "https://placehold.co/100" },
    { id: 3, title: "Favorite Item 3", description: "Description of favorite item.", image: "https://placehold.co/100" },
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <>

<Header />
<Sidebar/>
    <main id="content" role="main" className="main">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <h1 className="page-header-title text-dark">Favorites</h1>
            </div>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="row favorite-sec align-items-center">
          {favorites.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card">
                <img className="img-fluid card-img-top" src={item.image} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-danger" onClick={() => removeFavorite(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="footer mt-4">
          <div className="row justify-content-between align-items-center">
            <div className="col text-center">
              <p className="fs-6 mb-0">&copy; 2025 Skill Tricks.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default Favorites;
