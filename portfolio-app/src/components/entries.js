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
        let entries = [
          {category: 'Project', data:response.data.filter(f=>f.category === 'project')},
          {category: 'Education', data:response.data.filter(f=>f.category === 'education')},
        ];
        setEntries(entries);
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
       {entries.map((entry, i) => {
         return(
        <section key={entry.category+"_"+i} id={entry.category+"-section"}>
        <div className="row">
          <h1 className="text-center mt-3 mb-3">{entry.category}</h1>
          {entry.data.map((d, i) => {
            return (
              <div className="col-lg-4 col-md-6 p-3 text-center w3-container w3-center w3-animate-bottom" key={i}>
                <div className="card project-card">
                  <div className="card-body p-0">
                    <div className="image-container round-top" style={getimageStyle(d.image)}></div>
                    <h5 className="card-title p-3">{d.name}</h5>
                    <p className="card-text px-3">
                      <small>{d.description}</small>
                    </p>
                    <div className="card-buttons">
                      <a target="_blank" rel="noreferrer" href={d.url} className="btn btn-primary col-lg-5 mx-1 mb-1">View Project</a>
                      <a target="_blank" rel="noreferrer" href={d.url} className="btn btn-primary col-lg-5 mx-1 mb-1">View Github</a>
                    </div>
                  </div>
                </div>
              </div>
              );
              })}
              
            </div>
          </section>
       )})}
    </div>
  );
};

export default Entries;