import "../App.css";
import React from 'react'

const Projects = () => {
  return (
    <div>
      <div class="bg-blue-100">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-1">
            <div class="bg-white shadow rounded-lg p-6">
              <div class="col-span-4 sm:col-span-9">
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl font-bold mb-4 font-merriweather">Sell It!</h2>
                  <p class="text-gray-600 font-merriweather">eCommerce site</p>
                  <p class="text-gray-500 font-merriweather">Ruby on Rails, React, Redux</p>
                  <p class="text-gray-700 font-merriweather">This app allows users to buy and sell audio gear. Simliar to eBay or Etsy. Users are authenticated, validations exist for all new items, and carts can be modified until the point of purchase.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl font-bold mb-4 font-merriweather">Movie Rental App</h2>
                  <p class="text-gray-600 font-merriweather">Movie rental database site</p>
                  <p class="text-gray-500 font-merriweather">Ruby on Rails, React</p>
                  <p class="text-gray-700 font-merriweather">This app was meant to go a little deeper into my understanding of Ruby on Rails, while also applying useContext to access state from a central location. Also includes validations and authentication for users using bcrypt.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl font-bold mb-4 font-merriweather">Character Manager</h2>
                  <p class="text-gray-600 font-merriweather">D&D Character database</p>
                  <p class="text-gray-500 font-merriweather">Ruby on Rails, React</p>
                  <p class="text-gray-700 font-merriweather">This simple app was designed to demonstrate knowledge of Ruby with Sinatra. It allows you to create and manage the levels of D&D characters.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl font-bold mb-4 font-merriweather">Recipe Manager v2</h2>
                  <p class="text-gray-600 font-merriweather">Simple recipe manager</p>
                  <p class="text-gray-500 font-merriweather">React</p>
                  <p class="text-gray-700 font-merriweather">The second app I made is another Recipe Manager - I guess I really wanted to expand on that idea! This time around, I utilized Semantic UI cards to my home page for a better display and also included the ability to "favorite" a recipe and leave a comment.
                  <br></br><br></br>
                  </p>
                </div>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl font-bold mb-4 font-merriweather">Recipe Manager</h2>
                  <p class="text-gray-600 font-merriweather">A very simple JS based recipe manager</p>
                  <p class="text-gray-500 font-merriweather">Ruby on Rails, React</p>
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