import React, { useState, useEffect } from "react";
import DataService from "../services/service";

const Entries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    retrieveEntries();
  }, []);

  const retrieveEntries = () => {
    DataService.getAll()
      .then(response => {
        console.log(response.data);
        setEntries(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  let getimageStyle = function(img){
    return {
      backgroundImage: 'url(' + img + ')',
      backgroundPosition: 'top center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  };

  return (
    <div>
      <section key="projects" id="project-section">
        <div className="row">
          {entries.map((entry, i) => {
            return (
              <div className="col-lg-4 col-md-6 p-3 text-center w3-container w3-center w3-animate-bottom" key={i}>
                <div className="card project-card">
                  <div className="card-body p-0">
                    <div className="image-container round-top" style={getimageStyle(entry.image)}></div>
                    <h5 className="card-title p-3">{entry.name}</h5>
                    <p className="card-text px-3">
                      <small>{entry.description}</small>
                    </p>
                    <div className="px-2 card-buttons">
                    <a target="_blank" rel="noreferrer" href={entry.url} className="btn btn-primary col-lg-5 mx-1 mb-1">View Project</a>
                    <a target="_blank" rel="noreferrer" href={entry.url} className="btn btn-primary col-lg-5 mx-1 mb-1">View Github</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Entries;