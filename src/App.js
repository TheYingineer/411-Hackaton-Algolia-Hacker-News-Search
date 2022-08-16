import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import List from "./Components/List";
// import Moment from 'react-moment';

function App() {
  const [news, setNews] = useState([]);
  const [inputText, setInputText] = useState("");

  // const [filtered, setfiltered] = useState([]);

  // Ying's in progress continue of the searchBar in JS format

  // const authorCardTemplate = document.querySelector("[data-author-template]");
  // fetch("http://hn.algolia.com/api/v1/search?tags=front_page").then(res => res.json()).then(data => {
  //   data.forEach(author => {
  //     const card = authorCardTemplate.textContent.cloneNode(true).children[0]
  //     const author = card.querySelector("[Author]")
  //     const title = card.querySelector("[data-Title]")
  //     const url = card.querySelector("[data-Url]")

  //     console.log(author)
  //   })

  //End of Ying's progress


  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page") //api address
      .then((res) => res.json())
      .then((data) => {
        setNews(data.hits);
        console.log(data.hits);
      });
  }, []);

  const handleInput = (e) => {
    let lower = e.target.value.toLowerCase();
    setInputText(lower);
  };

  return (
    <div className={`App`}>
      <div className="mainContainer">
        <header class="headerDesktopView">
          <img class="Hpic" src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" alt="Hpic" />
          <div class="SearchHackerNews">
            <span>Search </span>
            <br />
            <span>Hacker News </span>
          </div>
          {/* <h2>Search Hacker News</h2> */}

          {/* Kailand's SearchBar */}
          {/* <SearchBar
            handleChange={handleInput}
            placeholder="Search stories by title, url, or author"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg> */}

          {/* End of Kaitland's SearchBar */}


          {/* Ying's Search Bar */}
          <div className="searchWrapper">
            <input type="Search" id="search" placeholder="Search stories by title, URL, or author" />
          </div>

          <div className="user-cards"></div>

          <template data-author-template>
            <div className="card">
              <div className="Author" data-Author>Author</div>
            </div>
          </template>

          <template data-Title-template>
            <div className="card">
              <div className="Title" data-Title>Title</div>
            </div>
          </template>

          <template data-Url-template>
            <div className="card">
              <div className="Url" data-Url>Url</div>
            </div>
          </template>

          {/* End of Ying's Search Bar ---NOT DONE YET!! NEED TO COME BACK AND FINISH IT */}


          {/* <h2>Settings</h2> */}

          {/* Setting Tab */}
          <div class="settingsDesktop">
            <div class="settingGear">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <div class="SettinginScribble">Settings</div>
          </div>

          <div class="settingsMobile">
            <div class="settingGear">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
          </div>
          {/* End of Setting Tab */}
        </header>
        {/* End of Desktop View */}

        {/* Mobile view */}
        <header class="headerMobileView">
          <img class="Hpic" src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" alt="Hpic" />

          {/* Ying's Search Bar */}
          <div className="searchWrapper">
            <input type="Search" id="search" placeholder="Search stories by title, URL, or author" width={200} />
          </div>

          <div className="user-cards"></div>

          <template data-author-template>
            <div className="card">
              <div className="Author" data-Author>Author</div>
            </div>
          </template>

          <template data-Title-template>
            <div className="card">
              <div className="Title" data-Title>Title</div>
            </div>
          </template>

          <template data-Url-template>
            <div className="card">
              <div className="Url" data-Url>Url</div>
            </div>
          </template>

          {/* End of Ying's Search Bar ---NOT DONE YET!! NEED TO COME BACK AND FINISH IT */}


          {/* <h2>Settings</h2> */}

          {/* Setting Tab */}
          <div class="settings">
            <div class="settingGear">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
          </div>
          {/* End of Setting Tab */}
        </header>


        {/* Ying's dropdown menu --STILL IN PROGRESS*/}
        <div class="dropDownMenu">
          <p>Search </p>

          <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Stories ^</button>
            <div id="myDropdown" class="dropdown-content">
              <a href="https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=&sort=byPopularity&type=all">All</a>
              <a href="https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=&sort=byPopularity&type=story">Stories</a>
              <a href="https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=&sort=byPopularity&type=comment">Comments</a>
            </div>
          </div>

          <p>by </p>
          <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">

              <a href="https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=&sort=byPopularity&type=all">Polularity</a>

              <a href="https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=&sort=byDate&type=comment">Date</a>

            </div>
          </div>

          <p>for</p>
          <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">All time</button>
            <div id="myDropdown" class="dropdown-content">

              <a href="https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=&sort=byPopularity&type=all">All time</a>

              <a href="https://hn.algolia.com/?dateRange=last24h&page=0&prefix=false&query=&sort=byPopularity&type=all">Last 24hr</a>

              <a href="https://hn.algolia.com/?dateRange=pastWeek&page=0&prefix=false&query=&sort=byPopularity&type=all">Past Week</a>

              <a href="https://hn.algolia.com/?dateRange=pastMonth&page=0&prefix=false&query=&sort=byPopularity&type=all">Past Month</a>

              <a href="https://hn.algolia.com/?dateRange=pastYear&page=0&prefix=false&query=&sort=byPopularity&type=all">Past Year</a>

              <a href="">Custom Range</a>

            </div>
          </div>
        </div>
        {/* End of Ying's Dropdown Menu ****NEED TO FIX IT */}

        <List class="ListLi" news={news} inputText={inputText} />

        {/* Ying's page's search */}
        <ul class="pageTab">

          <li class="pageItem">
            <form>
              <button type="sumbit" formaction="https://hn.algolia.com/?dateRange=all&page=0&prefix=true&query=&sort=byPopularity&type=story">1</button>
            </form>
          </li>

          <li class="pageItem">
            <form>
              <button type="submit" formaction="https://hn.algolia.com/?dateRange=all&page=1&prefix=true&query=&sort=byPopularity&type=story">2</button>
            </form>
          </li>

          <li class="pageItem">
            <form>
              <button type="submit" formaction="https://hn.algolia.com/?dateRange=all&page=2&prefix=true&query=&sort=byPopularity&type=story" type="button">3</button>
            </form>
          </li>

          <li class="pageItem">
            <form>
              <button type="submit" formaction="https://hn.algolia.com/?dateRange=all&page=3&prefix=true&query=&sort=byPopularity&type=story" type="button">4</button>
            </form>
          </li>

          <li class="pageItem">
            <form>
              <button type="submit" formaction="https://hn.algolia.com/?dateRange=all&page=4&prefix=true&query=&sort=byPopularity&type=story'" type="button">5</button>
            </form>
          </li>

          <li class="pageItem">
            <form>
              <button type="submit" formaction="https://hn.algolia.com/?dateRange=all&page=5&prefix=true&query=&sort=byPopularity&type=story'" type="button">6</button>
            </form>
          </li>

          <li class="pageItem">
            <form>
              <button onclick="https://hn.algolia.com/?dateRange=all&page=6&prefix=true&query=&sort=byPopularity&type=story">>></button>
            </form>
          </li>
        </ul>

        {/* End of Page search */}


      </div>
      <footer>

        <ul class="footer_ul">
          <li><a href="https://hn.algolia.com/about">About</a>
          </li>
          <li>•</li>

          <li>
            <a href="https://hn.algolia.com/settings">Setting</a>
          </li>
          <li>•</li>
          <li>
            <a href="https://hn.algolia.com/help">Help</a>
          </li>
          <li>•</li>
          <li>
            <a href="https://hn.algolia.com/api">API Documentation</a>
          </li>
          <li>•</li>
          <li>
            <a href="https://news.ycombinator.com/">Hacker News</a>
          </li>
          <li>•</li>
          <li>
            <a href="https://github.com/algolia/hn-search">Fork/Contribute</a>
          </li>
          <li>•</li>
          <li>
            <a href="https://hn.algolia.com/cool_apps">Cool Apps</a>
          </li>
        </ul>
      </footer>

    </div>

  );
}

export default App;
