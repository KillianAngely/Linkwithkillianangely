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
          <ul >
            {repositories.map(repository => (
              <li className="Item_project" key={repository.id}>

                <h2><a className="Name_Project" href={repository.html_url}>{repository.name}</a></h2>

          <ul className="list_project_info">
            {new Date(repository.created_at).toLocaleDateString()}
            <p>{repository.description}</p>
          </ul>
                {/* {" created on "} */}
                
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default RepositoryList;

