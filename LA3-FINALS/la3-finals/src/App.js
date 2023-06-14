import React, {useState, useEffect } from 'react';
import './index.css';
import { profileHover } from './profile-hover.js';
import { Dropdown } from './dropdown.js';

function App() {
  const [theme, setTheme] = useState(null);
  // FOR DARK MODE
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // HANDLES THEME SWITCHING
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // FOR SONG HOVER AND PROFILE DROPDOWN MENU
  useEffect(() => {
    profileHover(); 
    Dropdown();

    
  }, []);

  return (
    <div className="flex flex-col p-0 m-0 font-alata h-auto bg-custom-color">
      <div className="flex bg-custom-color">
        {/* <!-- SIDEBAR --> */}
        <div className="flex">
          {sidebar()}
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-col flex-grow text-white h-auto bg-custom-color dark:bg-light-cclr">
          {/* <!-- TOP NAVBAR --> */}
          {/* BUTTON RESPONSIBLE FOR DARK MODE  */}
          <div class="flex justify-end mr-15 pt-2">
            <button class="bg-custom-color-song-button p-4 rounded-3xl" onClick={handleThemeSwitch}><i class="fa-solid fa-lightbulb"></i></button>
          </div>
          {topNavBar()}

          {/* main content */}
          {mainContent()}
        </div> 
      </div>
      
      {/* PLAYBAR  */}
      {playbar()}
    </div>
  );
}

export default App;

function sidebar() {
  return (
    <div
      className="dark:bg-light-cclr dark:text-black w-60 hidden lg:block sticky top-0 h-screen bg-opacity-0 from-custom-color-playlist-card-non-pinned-text to-custom-color text-white light:bg-light-cclr">
      {/* <!-- LOGO --> */}
      <a href="/#">
        <img src="./assets/wavesLogo.png" className="mx-auto my-6 w-15 h-12" alt="Logo" />
      </a>

      {/* <!-- Navigation --> */}
      <nav className="flex flex-row justify-center flex-wrap font-normal text-lg pt-7">
        <ul className="flex-grow">
          <li>
            <a href="/dist/home.html"
              className="dark:text-black flex justify-center text-white space-x-5 mt-6 mb-3 py-1 px-10 rounded-full ml-10 mr-10  bg-custom-color-sidebar-brown  hover:bg-custom-color-navbar-icons-hover focus:bg-black focus:outline-none active:bg-custom-color-sidebar-brown hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/dist/search-page.html"
              className="dark:text-black flex text-white justify-center space-x-5 mt-6 mb-3 py-1 px-10 hover:text-custom-color-sidebar-brown-hover">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="/dist/queue.html"
              className="dark:text-black flex justify-center text-white space-x-5 mt-6 mb-3 py-1 px-10 hover:text-custom-color-sidebar-brown-hover">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
              </svg>
              <span>Queue</span>
            </a>
          </li>
          <li>
            <a href="/dist/library.html"
              className="dark:text-black flex text-white justify-center space-x-5 mt-6 mb-3 py-1 px-10 hover:text-custom-color-sidebar-brown-hover">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span>Library</span>
            </a>
          </li>
        </ul>


        {/* <!-- DIVIDER --> */}
        <div className="dark:text-black mx-auto w-3/4 border-t-1 bg-gray-400 border-gray-400 mt-5 mb-6"></div>
        <div className="dark:text-black absolute ml-3 top-4 left-56 h-[85%] border-l bg-gray-400 w-[1px] border-gray-400"></div>

        <ul className="dark:text-black text-white">
          <li><a href="/dist/addplaylist.html"
              className="dark:text-black flex justify-center text-white space-x-4 pl-5 mt-6 mb-3 rounded-full py-1 hover:text-custom-color-sidebar-brown-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clip-rule="evenodd" />
              </svg>
              <span>Create Playlist</span>
            </a>
          </li>
          <li>
            <a href="/dist/likedsongs.html"
              className="dark:text-black flex justify-center text-white space-x-5 mt-6 mb-3 py-1 hover:text-custom-color-sidebar-brown-hover">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}


function topNavBar() {
  return (
    // TOP NAVBAR
    <div className="dark:bg-light-cclr dark:text-black mb-5 justify-start sticky top-0 flex flex-row items-center py-1 md:mb-0 bg-custom-color bg-opacity-95 md:justify-end md:pr-16 md:pb-3 md:pt-3 z-50">
      {/* <!-- LOGO --> */}
      <div className="pl-10 w-1/2 justify-start mt-2">
        <a href="/#" className="block justify-start lg:hidden">
          <img src="/assets/wavesLogo.png" className="w-16 h-12" alt="Logo"></img>
        </a>
      </div>

      {/* <!-- LEFT ITEMS  --> */}
      <div className=" w-full justify-end flex flex-row space-x-5 items-center pr-5 md:pr-0 my-2">
        <a href="/#">
          <svg className="text-white fill-current w-6 h-7 hover:text-custom-color-navbar-icons-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
            </svg>
        </a>
        <div className="flex md:hidden w-12 h-12 bg-custom-color-sidebar-brown justify-center items-center rounded-full">
          <a href="/#" className="block md:hidden">
            <img className="w-10 h-10 rounded-full" src="/assets/addplaylist-assets/profilesample.jpg" alt="user"></img>
          </a>
        </div>
            
        {/* <!--Profile button--> */}
            
        <div id="dropdown-button" className="hidden md:flex -mb-1.5 dropdown"> 
          <button  className="bg-custom-color-song-button hover:bg-custom-color-navbar-icons-hover text-white text-base rounded-full px-4 py-0.5 mb-0 inline-flex items-center" > 
            <img src="/assets/song-assets/profilesample.jpg" alt="profile pic" className="rounded-full h-10 w-10"></img>
            <span className="ml-3">Profile</span> 
            <svg id="dropdown-icon" className="w-7 h-7 text-black fill-current mt-1.5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
            </svg>
          </button> 
          
          {/* <!--profile dropdown-->                 */}
          <ul id="dropdown-menu" className="absolute hidden text-custom-color-song-font w-40 pt-12 ml-1"> 
            <li><a className=" hidden rounded-t-2xl bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 whitespace-no-wrap" href="/#">Account</a></li> 
            <li><a className="bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 block whitespace-no-wrap" href="/dist/profile.html">Profile</a></li> 
            <li><a className="bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 block whitespace-no-wrap" href="/dist/settings.html">Settings</a></li> 
            <li><a className="bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 block whitespace-no-wrap" href="/dist/footer-pages/support.html">Support</a></li>
            <hr className="bg-black"></hr>
            <li><a className="rounded-b-2xl bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 block whitespace-no-wrap" href="/dist/front.html">Logout</a></li> 
          </ul>
        </div>           
      </div>
    </div>
  );
}

function mainContent() {
  return (
    <div className="dark:text-black pl-9 xl:pr-16 pr-9 bg-opacity-0">
        {/* <!--Page Header--> */}
        <div>
          <div>
            <h1 className="dark:text-black mt-3 text-4xl">Good Evening!</h1>
          </div>
        </div>

        {/* TOP PICKS  */}

        {topPicks()}

        {/* RECENTLY PLAYED */}
        {recentlyPlayed()}

        {/* WHAT YOU LIKED  */}
        {whatYouLiked()}

        {/* FOOTER  */}
        {footer()}

      </div>
  );
}

function topPicks(){
  return(
    // TOP PICKS 
    <div>
              <h1 className="dark:text-black text-[28px] mt-2">Top Picks</h1>
        {/* <!--Top Picks Container--> */}
        <div className="w-[450px] sm:hidden">
          <div
            className="carrousel grid grid-flow-col scroll-auto gap-[1.2rem] overscroll-x-contain snap-mandatory snap-x overflow-y-hidden">
            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[300px] flex items-center justify-center">
              <div id="playlist-profile-toppicks-mb"
                className="xl:w-[275px] xl:h-[350px] lg:w-[325px] lg:h-[375px] md:w-[310px] md:h-[350px] sm:w-[265px] sm:h-[350px] sm:mb-6 md:mb-16 xl:mb-5 sm:mr-4 md:mr-9 lg:mr-6 xl:mr-4 snap-start  hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div className="mb-2.5">
                  <h1 className="dark:text-black text-xl text-[#797979]">Playlist</h1>
                </div>


                <div className="relative flex flex-grow">
                  <img className="w-full h-full" src="/assets/home-assets/toppick-1.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-toppicks-mb"
                    className="absolute bottom-10 right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="absolute h-[75px] w-full bg-toppick1-title-color rounded-b-[17px] bottom-0 flex justify-center items-center text-base text-center">
                    <p>Goddesses</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[300px] flex items-center justify-center">
              <div id="playlist-profile-newrelease-mb"
                className="xl:w-[275px] xl:h-[350px] lg:w-[325px] lg:h-[375px] md:w-[310px] md:h-[350px] sm:w-[265px] sm:h-[350px] sm:mb-6 md:mb-16 xl:mb-5 sm:mr-4 md:mr-9 lg:mr-6 xl:mr-4 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div className="mb-2.5">
                  <h1 className="dark:text-black text-xl text-[#797979]">New Release</h1>
                </div>
                <div className="relative flex flex-grow">
                  <img className="w-full h-full" src="/assets/home-assets/toppick-2.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-newrelease-mb"
                    className="absolute bottom-10 right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="absolute h-[75px] w-full bg-toppick2-title-color rounded-b-[17px] bottom-0 flex flex-col justify-center items-center text-base text-center">
                    <div className="uppercase w-full">portals</div>
                    <div className="w-full">Melanie Martinez</div>
                  </div>
                </div>
              </div>
            </div>


            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[300px] flex items-center justify-center">
              <div id="playlist-profile-made1-mb"
                className="xl:w-[275px] xl:h-[350px] lg:w-[325px] lg:h-[375px] md:w-[310px] md:h-[350px] sm:w-[265px] sm:h-[350px] sm:mb-6 md:mb-16 xl:mb-5 sm:mr-4 md:mr-9 lg:mr-6 xl:mr-4 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div className="mb-2.5">
                  <h1 className="text-xl text-[#797979]">Made For You</h1>
                </div>
                <div className="relative flex flex-grow">
                  <img className="w-full h-full" src="/assets/home-assets/toppick-3.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-made1-mb"
                    className="absolute bottom-10 right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="absolute h-[75px] w-full bg-toppick3-title-color rounded-b-[17px] bottom-0 flex justify-center items-center text-base text-center">
                    <p>
                      Paramore, Issues, Lana Del Rey, Melanie Martinez, BLACKPINK,
                      Billie Eilish, Sleeping...
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[300px] flex items-center justify-center">
              <div id="playlist-profile-made2-mb"
                className="xl:w-[275px] xl:h-[350px] lg:w-[325px] lg:h-[375px] md:w-[310px] md:h-[350px] sm:w-[265px] sm:h-[350px] sm:mb-6 md:mb-16 xl:mb-5 sm:mr-4 md:mr-9 lg:mr-6 xl:mr-4 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div className="mb-2.5">
                  <h1 className="text-xl text-[#797979]">Made For You</h1>
                </div>
                <div className="relative flex flex-grow">
                  <img className="w-full h-full" src="/assets/home-assets/toppick-4.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-made2-mb"
                    className="absolute bottom-10 right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="absolute h-[75px] w-full bg-toppick4-title-color rounded-b-[17px] bottom-0 flex justify-center items-center text-base text-center">
                    <p>Suggested For You</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--FOR SM AND UP--> */}
        <div className="sm:flex hidden flex-row flex-wrap justify-between sm:justify-start lg:items-center lg:m-auto">
          <div id="playlist-profile-toppicks"
            className="2xl:w-[275px] 2xl:h-[350px] lg:w-[325px] lg:h-[375px] md:w-[310px] md:h-[350px] sm:w-[265px] sm:h-[350px] sm:mb-6 md:mb-16 xl:mb-5 sm:mr-4 md:mr-9 lg:mr-6 xl:mr-4 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div className="mb-2.5">
              <h1 className="text-xl text-[#797979]">Playlist</h1>
            </div>

            
            <div className="relative flex flex-grow">
              <a href="/dist/playlist.html">
              <img className="w-full h-full" src="/assets/home-assets/toppick-1.png" alt="" />
              </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-toppicks"
                className="absolute bottom-10 right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>

              <div
                className="absolute h-[75px] w-full bg-toppick1-title-color rounded-b-[17px] bottom-0 flex justify-center items-center text-base text-center">
                <p>Goddesses</p>
              </div>
            </div>
          
          </div>

          
          <div id="playlist-profile-newrelease"
            className="2xl:w-[275px] 2xl:h-[350px] lg:w-[325px] lg:h-[375px] md:w-[310px] md:h-[350px] sm:w-[265px] sm:h-[350px] sm:mb-6 md:mb-16 xl:mb-5 sm:mr-4 md:mr-9 lg:mr-6 xl:mr-4 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div className="mb-2.5">
              <h1 className="text-xl text-[#797979]">New Release</h1>
            </div>
         
            <div className="relative flex flex-grow">
            <a href="/dist/playlist.html">
              <img className="w-full h-full" src="/assets/home-assets/toppick-2.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-newrelease"
                className="absolute bottom-10 right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>

              <div
                className="absolute h-[75px] w-full bg-toppick2-title-color rounded-b-[17px] bottom-0 flex flex-col justify-center items-center text-base text-center">
                <div className="uppercase w-full">portals</div>
                <div className="w-full">Melanie Martinez</div>
              </div>
            </div>
          
          </div>

          <div id="playlist-profile-made1"
            className="2xl:w-[275px] 2xl:h-[350px] lg:w-[325px] lg:h-[375px] md:w-[310px] md:h-[350px] sm:w-[265px] sm:h-[350px] sm:mb-6 md:mb-16 xl:mb-5 sm:mr-4 md:mr-9 lg:mr-6 xl:mr-4 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div className="mb-2.5">
              <h1 className="text-xl text-[#797979]">Made For You</h1>
            </div>
          
            <div className="relative flex flex-grow">
              <a href="/dist/playlist.html">
              <img className="w-full h-full" src="/assets/home-assets/toppick-3.png" alt="" />
              </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-made1"
                className="absolute bottom-10 right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>

              <div
                className="absolute h-[75px] w-full bg-toppick3-title-color rounded-b-[17px] bottom-0 flex justify-center items-center text-base text-center">
                <p>
                  Paramore, Issues, Lana Del Rey, Melanie Martinez, BLACKPINK,
                  Billie Eilish, Sleeping...
                </p>
              </div>
            </div>
          
          </div>

          <div id="playlist-profile-made2"
            className="2xl:w-[275px] 2xl:h-[350px] lg:w-[325px] lg:h-[375px] md:w-[310px] md:h-[350px] sm:w-[265px] sm:h-[350px] sm:mb-6 md:mb-16 xl:mb-5 sm:mr-4 md:mr-9 lg:mr-6 xl:mr-4 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div className="mb-2.5">
              <h1 className="text-xl text-[#797979]">Made For You</h1>
            </div>
            <div className="relative flex flex-grow">
            <a href="/dist/playlist.html">
              <img className="w-full h-full" src="/assets/home-assets/toppick-4.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-made2"
                className="absolute bottom-10 right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>

              <div
                className="absolute h-[75px] w-full bg-toppick4-title-color rounded-b-[17px] bottom-0 flex justify-center items-center text-base text-center">
                <p>Suggested For You</p>
              </div>
            
            </div>
          </div>
          <div id="playlist-profile-made2"
            className="2xl:w-[275px] 2xl:h-[350px] lg:w-[325px] lg:h-[375px] md:w-[310px] md:h-[350px] sm:w-[265px] sm:h-[350px] sm:mb-6 md:mb-16 xl:mb-5 sm:mr-4 md:mr-9 lg:mr-6 xl:mr-4 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div className="mb-2.5">
              <h1 className="text-xl text-[#797979]">Made For You</h1>
            </div>
            <div className="relative flex flex-grow">
            <a href="/dist/playlist.html">
              <img className="w-full h-full" src="/assets/home-assets/toppick-4.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-made2"
                className="absolute bottom-10 right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>

              <div
                className="absolute h-[75px] w-full bg-toppick4-title-color rounded-b-[17px] bottom-0 flex justify-center items-center text-base text-center">
                <p>Suggested For You</p>
              </div>
            
            </div>
          </div>
        </div>
    </div>
  );
}

function recentlyPlayed() {  
  return(
    // RECENTLY PLAYED
    <div>
        <div className="dark:text-black text-[28px] mt-[12px] mb-[25px] flex justify-between items-center">
          <h1>Recently Played</h1>
          <h1 className="text-[22px] hover:text-custom-color-sidebar-brown-hover hidden sm:inline"><a href="/#">See All</a>
          </h1>
        </div>
        {/* <!--Recently played Container--> */}

        <div className="w-[450px] sm:hidden">
          <div
            className="carrousel grid grid-flow-col scroll-auto gap-[1.2rem] overscroll-x-contain snap-mandatory snap-x overflow-y-hidden">
            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-recent1-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
              
                <div>
                  <img className=" h-full w-full relative" src="/assets/home-assets/recent-1.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-recent1-mb"
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                </div>


                <div className=" mt-2">
                  <h1 className="text-base">Hostage</h1>
                  <h1 className="text-base text-[#797979]">Billie Eilish</h1>
                </div>
             
              </div>
            </div>


            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-recent2-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div>
                  <img className="h-full w-full relative" src="/assets/home-assets/recent-2.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-recent2-mb"
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                </div>
                <div className="mt-2">
                  <h1 className="text-base">Rude Boy</h1>
                  <h1 className="text-base text-[#797979]">Rhianna</h1>
                </div>
              </div>
            </div>


            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-recent3-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div>
                  <img className="h-full w-full relative" src="/assets/home-assets/recent-3.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-recent3mb"
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                </div>
                <div className="mt-2">
                  <h1 className="text-base">Roger Rabbit</h1>
                  <h1 className="text-base text-[#797979]">Sleeping With Sirens</h1>
                </div>
              </div>
            </div>
            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-recent4-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div>
                  <img className="h-full w-full relative" src="/assets/home-assets/recent-4.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-recent4-mb"
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                </div>
                <div className="mt-2">
                  <h1 className="text-base">Tally</h1>
                  <h1 className="text-base text-[#797979]">BLACKPINK</h1>
                </div>
              </div>


            </div>
            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-recent5-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div>
                  <img className="h-full w-full relative" src="/assets/home-assets/recent-5.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-recent5-mb"
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                </div>
                <div className="mt-2">
                  <h1 className="text-base">Bulls In The Bronx</h1>
                  <h1 className="text-base text-[#797979]">Pierce The Veil</h1>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <!--FOR SM AND UP--> */}
        <div className="sm:flex hidden flex-row flex-wrap justify-between sm:justify-start ">
          <div id="playlist-profile-recent1"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className=" h-full w-full relative" src="/assets/home-assets/recent-1.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-recent1"
                onClick={() => setDetails('Hostage','Billie Eilish','/assets/home-assets/recent-1.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>
            
            </div>
            

            <div className="mt-2">
              <h1 className="text-base">Hostage</h1>
              <h1 className="text-base text-[#797979]">Billie Eilish</h1>
            </div>
          </div>

          <div id="playlist-profile-recent2"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
              <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/recent-2.png" alt="" />
              </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-recent2"
                onClick={() => setDetails('Rude Boy','Rhianna','/assets/home-assets/recent-2.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>
            
            </div>
            <div className="mt-2">
              <h1 className="text-base">Rude Boy</h1>
              <h1 className="text-base text-[#797979]">Rhianna</h1>
            </div>
          </div>

          <div id="playlist-profile-recent3"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/recent-3.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-recent3"
                onClick={() => setDetails('Roger Rabbit','Sleeping With Sirens','/assets/home-assets/recent-3.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>
            
            </div>
            <div className="mt-2">
              <h1 className="text-base">Roger Rabbit</h1>
              <h1 className="text-base text-[#797979]">Sleeping With Sirens</h1>
            </div>
          </div>

          <div id="playlist-profile-recent4"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/recent-4.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-recent4"
                onClick={() => setDetails('Tally','BLACKPINK','/assets/home-assets/recent-4.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>
            
            </div>
            <div className="mt-2">
              <h1 className="text-base">Tally</h1>
              <h1 className="text-base text-[#797979]">BLACKPINK</h1>
            </div>
          </div>

          <div id="playlist-profile-recent5"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/recent-5.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-recent5"
                onClick={() => setDetails('Bulls In The Bronx','Pierce The Veil','/assets/home-assets/recent-5.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>
            
            </div>
            <div className="mt-2">
              <h1 className="text-base">Bulls In The Bronx</h1>
              <h1 className="text-base text-[#797979]">Pierce The Veil</h1>
            </div>
          </div>
          <div id="playlist-profile-recent5"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/recent-5.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-recent5"
                onClick={() => setDetails('Bulls In The Bronx','Pierce The Veil','/assets/home-assets/recent-5.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>
            
            </div>
            <div className="mt-2">
              <h1 className="text-base">Bulls In The Bronx</h1>
              <h1 className="text-base text-[#797979]">Pierce The Veil</h1>
            </div>
          </div>
        </div>
    </div>
  );
}

function whatYouLiked(){
  return(
    <div>
        <div className="dark:text-black text-[28px] mt-[12px] mb-[24px] flex justify-between items-center">
          <h1>More Of What You Like</h1>
          <h1 className="text-[22px] hover:text-custom-color-sidebar-brown-hover hidden sm:inline"><a href="/#">See All</a>
          </h1>
        </div>

        {/* <!--What you like Container--> */}
        <div className="w-[450px] sm:hidden">
          <div
            className="carrousel grid grid-flow-col scroll-auto gap-[1.2rem] overscroll-x-contain snap-mandatory snap-x overflow-y-hidden">
            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-like1-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div>
                  <img className="h-full w-full relative" src="/assets/home-assets/like-1.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-like1-mb"
                    onClick={() => setDetails('So High','Doja Cat','/assets/home-assets/like-1.png')}
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                </div>
                <div className="mt-2">
                  <h1 className="text-base">So High</h1>
                  <h1 className="text-base text-[#797979]">Doja Cat</h1>
                </div>
              </div>
            </div>


            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-like2-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div>
                  <img className="h-full w-full relative" src="/assets/home-assets/like-2.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-like2-mb"
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                </div>
                <div className="mt-2">
                  <h1 className="text-base">Nxde</h1>
                  <h1 className="text-base text-[#797979]">(G)I-DLE</h1>
                </div>
              </div>
            </div>


            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-like3-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div>
                  <img className="h-full w-full relative" src="/assets/home-assets/like-3.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-like3-mb"
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                </div>
                <div className="mt-2">
                  <h1 className=" text-sm sm:text-base">Teenage Dream</h1>
                  <h1 className="text-base text-[#797979]">Katy Perry</h1>
                </div>
              </div>
            </div>


            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-like4-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div>
                  <img className="h-full w-full relative" src="/assets/home-assets/like-4.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-like4-mb"
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>

                </div>
                <div className="mt-2">
                  <h1 className="text-base">SOS</h1>
                  <h1 className="text-base text-[#797979]">SZA</h1>
                </div>
              </div>
            </div>


            <div className="snap-start rounded-[30px] min-h-[270px] min-w-[190px] flex items-center justify-center">
              <div id="playlist-profile-like5-mb"
                className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
                <div>
                  <img className="h-full w-full relative" src="/assets/home-assets/like-5.png" alt="" />

                  {/* <!-- HOVER PLAY-BTN --> */}
                  <button id="play-btn-like5-mb"
                    className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                    <div href="" className="w-6 h-6">
                      <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="mt-2">
                  <h1 className="text-sm sm:text-base">Fearless (Taylor’s Version)</h1>
                  <h1 className="text-base text-[#797979]">Taylor Swift</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--FOR SM AND UP--> */}
        <div className="sm:flex hidden flex-row flex-wrap justify-between sm:justify-start mb-[44px]">

          <div id="playlist-profile-like1"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/like-1.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-like1"
                onClick={() => setDetails('So High','Doja Cat','/assets/home-assets/like-1.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>
            
            </div>
            <a href="/dist/artistpage.html">
            <div className="mt-2">
              <h1 className="text-base">So High</h1>
              <h1 className="text-base text-[#797979]">Doja Cat</h1>
            </div>
            </a>
          </div>

          <div id="playlist-profile-like2"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/like-2.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-like2"
                onClick={() => setDetails('Nxde','(G)-IDLE','/assets/home-assets/like-2.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>
            
            </div>
            <div className="mt-2">
              <h1 className="text-base">Nxde</h1>
              <h1 className="text-base text-[#797979]">(G)I-DLE</h1>
            </div>
          </div>

          <div id="playlist-profile-like3"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/like-3.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-like3"
                onClick={() => setDetails('Teenage Dream: The ...','Katy Perry','/assets/home-assets/like-3.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>

            </div>
            <div className="mt-2">
              <h1 className="text-base">Teenage Dream: The complete Co...</h1>
              <h1 className="text-base text-[#797979]">Katy Perry</h1>
            </div>
          </div>

          <div id="playlist-profile-like4"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/like-4.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-like4"
                onClick={() => setDetails('SOS','SZA','/assets/home-assets/like-5.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>

            </div>
            <div className="mt-2">
              <h1 className="text-base">SOS</h1>
              <h1 className="text-base text-[#797979]">SZA</h1>
            </div>
          </div>

          <div id="playlist-profile-like5"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/like-5.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-like5"
                onClick={() => setDetails('Fearless (Tay ...','Taylor Swift','/assets/home-assets/like-5.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>

            </div>
            <div className="mt-2">
              <h1 className="text-base">Fearless (Taylor’s Version)</h1>
              <h1 className="text-base text-[#797979]">Taylor Swift</h1>
            </div>
          </div>
          <div id="playlist-profile-like5"
            className=" md:h-[270px] md:w-[220px] sm:h-[240px] sm:w-[175px] sm:mr-3 sm:mb-5 md:mb-8 xl:mb-5 hover:transition-all duration-195 transform hover:scale-105 cursor-pointer ">
            <div>
            <a href="/dist/song.html">
              <img className="h-full w-full relative" src="/assets/home-assets/like-5.png" alt="" />
            </a>
              {/* <!-- HOVER PLAY-BTN --> */}
              <button id="play-btn-like5"
                onClick={() => setDetails('Fearless (Tay ...','Taylor Swift','/assets/home-assets/like-5.png')}
                className="absolute bottom-[70px] right-2 sm:right-5 w-24 h-24 sm:w-16 sm:h-16 pb-2.5 pl-1.5 z-50 bg-custom-color-sidebar-brown-hover rounded-full flex items-center justify-center lg:opacity-0 hover:scale-110 duration-300">
                <div href="" className="w-6 h-6">
                  <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </button>

            </div>
            <div className="mt-2">
              <h1 className="text-base">Fearless (Taylor’s Version)</h1>
              <h1 className="text-base text-[#797979]">Taylor Swift</h1>
            </div>
          </div>
        </div>
    </div>
  );
}

function footer(){
  return(
    <div className="flex flex-col md:flex-row flex-wrap font-normal text-sm sm:text-base mt-auto h-auto pb-36 z-40">
      <div className="w-fit h-fit mx-5 my-2">
        <ul className="text-custom-color-footer-text px-3 space-y-2">
          <li className="dark:text-black text-white py-3">Company</li>
          <li><a href="/dist/footer-pages/about.html" className="hover:text-white">About</a></li>
          <li><a href="/dist/footer-pages/jobs.html" className="hover:text-white">Jobs</a></li>
          <li><a href="/dist/footer-pages/for-the-record.html" className="hover:text-white">For The Record</a></li>
        </ul>
        
      </div>
      <div className="w-fit h-fit mx-5 my-2">
        <ul className="text-custom-color-footer-text px-3 space-y-2">
            <li className="dark:text-black text-white py-3">Communities</li>
            <li><a href="/dist/footer-pages/developers.html" className="hover:text-white">Developers</a></li>
            <li><a href="/dist/footer-pages/advertising.html" className="hover:text-white">Advertising</a></li>
            <li><a href="/dist/footer-pages/investors.html" className="hover:text-white">Investors</a></li>
        </ul>
      </div>
      <div className="w-fit h-fit mx-5 my-2">
        <ul className="text-custom-color-footer-text px-3 space-y-2">
            <li className="dark:text-black text-white py-3">Support</li>
            <li><a href="/dist/footer-pages/support.html" className="hover:text-white">Support</a></li>
            <li><a href="/dist/footer-pages/legal.html" className="hover:text-white">Legal</a></li>
            <li><a href="/dist/footer-pages/privacy.html" className="hover:text-white">Privacy</a></li>
            <li><a href="/dist/footer-pages/cookies.html" className="hover:text-white">Cookies</a></li>
        </ul>
      </div>


      {/* <!-- SOCIAL ICONS --> */}
      <div className="flex flex-grow flex-wrap justify-start md:justify-end pr-6 pl-5">
        <button className="w-10 h-10 my-3 mx-3 dark:bg-white bg-custom-color-footer-social-icons rounded-full flex items-center justify-center">
            <div className="w-7 h-7">
                <svg className="dark:text-black text-white fill-current hover:text-custom-color-navbar-icons-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                </svg>
            </div>
        </button>
        <button className="w-10 h-10 my-3 mx-3 dark:bg-white bg-custom-color-footer-social-icons rounded-full flex items-center justify-center">
            <div className="w-7 h-7 mb-1">
                <svg className="dark:text-black text-white fill-current hover:text-custom-color-navbar-icons-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </div>
        </button>
        <button className="w-10 h-10 my-3 mx-3 dark:bg-white bg-custom-color-footer-social-icons rounded-full flex items-center justify-center">
            <div className="w-7 h-7">
                <svg className="dark:text-black text-white fill-current hover:text-custom-color-navbar-icons-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
            </div>
        </button>
      </div>
    </div>
  );
}

function playbar(){
  let title = sessionStorage.getItem("title");
  let artist = sessionStorage.getItem("artist");
  let img = sessionStorage.getItem("img");

  if(title === null){
    title = 'King Of The Heart';
    artist = 'Pierce The Veil';
    img = '/assets/home-assets/recent-5.png'
  }

  return(
    <div>
      {/* <!-- PLAYBAR --> */}
      <div className="w-[calc(100%-20px)] mr-2 ml-2 pl-5 pr-5 pb-0 fixed h-[90px] bottom-16 lg:mt-auto lg:bottom-5 z-50 bg-custom-color-playbar opacity-80 rounded-3xl mt-auto grid grid-cols-4 grid-flow-row-dense items-center text-center">
        <div className="w-[150px] flex items-center text-start md:w-[200px] lg:w-auto">
          <img id="playImg" src={img} alt="album"
            className="flex-inline-block w-10 h-10 rounded-lg md:w-14 md:h-14"></img>
          <div className="ml-2 ">
            <a id="playTitle" href="/#" className="flex-inline-block text-custom-color-song-font text-[14px] md:text-[20px]">{title}</a>
            <p id="playArtist" className="flex-inline-block text-[12px] md:text-[18px] text-custom-color-add-searchfont">{artist}</p>
          </div>
        </div>
        <div className="hidden md:col-span-2 md:block">
          <div className="flex flex-row items-center justify-center w-auto mt-2 ">
            <svg className="hidden w-[50px] md:block" width="25" height="20" viewBox="0 0 25 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 5.46992V4.68867C0 4.04145 0.524658 3.51679 1.17188 3.51679H18.75V1.17304C18.75 0.129733 20.0146 -0.391507 20.7505 0.344381L24.6568 4.25063C25.1144 4.7083 25.1144 5.45029 24.6568 5.90791L20.7505 9.81416C20.0174 10.5472 18.75 10.0332 18.75 8.98554V6.64179H1.17188C0.524658 6.64179 0 6.11714 0 5.46992ZM23.8281 12.8918H6.25V10.548C6.25 9.50732 4.98721 8.98164 4.24946 9.71938L0.343213 13.6256C-0.114404 14.0833 -0.114404 14.8253 0.343213 15.2829L4.24946 19.1892C4.98325 19.9229 6.25 19.4073 6.25 18.3605V16.0168H23.8281C24.4753 16.0168 25 15.4921 25 14.8449V14.0637C25 13.4165 24.4753 12.8918 23.8281 12.8918Z"
                fill="#E9EBE9" />
            </svg>
            <svg className="hidden w-[50px] md:block" width="20" height="16" viewBox="0 0 20 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.71863 6.98486L16.3593 0.344238C16.8182 -0.114746 17.5604 -0.114746 18.0145 0.344238L19.118 1.44775C19.577 1.90674 19.577 2.64893 19.118 3.10303L14.4159 7.81494L19.1229 12.522C19.5819 12.981 19.5819 13.7231 19.1229 14.1772L18.0194 15.2856C17.5604 15.7446 16.8182 15.7446 16.3641 15.2856L9.72351 8.64502C9.25965 8.18604 9.25965 7.44385 9.71863 6.98486ZM0.34363 8.64502L6.98426 15.2856C7.44324 15.7446 8.18543 15.7446 8.63953 15.2856L9.74304 14.1821C10.202 13.7231 10.202 12.981 9.74304 12.5269L5.0409 7.81494L9.74793 3.10791C10.2069 2.64893 10.2069 1.90674 9.74793 1.45264L8.64441 0.344238C8.18543 -0.114746 7.44324 -0.114746 6.98914 0.344238L0.348513 6.98486C-0.115354 7.44385 -0.115354 8.18604 0.34363 8.64502Z"
                fill="#E9EBE9" />
            </svg>
            <svg className="hidden w-[50px] md:block" width="22" height="25" viewBox="0 0 22 25" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.7227 10.4818L3.53516 0.3207C2.13867 -0.504495 0 0.296286 0 2.3373V22.6547C0 24.4857 1.9873 25.5893 3.53516 24.6713L20.7227 14.515C22.2559 13.6117 22.2607 11.3852 20.7227 10.4818Z"
                fill="#E9EBE9" />
            </svg>
            <svg className="hidden w-[50px] md:block" width="20" height="16" viewBox="0 0 20 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.74365 8.64502L3.10303 15.2856C2.64404 15.7446 1.90186 15.7446 1.44775 15.2856L0.344238 14.1821C-0.114746 13.7231 -0.114746 12.981 0.344238 12.5269L5.05127 7.81982L0.344238 3.11279C-0.114746 2.65381 -0.114746 1.91162 0.344238 1.45752L1.44287 0.344238C1.90186 -0.114746 2.64404 -0.114746 3.09814 0.344238L9.73877 6.98486C10.2026 7.44385 10.2026 8.18604 9.74365 8.64502ZM19.1187 6.98486L12.478 0.344238C12.019 -0.114746 11.2769 -0.114746 10.8228 0.344238L9.71924 1.44775C9.26025 1.90674 9.26025 2.64893 9.71924 3.10303L14.4263 7.81006L9.71924 12.5171C9.26025 12.9761 9.26025 13.7183 9.71924 14.1724L10.8228 15.2759C11.2817 15.7349 12.0239 15.7349 12.478 15.2759L19.1187 8.63525C19.5776 8.18604 19.5776 7.44385 19.1187 6.98486Z"
                fill="#E9EBE9" />
            </svg>
            <svg className="hidden w-[50px] md:block" width="25" height="16" viewBox="0 0 25 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.4666 11.0512L20.5335 14.9843C20.1674 15.3504 19.5738 15.3504 19.2077 14.9843L15.2746 11.0512C14.9085 10.6851 14.9085 10.0915 15.2746 9.72542L15.6974 9.30265C16.0709 8.92913 16.6791 8.9378 17.0419 9.32187L18.6206 10.9934V3.87944H11.2944C11.0458 3.87943 10.8073 3.78067 10.6315 3.60487L10.0065 2.97987C9.41593 2.38925 9.83421 1.37944 10.6694 1.37944H20.1831C20.7008 1.37944 21.1206 1.79917 21.1206 2.31694V10.9934L22.6993 9.32187C23.062 8.93784 23.6703 8.92913 24.0438 9.30265L24.4666 9.72542C24.8327 10.0915 24.8327 10.6851 24.4666 11.0512ZM14.1096 11.654C14.0225 11.567 13.9192 11.4979 13.8054 11.4508C13.6917 11.4037 13.5698 11.3794 13.4467 11.3794H6.12058V4.26542L7.69933 5.93698C8.06206 6.32101 8.67026 6.32972 9.04382 5.95616L9.46655 5.53343C9.83269 5.16729 9.83269 4.5737 9.46655 4.20761L5.53351 0.2746C5.16737 -0.0915332 4.57378 -0.0915332 4.20769 0.2746L0.2746 4.20765C-0.0915332 4.57378 -0.0915332 5.16737 0.2746 5.53347L0.697334 5.9562C1.07085 6.32972 1.67909 6.32104 2.04183 5.93702L3.62058 4.26542V12.9419C3.62058 13.4597 4.0403 13.8794 4.55808 13.8794H14.0717C14.9069 13.8794 15.3252 12.8696 14.7346 12.279L14.1096 11.654Z"
                fill="#E9EBE9" />
            </svg>
          </div>
          <div className="hidden relative items-center mt-3 mb-2 md:flex">
            <p className="text-white hidden md:block">2:00</p>
            {/* <!-- <svg className="w-96 h-2 ml-3 mr-3" viewBox="0 0 740 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="740" y2="1" stroke="#E9EBE9" stroke-opacity="0.6" stroke-width="2"/>
          </svg>   --> */}
            <div className="w-[100%] ml-5 mr-5">
              <input className="hidden md:w-[100%] md:block" type="range" min="0" max="356" value="200"></input>
            </div>
            <p className="text-white hidden md:block">3:56</p>
          </div>
        </div>
        <div className="hidden w-auto ml-20 md:block items-center">
          <div className="w-auto h-[26px] flex flex-row justify-evenly">
            <svg className="block" width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.5738 1.49576C19.8981 -0.784512 15.9186 -0.374356 13.4625 2.15982L12.5006 3.15104L11.5387 2.15982C9.08751 -0.374356 5.10314 -0.784512 2.42736 1.49576C-0.639049 4.11295 -0.800182 8.81021 1.94396 11.6471L11.3922 21.403C12.0026 22.0329 12.9938 22.0329 13.6041 21.403L23.0524 11.6471C25.8014 8.81021 25.6402 4.11295 22.5738 1.49576Z"
                fill="#9A7F69" />
            </svg>
            <svg className="block " width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.6562 0H16.4062C15.1123 0 14.0625 1.0498 14.0625 2.34375V8.59375C14.0625 9.8877 15.1123 10.9375 16.4062 10.9375H20.3125V14.0625C20.3125 15.7861 18.9111 17.1875 17.1875 17.1875H16.7969C16.1475 17.1875 15.625 17.71 15.625 18.3594V20.7031C15.625 21.3525 16.1475 21.875 16.7969 21.875H17.1875C21.5039 21.875 25 18.3789 25 14.0625V2.34375C25 1.0498 23.9502 0 22.6562 0ZM8.59375 0H2.34375C1.0498 0 0 1.0498 0 2.34375V8.59375C0 9.8877 1.0498 10.9375 2.34375 10.9375H6.25V14.0625C6.25 15.7861 4.84863 17.1875 3.125 17.1875H2.73438C2.08496 17.1875 1.5625 17.71 1.5625 18.3594V20.7031C1.5625 21.3525 2.08496 21.875 2.73438 21.875H3.125C7.44141 21.875 10.9375 18.3789 10.9375 14.0625V2.34375C10.9375 1.0498 9.8877 0 8.59375 0Z"
                fill="#E9EBE9" />
            </svg>
            <svg className="block " width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.78125 3.51562H21.0938C21.5252 3.51562 21.875 3.16587 21.875 2.73438V0.78125C21.875 0.349756 21.5252 0 21.0938 0H0.78125C0.349756 0 0 0.349756 0 0.78125V2.73438C0 3.16587 0.349756 3.51562 0.78125 3.51562ZM0.78125 11.3281H21.0938C21.5252 11.3281 21.875 10.9784 21.875 10.5469V8.59375C21.875 8.16226 21.5252 7.8125 21.0938 7.8125H0.78125C0.349756 7.8125 0 8.16226 0 8.59375V10.5469C0 10.9784 0.349756 11.3281 0.78125 11.3281ZM0.78125 19.1406H21.0938C21.5252 19.1406 21.875 18.7909 21.875 18.3594V16.4062C21.875 15.9748 21.5252 15.625 21.0938 15.625H0.78125C0.349756 15.625 0 15.9748 0 16.4062V18.3594C0 18.7909 0.349756 19.1406 0.78125 19.1406Z"
                fill="#E9EBE9" />
            </svg>
            <svg className="block " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.4995 0.343802L6.15527 4.68755H1.17188C0.524414 4.68755 0 5.21197 0 5.85943V12.8907C0 13.5377 0.524414 14.0626 1.17188 14.0626H6.15527L10.4995 18.4058C11.2334 19.1397 12.5 18.6241 12.5 17.5772V1.1729C12.5 0.124564 11.2324 -0.38862 10.4995 0.343802ZM16.5151 5.62115C15.9497 5.31206 15.2363 5.51568 14.9229 6.08257C14.6108 6.64947 14.8174 7.36187 15.3843 7.67486C16.0146 8.02154 16.4062 8.6729 16.4062 9.37505C16.4062 10.0772 16.0146 10.7286 15.3848 11.0748C14.8179 11.3877 14.6113 12.1002 14.9233 12.667C15.2373 13.2364 15.9512 13.4385 16.5156 13.1285C17.894 12.3692 18.7505 10.9312 18.7505 9.37456C18.7505 7.81792 17.894 6.38042 16.5151 5.62115Z"
                fill="#E9EBE9" />
            </svg>
          </div>
        </div>
        <div className="w-auto flex col-span-4 md:hidden mb-2">
          <input className="w-[100%] h-[2px] lg:hidden" type="range" min="0" max="356" value="200"></input>
        </div>
        <div className="w-auto flex items-center col-span-3 justify-end md:hidden">
          <svg className="block m-2" width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.5738 1.49576C19.8981 -0.784512 15.9186 -0.374356 13.4625 2.15982L12.5006 3.15104L11.5387 2.15982C9.08751 -0.374356 5.10314 -0.784512 2.42736 1.49576C-0.639049 4.11295 -0.800182 8.81021 1.94396 11.6471L11.3922 21.403C12.0026 22.0329 12.9938 22.0329 13.6041 21.403L23.0524 11.6471C25.8014 8.81021 25.6402 4.11295 22.5738 1.49576Z"
              fill="#9A7F69" />
          </svg>
          <svg className="block m-2" width="25" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.7227 10.4818L3.53516 0.3207C2.13867 -0.504495 0 0.296286 0 2.3373V22.6547C0 24.4857 1.9873 25.5893 3.53516 24.6713L20.7227 14.515C22.2559 13.6117 22.2607 11.3852 20.7227 10.4818Z"
              fill="#E9EBE9" />
          </svg>
          <svg className="block m-2" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.74365 8.64502L3.10303 15.2856C2.64404 15.7446 1.90186 15.7446 1.44775 15.2856L0.344238 14.1821C-0.114746 13.7231 -0.114746 12.981 0.344238 12.5269L5.05127 7.81982L0.344238 3.11279C-0.114746 2.65381 -0.114746 1.91162 0.344238 1.45752L1.44287 0.344238C1.90186 -0.114746 2.64404 -0.114746 3.09814 0.344238L9.73877 6.98486C10.2026 7.44385 10.2026 8.18604 9.74365 8.64502ZM19.1187 6.98486L12.478 0.344238C12.019 -0.114746 11.2769 -0.114746 10.8228 0.344238L9.71924 1.44775C9.26025 1.90674 9.26025 2.64893 9.71924 3.10303L14.4263 7.81006L9.71924 12.5171C9.26025 12.9761 9.26025 13.7183 9.71924 14.1724L10.8228 15.2759C11.2817 15.7349 12.0239 15.7349 12.478 15.2759L19.1187 8.63525C19.5776 8.18604 19.5776 7.44385 19.1187 6.98486Z"
              fill="#E9EBE9" />
          </svg>
        </div>
      </div>


      {/* <!-- MENU BAR ON SM & MD --> */}
      <div className="flex flex-row lg:hidden w-full fixed h-14 left-0 text-white bottom-0 mt-auto z-50 bg-custom-color">
        <div className="w-[20%] flex flex-col justify-center items-center">
          <a href="/dist/home.html">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              className="w-9 h-9">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </a>
          <span className="text-xs">Home</span>
        </div>
        <div className="w-[20%] flex flex-col justify-center items-center">
          <a href="/dist/search-page.html">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              className="w-9 h-9">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </a>
          <span className="text-xs">Search</span>
        </div>
        <div className="w-[20%] flex flex-col justify-center items-center">
          <a href="/dist/queue.html" className="hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              className="w-9 h-9">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
          </a>
          <span className="text-xs">Queue</span>
        </div>
        <div className="w-[20%] flex flex-col justify-center items-center">
          <a href="/dist/library.html" className="hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              className="w-9 h-9">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </a>
          <span className="text-xs">Library</span>
        </div>
        <div className="w-[20%] flex flex-col justify-center items-center">
          <a href="/dist/addplaylist.html" className="hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
              <path fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clip-rule="evenodd" />
            </svg>
          </a>
          {/* <!-- THIS IS ADD PLAYLIST NOT PLAYLIST  --> */}
          <span className="text-xs overflow-hidden">Playlist</span>
        </div>
      </div>
    </div>
  );
}


let setDetails = (title, artist, img) => {
  console.log(title, artist, img);
  sessionStorage.setItem("title", title);
  sessionStorage.setItem("artist", artist);
  sessionStorage.setItem("img", img);

  setPlayBar();
}


let setPlayBar = () => {
  let title = sessionStorage.getItem("title");
  let artist = sessionStorage.getItem("artist");
  let img = sessionStorage.getItem("img");

  console.log("Title:", title);
  console.log("Artist:", artist);
  console.log("Img:", img);

  console.log(document.getElementById('playTitle'))

  let x = document.getElementById('playTitle');
  let y = document.getElementById('playArtist');
  let z = document.getElementById('playImg');

  if(x != null && y != null){
    x.innerHTML = title;
    y.innerHTML = artist;
    z.src = img;
  }

}

setPlayBar();
