import React from 'react'
import logo from '../resources/logo.jpg';

function Links() {

  return (
    <div>
      <div class="bg-blue-100">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-1">
            <div class="bg-white shadow rounded-lg p-6">
              <div class="flex flex-col items-center">
                <img src={ logo } alt="Palestine" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"></img>
                <h1 class="text-xl font-merriweather font-bold">Fax for Gaza</h1>
                <p class="text-gray-600 font-merriweather">PDF files to use to contact your representatives in congress</p>
                <p class="text-gray-500 font-merriweather">Image by Alif Mauladani</p>
              </div>
            </div>
          </div>
          <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow rounded-lg p-6">
                <h2 class="text-xl font-bold mb-4 font-merriweather">Fax For Gaza</h2>
                  <p class="text-gray-700 font-merriweather">
                  Fax for Gaza makes it a little easier to contact your representatives to support a ceasefire in Palestine by providing PDF files that you can fax for free to your representatives using FaxZero.com
                  <br></br><br></br>
                  It is our hope that if people are given these resources and links they will be more likely to utilize them daily to flood our representatives with faxes directly from their phones.
                  <br></br><br></br>
                  To use this resource, you can either use our form to find your representatives by clicking the button below, or, if you know the names of your representatives or would rather not use our form, you can download our blank form PDF letters below and enter in your information on your device to fax. Once you have your PDF files, go to FaxZero.com using the link above, find your representatives, upload your PDF and send it!
                  <br></br><br></br>
                  This site uses Google's Civic Information API and does NOT save any information about visitors.
                  <br></br>
                  To share any feedback, please write to: faxforgaza at gmail dot com
                  </p>
                  {/* Light gray line breaks */}
                  {/* <hr class="my-6 border-t border-gray-300"></hr> */}
                  {/* <hr class="my-6 border-t border-gray-300"></hr> */}
                  {/* <hr class="my-6 border-t border-gray-300"></hr> */}
                  {/* <hr class="my-6 border-t border-gray-300"></hr> */}
                  {/* <hr class="my-6 border-t border-gray-300"></hr> */}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links