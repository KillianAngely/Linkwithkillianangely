import React, { useState, useEffect } from "react";
import "./Projects.css"
const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/KillianAngely/repos`)
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <div className="Section_projects_container">

        <div className="Header_projects">
            <h2>Recent work and experiments</h2>
        </div>

      <div className="list_project">
         
            {repositories.map(repository => (
                <ul className="Item_project">
                  <li className="cell_project" key={repository.id}>
                      <h2 className="Name_Project">{repository.name}</h2>
                      <p className="item_date_repo">{new Date(repository.created_at).getFullYear()}</p>
                      <hr></hr>
                      <p className="item_des_repo">{repository.description}</p> 
                      <a  className="button_view" href={repository.html_url}>View on Github</a>
                  </li>                  
                </ul>           
            ))}
          
        </div>
    </div>
  );
};

export default RepositoryList;

