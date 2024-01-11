import React from 'react'
// import logo from '../resources/logo.jpg';

function Links() {

  return (
    <div>
      <div class="bg-blue-100">
        <div class="container mx-auto py-8">
          {/* <div class="grid grid-cols-1"></div> */}
          <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow rounded-lg p-6">
                <h2 class="text-xl font-bold mb-4 font-merriweather">Other Helpful Links</h2>
                <br></br>
                <br></br>

{/* House Summary */}
                <div class="mb-6">
                  <div class="flex justify-between">
                    <a href="https://www.congress.gov/bill/118th-congress/house-resolution/786" class="text-blue-500 font-bold">House Resolution 786 Summary</a>
                  </div>
                  <p class="mt-2">This link takes you to the official summary of House Resolution 786 introduced by Cori Bush (D-MO) on October 16, 2023.</p>
                </div>

                  <hr class="my-6 border-t border-gray-300"></hr>

{/* Co-Sponsors */}
                  <div class="mb-6">
                    <div class="flex justify-between">
                      <a href="https://www.congress.gov/bill/118th-congress/house-resolution/786/cosponsors" class="text-blue-500 font-bold">House Resolution 786 Summary</a>
                    </div>
                    <p class="mt-2">This link takes you to the official summary of House Resolution 786 introduced by Cori Bush (D-MO) on October 16, 2023.</p>
                  </div>

                  <hr class="my-6 border-t border-gray-300"></hr>

{/* BDS Movement */}
                  <div class="mb-6">
                    <div class="flex justify-between">
                      <a href="https://bdsmovement.net/" class="text-blue-500 font-bold">BDS Movement</a>
                    </div>
                    <p class="mt-2">The Boycott, Divestment, Sanctions (BDS) movement works to end international support for Israel's oppression of Palestinians and pressure Israel to comply with international law.</p>
                  </div>

                  <hr class="my-6 border-t border-gray-300"></hr>
{/* JVP */}
                  <div class="mb-6">
                    <div class="flex justify-between">
                      <a href="https://www.jewishvoiceforpeace.org/" class="text-blue-500 font-bold">Jewish Voice for Peace</a>
                    </div>
                    <p class="mt-2">Jewish Voice for Peace is the largest progresive Jewish anti-Zionist organization in the world and has organized countless demonstrations around the world over the past few months.</p>
                  </div>

{/* JVP */}
{/* <div class="mb-6">
                    <div class="flex justify-between">
                      <a href="https://www.jewishvoiceforpeace.org/" class="text-blue-500 font-bold">Jewish Voice for Peace</a>
                    </div>
                    <p class="mt-2">Jewish Voice for Peace is the largest progresive Jewish anti-Zionist organization in the world and has organized countless demonstrations around the world over the past few months.</p>
                  </div> */}

                  {/* Light gray line breaks */}
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