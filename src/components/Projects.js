import "../App.css";
import React from 'react';
import CM1 from '../resources/CM1.jpg';
import CM2 from '../resources/CM2.jpg';
import MR1 from '../resources/MR1.jpg';
import MR2 from '../resources/MR2.jpg';
import MR3 from '../resources/MR3.jpg';
import RM11 from '../resources/RM11.jpg';
import RM14 from '../resources/RM14.jpg';
import RM16 from '../resources/RM16.jpg';
import RM21 from '../resources/RM21.jpg';
import RM22 from '../resources/RM22.jpg';
import RM23 from '../resources/RM23.jpg';
import sellit1 from '../resources/sellit1.jpg';
import sellit2 from '../resources/sellit2.jpg';
import sellit3 from '../resources/sellit3.jpg';


// import YouTube from "react-youtube";

const Projects = () => {

  // const opts: YouTubeProps['opts'] = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };


  // const options = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     autoplay: 1,
  //     controls: 1
  //   }
  // };

  return (
    <div>
      <div class="bg-blue-100">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-1">
            <div class="bg-white shadow rounded-lg p-6">
              <div class="col-span-4 sm:col-span-9">
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Sell It!</h2>
                  <p class="text-gray-600 text-center font-merriweather">eCommerce site</p>
                  <p class="text-gray-500 text-center font-merriweather">Ruby on Rails, React, Redux</p>
                  {/* <YouTube
                    videoId="4cvZbOYlLcg"
                    opts={options}
                    onReady={this.pauseVideo()}
                    id="sellit video"
                  /> */}
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ sellit1 } alt="Sell It! Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ sellit2 } alt="Sell It! Signup"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ sellit3 } alt="Sell It! Item Description"/>
                    </div>
                  </div>
                  <p class="text-gray-700 font-merriweather">This app allows users to buy and sell audio gear. Simliar to eBay or Etsy. Users are authenticated, validations exist for all new items, and carts can be modified until the point of purchase.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Movie Rental App</h2>
                  <p class="text-gray-600 text-center font-merriweather">Movie rental database site</p>
                  <p class="text-gray-500 text-center font-merriweather">Ruby on Rails, React</p>
                  {/* <YouTube 
                    videoId="NlN0V4Bq_yM" 
                    options={options} 
                    onReady={this.pauseVideo()} 
                    id="movie rental video"
                  />                 */}
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ MR1 } alt="Movie Rental Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ MR2 } alt="Movie Rental Unavailable"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ MR3 } alt="Movie Rental Available"/>
                    </div>
                  </div>
                  <p class="text-gray-700 font-merriweather">This app was meant to go a little deeper into my understanding of Ruby on Rails, while also applying useContext to access state from a central location. Also includes validations and authentication for users using bcrypt.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Character Manager</h2>
                  <p class="text-gray-600 text-center font-merriweather">D&D Character database</p>
                  <p class="text-gray-500 text-center font-merriweather">Ruby on Rails, React</p>
                  {/* <YouTube 
                    videoId="IPAvHJ6HqBk" 
                    options={options} 
                    onReady={this.pauseVideo()} 
                    id="character manager video"
                  />                 */}
                  <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ CM1 }  alt="Character Manager Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ CM2 } alt="Character Manager Create"/>
                    </div>
                    {/* <div>
                      <img class="h-auto max-w-full rounded-lg" src={  } alt=""/>
                    </div> */}
                  </div>
                  <p class="text-gray-700 font-merriweather">This simple app was designed to demonstrate knowledge of Ruby with Sinatra. It allows you to create and manage the levels of D&D characters.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Recipe Manager v2</h2>
                  <p class="text-gray-600 text-center font-merriweather">Simple recipe manager</p>
                  {/* <YouTube 
                    videoId="7tJt0OAALhk" 
                    options={options} 
                    onReady={this.pauseVideo()} 
                    id="recipe v2 video"
                  />                  */}
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM21 } alt="Recipe Manager 2 Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM22 } alt="Recipe Manager 2 Details"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM23 } alt="Recipe Manager 2 Create"/>
                    </div>
                  </div>
                  <p class="text-gray-700 font-merriweather">The second app I made is another Recipe Manager - I guess I really wanted to expand on that idea! This time around, I utilized Semantic UI cards to my home page for a better display and also included the ability to "favorite" a recipe and leave a comment.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Recipe Manager v1</h2>
                  <p class="text-gray-600 text-center font-merriweather">A very simple JS based recipe manager</p>
                  {/* <YouTube 
                    videoId="93D8D1Pqez8" 
                    options={options} 
                    onReady={this.pauseVideo()} 
                    id="recipe v1 video"
                  />                  */}
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM11 } alt="Recipe Manager 1 Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM16 } alt="Recipe Manager 1 Details"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM14 } alt="Recipe Manager 1 Create"/>
                    </div>
                  </div>
                  <p class="text-gray-700 font-merriweather">This was the first app that I build for a Flatiron project. It uses basic DOM manipulation to show a list of recipes from an included JSON database, and also allows you to add your own recipes to the list. The functionality is very basic, and does not include any validations or the ability to delete recipes without editing the database directly.
                  <br></br><br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Projects