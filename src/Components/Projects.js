import React, { useEffect, useState } from "react";
import api from "../Server-API-Connector/BlogServerAPI";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectDataJSON = [
    {
      "id": "b27d7f8f-966d-435d-ad84-c04ef329bd2f",
      "title": "Configuring LAMP server",
      "description": "Well, this is how I did it. I know it seems crazy. But I sure did it!",
      "body": [
        "Note: I will be referring to GNU/Linux with distribution-related packages as \"Linux\" in this article. \n",
        "\nLinux's market share has, surprisingly, risen within the last couple of years. If NetMarketShare it to be believed (https://tinyurl.com/marketsharelinuxcovid), the rise in Linux usage has drastically risen. ESOP reported that these statistics resulted in an all-time high for Linux distribution use, a staggering 3.6% high and a \"210%\" increase from where it original resided back in January of 2020. This means that from January to June of 2020 there was a 210% increase in usage (https://www.esop.pt/en/destaque/linux-market-share-grows-210-percent-5-months). Annually, we Linux users like to tout, \"This will be the year of Linux!\" But this proclamation is definitely not as \"arrogant\" or \"delusional\" as it once was.\n",
        "\nFor more Linux related news, please stick around this blog. Thanks for reading!"
      ],
      "thumbnail": "https://secureanycloud.com/wp-content/uploads/sites/33/2016/05/lampserver1.png"
    },
    {
      "id": "5142e653-774d-4218-bdf9-861eb850236c",
      "title": "Configuring LAMP server",
      "description": "Well, this is how I did it. I know it seems crazy. But I sure did it!",
      "body": [
        "Note: I will be referring to GNU/Linux with distribution-related packages as \"Linux\" in this article. \n",
        "\nLinux's market share has, surprisingly, risen within the last couple of years. If NetMarketShare it to be believed (https://tinyurl.com/marketsharelinuxcovid), the rise in Linux usage has drastically risen. ESOP reported that these statistics resulted in an all-time high for Linux distribution use, a staggering 3.6% high and a \"210%\" increase from where it original resided back in January of 2020. This means that from January to June of 2020 there was a 210% increase in usage (https://www.esop.pt/en/destaque/linux-market-share-grows-210-percent-5-months). Annually, we Linux users like to tout, \"This will be the year of Linux!\" But this proclamation is definitely not as \"arrogant\" or \"delusional\" as it once was.\n",
        "\nFor more Linux related news, please stick around this blog. Thanks for reading!"
      ],
      "thumbnail": "https://secureanycloud.com/wp-content/uploads/sites/33/2016/05/lampserver1.png"
    },
    {
      "id": "ef3c2dcd-fa9d-4b63-b5ed-516f6478e682",
      "title": "Configuring LAMP server",
      "description": "Well, this is how I did it. I know it seems crazy. But I sure did it!",
      "body": [
        "Note: I will be referring to GNU/Linux with distribution-related packages as \"Linux\" in this article. \n",
        "\nLinux's market share has, surprisingly, risen within the last couple of years. If NetMarketShare it to be believed (https://tinyurl.com/marketsharelinuxcovid), the rise in Linux usage has drastically risen. ESOP reported that these statistics resulted in an all-time high for Linux distribution use, a staggering 3.6% high and a \"210%\" increase from where it original resided back in January of 2020. This means that from January to June of 2020 there was a 210% increase in usage (https://www.esop.pt/en/destaque/linux-market-share-grows-210-percent-5-months). Annually, we Linux users like to tout, \"This will be the year of Linux!\" But this proclamation is definitely not as \"arrogant\" or \"delusional\" as it once was.\n",
        "\nFor more Linux related news, please stick around this blog. Thanks for reading!"
      ],
      "thumbnail": "https://secureanycloud.com/wp-content/uploads/sites/33/2016/05/lampserver1.png"
    },
    {
      "id": "21ab380a-d819-43d8-bcd4-47ac3443f946",
      "title": "Configuring LAMP server",
      "description": "Well, this is how I did it. I know it seems crazy. But I sure did it!",
      "body": [
        "Note: I will be referring to GNU/Linux with distribution-related packages as \"Linux\" in this article. \n",
        "\nLinux's market share has, surprisingly, risen within the last couple of years. If NetMarketShare it to be believed (https://tinyurl.com/marketsharelinuxcovid), the rise in Linux usage has drastically risen. ESOP reported that these statistics resulted in an all-time high for Linux distribution use, a staggering 3.6% high and a \"210%\" increase from where it original resided back in January of 2020. This means that from January to June of 2020 there was a 210% increase in usage (https://www.esop.pt/en/destaque/linux-market-share-grows-210-percent-5-months). Annually, we Linux users like to tout, \"This will be the year of Linux!\" But this proclamation is definitely not as \"arrogant\" or \"delusional\" as it once was.\n",
        "\nFor more Linux related news, please stick around this blog. Thanks for reading!"
      ],
      "thumbnail": "https://secureanycloud.com/wp-content/uploads/sites/33/2016/05/lampserver1.png"
    },
    {
      "id": "19faa5f7-9c45-42fc-966b-55aa417e335a",
      "title": "Configuring LAMP server",
      "description": "Well, this is how I did it. I know it seems crazy. But I sure did it!",
      "body": [
        "Note: I will be referring to GNU/Linux with distribution-related packages as \"Linux\" in this article. \n",
        "\nLinux's market share has, surprisingly, risen within the last couple of years. If NetMarketShare it to be believed (https://tinyurl.com/marketsharelinuxcovid), the rise in Linux usage has drastically risen. ESOP reported that these statistics resulted in an all-time high for Linux distribution use, a staggering 3.6% high and a \"210%\" increase from where it original resided back in January of 2020. This means that from January to June of 2020 there was a 210% increase in usage (https://www.esop.pt/en/destaque/linux-market-share-grows-210-percent-5-months). Annually, we Linux users like to tout, \"This will be the year of Linux!\" But this proclamation is definitely not as \"arrogant\" or \"delusional\" as it once was.\n",
        "\nFor more Linux related news, please stick around this blog. Thanks for reading!"
      ],
      "thumbnail": "https://secureanycloud.com/wp-content/uploads/sites/33/2016/05/lampserver1.png"
    }
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    retrieveProjects();
  }, []);

  const retrieveProjects = () => {
    api
      .get("/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
  };

  const enumerateProjects = projectDataJSON.map((project) => {
    return (
      <div key={project.id} className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <h3 className="ui header">{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="six wide right floated column">
              <img
                src={project.thumbnail}
                className="ui large bordered round image"
                alt="project image"
              />
            </div>
          </div>
          <div className="row">
            <div className="center aligned column">
              {/* TODO: Add project id functionality for this. */}
              <Link
                to={`/project/${project.id}`}
                className="ui large button green"
                state={{ project }}
              >
                Read Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ui">{enumerateProjects}</div>;
};

export default Projects;
