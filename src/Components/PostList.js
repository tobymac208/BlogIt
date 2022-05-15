import React, { useState, useEffect } from "react";
import api from "../Server-API-Connector/BlogServerAPI";
import { Link } from "react-router-dom";

const BlogList = () => {
  postDataJSON = [
    {
      "id": "44abd685-f066-4ef1-890c-e06d8092d2e9",
      "title": "Configuring system for gaming!",
      "body": [
        "Have you ever wanted to configure Manjaro for gaming? Well, fundamentally, it's already configured for this exact purpose. Verify that WINE, Proton, and your main GPU drivers are installed. Once that's complete, start Steam, fire up your favorite game, and see if it boots all right. You may experience some issues, and that's somewhat expected. So defer to ProtonDB (https://www.protondb.com), Lutris, and your distributions forum page for any questions! Good luck.",
        "Have you ever wanted to configure Manjaro for gaming? Well, fundamentally, it's basically already configured for this exact purpose. Verify that WINE, Proton, and your main GPU drivers are installed. After that, you're ready to play all the games you've ever wanted to, with some exceptions. The Manjaro team took Arch, added the basic necessities, changed a few things in the kernel, and mde it an easy experience for mid-to-advanced users."
      ],
      "tags": [
        "gaming",
        "technology"
      ],
      "rating": 10,
      "date": "2022-01-05"
    },
    {
      "id": "bb022c61-1014-400b-935f-041fcf877084",
      "title": "testettsttst aklsdasldjalskdjkasd",
      "body": [
        "tetsttststst"
      ],
      "tags": [
        "test",
        "test",
        "test",
        "test",
        "test"
      ],
      "rating": 10,
      "date": "2022-01-15"
    },
    {
      "id": "e864aac4-c458-4e19-a513-60f3dfe34fd1",
      "title": "Linux's Desktop Market Share Has Risen",
      "body": [
        "Note: I will be referring to GNU/Linux with distribution-related packages as \"Linux\" in this article. \n",
        "\nLinux's market share has, surprisingly, risen within the last couple of years. If NetMarketShare it to be believed (https://tinyurl.com/marketsharelinuxcovid), the rise in Linux usage has drastically risen. ESOP reported that these statistics resulted in an all-time high for Linux distribution use, a staggering 3.6% high and a \"210%\" increase from where it original resided back in January of 2020. This means that from January to June of 2020 there was a 210% increase in usage (https://www.esop.pt/en/destaque/linux-market-share-grows-210-percent-5-months). Annually, we Linux users like to tout, \"This will be the year of Linux!\" But this proclamation is definitely not as \"arrogant\" or \"delusional\" as it once was.\n",
        "\nFor more Linux related news, please stick around this blog. Thanks for reading!"
      ],
      "tags": [
        "linux",
        "market-trends",
        "os-news"
      ],
      "rating": 10,
      "date": "2022-01-17"
    },
    {
      "id": "123a6fea-7d6e-403d-8cd7-01e07e87817d",
      "title": "Technicians needed for organizations like Linus Tech Tips",
      "body": [
        "Organizations like LTT need real, certified technicians. Even technicians that require only meager pay and limited DLP knowledge. If the past is to be heeded, LTT could certainly avoid more server loss and downtime if they hired a semi-professional to help. Jake, one of their purported \"IT\" people, is very skilled. However, his automated tasking for verifying the integrity of their storage didn't catch the issue. On another note, his unsolicited audit of their storage did catch two main storage blocks that were failing. I do believe that if someone ran their own scripts/personal DLP (i.e., data loss prevention) checks then they wouldn't have been in this situation for a third time.\n",
        "\nI hope all who read this, including those who don't, can avoid these unfortunate events."
      ],
      "tags": [
        "IT",
        "opinion"
      ],
      "rating": 7,
      "date": "2022-02-02"
    }
  ];

  const [posts, setPosts] = useState(postDataJSON);
  const [ratedPosts, setRatedPosts] = useState([]);

  useEffect(() => {
    retrieveContacts();
  }, []);

  const retrieveContacts = async () => {
    const response = await api.get("/posts");

    // Verify data has been receieved.
    if (!response.data) {
      console.log("No data received.");
      return;
    }

    const printThisManyPosts = 3;

    /** Sets our state to a sorted list of posts by title. */
    setPosts(
      response.data
        .sort(sortPostsBy("date"))
        .reverse()
        .slice(0, printThisManyPosts)
    );
    setRatedPosts(
      response.data
        .sort(sortPostsBy("rating"))
        .reverse()
        .slice(0, printThisManyPosts)
    );
  };

  /** Compares two posts by a certain target. Title, body, rating, and tags.*/
  const sortPostsBy = (target) => {
    return (a, b) => {
      if (a[target] > b[target]) return 1;
      else if (a[target] < b[target]) return -1;
      else return 0;
    };
  };

  const enumeratePosts = posts.map((post) => {
    return (
      <div key={post.id} className="ui vertical stripe segment">
        <li>
          <h3 className="ui header">{post.title}</h3>
          <p>{post.body[0].slice(0, 250)}...</p>
          <p>{`${post.rating}/10`}</p>
          <Link
            to={`/detail/${post.id}`}
            className="ui large button primary"
            state={{ post: post }}
          >
            Read Post
          </Link>
        </li>
      </div>
    );
  });

  const enumerateRatedPosts = ratedPosts.map((post) => {
    return (
      <div key={post.id} className="ui vertical stripe segment">
        <li>
          <h3 className="ui header">{post.title}</h3>
          <p>{post.body[0].slice(0, 250)}...</p>
          <p>{`${post.rating}/10`}</p>
          <Link
            to={`/detail/${post.id}`}
            className="ui large button primary"
            state={{ post }}
          >
            Read Post
          </Link>
        </li>
      </div>
    );
  });

  return (
    <div className="ui">
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted header">BlogIt</h1>
          <h2>Where porfolio and blog meet.</h2>
        </div>
      </div>
      <div className="ui">
        <div className="ui inverted relaxed divided list">{enumeratePosts}</div>
      </div>
      <div className="ui horizontal header divider">
        <p>Highest Rated Posts</p>
      </div>
      <div className="ui">
        <div className="ui inverted relaxed divided list">
          {enumerateRatedPosts}
        </div>
      </div>

      <div>
        <a href="/posts" type="button" className="ui button left secondary">
          All Posts
        </a>
        <a href="/add" className="ui button right secondary">
          <i className="icon plus"></i>
        </a>
      </div>
    </div>
  );
};

export default BlogList;
