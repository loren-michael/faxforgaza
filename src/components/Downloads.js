import React, { useState } from 'react'
import logo from '../resources/logo.jpg'
import GovernorLetter from '../resources/GovernorLetter.pdf'
import HouseRepLetter from '../resources/HouseRepLetter.pdf'
import SenatorLetter from '../resources/SenatorLetter.pdf'


const Downloads = () => {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState({
        line1: "",
        city: "",
        state: "",
        zip: ""
    });
    const [representative, setRepresentative] = useState({});



    return (
        <div>
        <div class="bg-blue-100">
            <div class="container mx-auto py-8">
                <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div class="col-span-4 sm:col-span-3">
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="flex flex-col items-center">
                                <img src={ logo } alt="Palestine" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"></img>
                                <h1 class="text-xl font-merriweather font-bold">Fax for Gaza</h1>
                                <p class="text-gray-600 font-merriweather">PDF files to use to contact your representatives in congress</p>
                                <p class="text-gray-500 font-merriweather">Image by Alif Mauladani</p>
                                {/* <div class="mt-6 flex flex-wrap gap-4 justify-center"> */}
                                    {/* <a href="/" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-merriweather">Contact</a> */}
                                    {/* <button href="../resources/LorenHartmanResume.pdf" class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded font-merriweather">Resume</button> */}
                                {/* </div> */}
                            </div>
                    </div>
                </div>
                <div class="col-span-4 sm:col-span-9">
                    <div class="bg-white shadow rounded-lg p-6">
                        <h2 class="text-xl font-bold mb-4 font-merriweather">Fax For Gaza</h2>
                        <p class="text-gray-700 font-merriweather">Fax for Gaza is a site meant to make it a little easier to contact your representatives by providing PDF files that you can fax for free to your representatives using FaxZero.com
                        <br></br><br></br>
                        It is our hope that if people are given these resources and links they will be more likely to utilize them daily to flood our representatives with faxes directly from their phones.
                        <br></br><br></br>
                        </p>

                        <hr class="my-6 border-t border-gray-300"></hr>

                    {/* <h3 class="font-semibold text-center mt-3 -mb-2">
                        Find me on
                    </h3>
                    <div class="flex justify-center items-center gap-6 my-6">
                        <a class="text-gray-700 hover:text-blue-600" aria-label="Visit Loren's LinkedIn" href="https://www.linkedin.com/in/lorenhartman/"
                            target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                                <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                        </a>
                        <a class="text-gray-700 hover:text-blue-600" aria-label="Visit Loren's GitHub" href="https://github.com/loren-michael"
                            target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 text-gray-700 hover:text-blue-600">
                            <path fill="currentColor"
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                            </path>
                            </svg>
                        </a> */}
                        {/* <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href="/"
                            target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-6">
                                <path fill="currentColor"
                                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                </path>
                            </svg>
                        </a> */}
                        {/* <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Instagram" href="/"
                            target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                                <path fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                </path>
                            </svg>
                        </a> */}
                        {/* <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Twitter" href="/"
                            target="_blank" rel="noopener noreferrer"><svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                </path>
                            </svg>
                        </a> */}
                    {/* </div> */}

                    <h2 class="text-xl font-bold mt-6 mb-4">Enter your information to find your representatives:</h2>
                    <div class="mb-6">
                        <div class="flex justify-between">
                            <form className="lookup-information">
                                <div class="md:col-span-5">
                                    <label htmlFor="name">Name: </label>
                                    <input 
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        type="text"
                                        id="name"
                                        value={ name }
                                        onChange={ e => setName(e.target.value) }
                                    />
                                </div>
                                <div class="md:col-span-5">
                                    <label htmlFor="line1">Street: </label>
                                    <input 
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        type="text"
                                        id="street"
                                        value={ address.line1 }
                                        onChange={ e => setAddress({...address, line1: e.target.value}) }
                                    />
                                </div>
                                <div class="md:col-span-2">
                                    <label htmlFor="line1">City: </label>
                                    <input 
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        type="text"
                                        id="city"
                                        value={ address.city }
                                        onChange={ e => setAddress({...address, city: e.target.value}) }
                                    />
                                </div>
                                <div class="md:col-span-1">
                                    <label htmlFor="line1">State: </label>
                                    <input 
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        type="text"
                                        id="state"
                                        value={ address.state }
                                        onChange={ e => setAddress({...address, state: e.target.value}) }
                                    />
                                </div>
                                <div class="md:col-span-1">
                                    <label htmlFor="line1">Zip Code: </label>
                                    <input 
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        type="text"
                                        id="zip"
                                        value={ address.zip }
                                        onChange={ e => setAddress({...address, zip: e.target.value}) }
                                    />
                                </div>
                                <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0 font-merriweather" > Submit </button>
                            </form>
                        </div>
                    </div>

                    <hr class="my-6 border-t border-gray-300"></hr>

                    <h2 class="text-xl font-bold mt-6 mb-4">PDF Downloads</h2>
                    <div class="mb-6">
                        <div class="flex justify-between">
                            <span class="text-blue-500 font-bold">Letter to your House Representative</span>
                            <span>
                                <div>
                                    <a href={require("../resources/HouseRepLetter.pdf")} download="myFile" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0 font-merriweather">Fillable House Rep PDF</a>
                                </div>
                            </span>
                        </div>
                        <p class="mt-2">Download this PDF and fill out the name of your representative, your name and address, date, and add a signature if you would like.
                        </p>
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between">
                            <span class="text-blue-500 font-bold">Letter to your State Senators</span>
                            <span>
                                <div>
                                    <a href={require("../resources/SenatorLetter.pdf")} download="myFile" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0 font-merriweather">Fillable Senator PDF</a>
                                </div>
                            </span>
                        </div>
                        <p class="mt-2">Download this PDF and fill out the name of your senators, your name and address, date, and add a signature if you would like.
                        </p>
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between">
                            <span class="text-blue-500 font-bold">Letter to your Governor</span>
                            <span>
                                <div>
                                    <a href={require("../resources/GovernorLetter.pdf")} download="myFile" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0 font-merriweather">Fillable Governor PDF</a>
                                </div>
                            </span>
                        </div>
                        <p class="mt-2">Download this PDF and fill out the name of your Governor, your name and address, date, and add a signature if you would like.
                        </p>
                    </div>
                    {/* <div class="mb-6">
                        <div class="flex justify-between">
                            <span class="text-blue-500 font-bold">Sound Assistant</span>
                            <p>
                                <span class="text-blue-300 mr-2">at Ringling Bros and Barnum and Bailey</span>
                                <span class="text-blue-300">2007-2008</span>
                            </p>
                        </div>
                        <p class="mt-2">Set up and ran sound for the live band during circus shows. Responsibilities included managing truck pack and coordinating local union workers with other departments.
                        </p>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Downloads