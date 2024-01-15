import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../resources/logo.jpg';

function Downloads () {
    const navigate = useNavigate();

    function findmyreps() {
        navigate("/findmyrep")
    }

    return (
        <div>
            <div class="bg-blue-100">
                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-1">
                        <div class="col-span-4 sm:col-span-3">
                            <div class="bg-white shadow rounded-lg p-6">
                                <div class="flex flex-col items-center">
                                    <img src={ logo } alt="Palestine" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"></img>
                                    {/* <h1 class="text-xl font-merriweather font-bold">Fax For Gaza</h1> */}
                                    <p class="text-gray-600 font-merriweather">PDF files to use to contact your representatives in congress</p>
                                    <p class="text-gray-500 font-merriweather">Image by Alif Mauladani</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 sm:col-span-9">
                            <div class="bg-white shadow rounded-lg p-6">
                                <h2 class="text-xl font-bold mb-4 font-merriweather">Fax For Gaza</h2>
                                <p class="text-gray-700 font-merriweather">Fax for Gaza makes it a little easier to contact your representatives to support a ceasefire in Palestine by providing PDF files that you can fax for free to your representatives using FaxZero.com
                                <br></br><br></br>
                                It is our hope that if people are given these resources and links they will be more likely to utilize them daily to flood our representatives with faxes directly from their phones.
                                <br></br><br></br>
                                To use this resource, you can either use our form to find your representatives by clicking the button below, or, if you know the names of your representatives or would rather not use our form, you can download our blank form PDF letters below and enter in your information on your device to fax. Once you have your PDF files, go to FaxZero.com using the link above, find your representatives, upload your PDF and send it!
                                <br></br><br></br>
                                This site uses Google's Civic Information API and does NOT save any information about visitors.
                                <br></br>
                                To share any feedback, please write to: faxforgaza at gmail dot com
                                </p>

                                <hr class="my-6 border-t border-gray-300"></hr>

                                {/* { userRepresentative ? userRepresentative.map(representative => {return (<RepCard representative={representative} />)}) : <></> } */}

                                {/* { userSenators ? userSenators.map(senator => {return (<SenCard senator={senator}/>)}) : <></>} */}

                                <div> 
                                    <button onClick={findmyreps} class="bg-blue-500 hover:bg-blue-700 text-white font-merriweather font-bold py-2 px-4 rounded"> Look Up Your Representatives </button>
                                </div>

                                <hr class="my-6 border-t border-gray-300"></hr>

                                <h2 class="text-xl font-bold mt-6 mb-4">Blank Form PDF Downloads</h2>
                                <div class="mb-6">
                                    <div class="flex justify-between">
                                        <span class="text-blue-500 font-bold">Letter to your House Representative</span>
                                        <span>
                                            <div>
                                                <a href={require("../resources/BlankHouseRepLetter.pdf")} download="myFile" class="bg-blue-500 hover:bg-blue-700 text-white font-merriweather font-bold py-2 px-4 rounded">Download</a>
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
                                                <a href={require("../resources/BlankSenatorLetter.pdf")} download="myFile" class="bg-blue-500 hover:bg-blue-700 text-white font-merriweather font-bold py-2 px-4 rounded">Download</a>
                                            </div>
                                        </span>
                                    </div>
                                    <p class="mt-2">Download this PDF and fill out the name of your senators, your name and address, date, and add a signature if you would like.
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

export default Downloads