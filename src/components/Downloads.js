import React, { useState } from 'react'
import logo from '../resources/logo.jpg'
import GovernorLetter from '../resources/GovernorLetter.pdf'
import HouseRepLetter from '../resources/HouseRepLetter.pdf'
import SenatorLetter from '../resources/SenatorLetter.pdf'


const Downloads = () => {
    const repLookupURL = "https://www.googleapis.com/civicinfo/v2/representatives";
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState({
        line1: "",
        city: "",
        state: "",
        zip: ""
    });
    const [representatives, setRepresentatives] = useState({});

    const resetForm = () => {
        setAddress({
            line1: "",
            city: "",
            state: "",
            zip: ""
        })
    }

    const handleSubmit = () => {
        e.preventDefault();
        fetch(repLookupURL, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(address)
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(representatives => {
                    setRepresentatives(representatives)
                    resetForm()
                })
            } else {
                r.json().then(data => setErrors(data.errors))
            }
        })
    }


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

                    <h2 class="text-xl font-bold mt-6 mb-4">Enter your information to find your representatives:</h2>
                    <div class="mb-6">
                        <div class="flex justify-between">
                            {errors.map(err => {
                                return (<p>{err}</p>)
                            })}
                            <form className="lookup-information" onSubmit={handleSubmit}>
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
                                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather py-2 px-4 rounded"> Submit </button>
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
                                    <a href={require("../resources/HouseRepLetter.pdf")} download="myFile" class="bg-blue-500 hover:bg-blue-700 text-white font-merriweather font-bold py-2 px-4 rounded">Fillable House Rep PDF</a>
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
                                    <a href={require("../resources/SenatorLetter.pdf")} download="myFile" class="bg-blue-500 hover:bg-blue-700 text-white font-merriweather font-bold py-2 px-4 rounded">Fillable Senator PDF</a>
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
                                    <a href={require("../resources/GovernorLetter.pdf")} download="myFile" class="bg-blue-500 hover:bg-blue-700 text-white font-merriweather font-bold py-2 px-4 rounded">Fillable Governor PDF</a>
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