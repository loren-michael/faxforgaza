import "../App.css";
import React from 'react'
import YouTube from "react-youtube";

const Projects = () => {

  const options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1
    }
  }

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
                  <YouTube videoId="4cvZbOYlLcg" options={options} onReady={this._onReady} id="sellit video"/>
                  <p class="text-gray-700 font-merriweather">This app allows users to buy and sell audio gear. Simliar to eBay or Etsy. Users are authenticated, validations exist for all new items, and carts can be modified until the point of purchase.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Movie Rental App</h2>
                  <p class="text-gray-600 text-center font-merriweather">Movie rental database site</p>
                  <p class="text-gray-500 text-center font-merriweather">Ruby on Rails, React</p>
                  <YouTube videoId="NlN0V4Bq_yM" options={options} onReady={this._onReady} id="movie rental video"/>                
                  <p class="text-gray-700 font-merriweather">This app was meant to go a little deeper into my understanding of Ruby on Rails, while also applying useContext to access state from a central location. Also includes validations and authentication for users using bcrypt.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Character Manager</h2>
                  <p class="text-gray-600 text-center font-merriweather">D&D Character database</p>
                  <p class="text-gray-500 text-center font-merriweather">Ruby on Rails, React</p>
                  <YouTube videoId="IPAvHJ6HqBk" options={options} onReady={this._onReady} id="character manager video"/>                
                  <p class="text-gray-700 font-merriweather">This simple app was designed to demonstrate knowledge of Ruby with Sinatra. It allows you to create and manage the levels of D&D characters.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Recipe Manager v2</h2>
                  <p class="text-gray-600 text-center font-merriweather">Simple recipe manager</p>
                  <YouTube videoId="7tJt0OAALhk" options={options} onReady={this._onReady} id="recipe v2 video"/>                 
                  <p class="text-gray-700 font-merriweather">The second app I made is another Recipe Manager - I guess I really wanted to expand on that idea! This time around, I utilized Semantic UI cards to my home page for a better display and also included the ability to "favorite" a recipe and leave a comment.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Recipe Manager v1</h2>
                  <p class="text-gray-600 text-center font-merriweather">A very simple JS based recipe manager</p>
                  <YouTube videoId="93D8D1Pqez8" options={options} onReady={this._onReady} id="recipe v1 video"/>                 
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