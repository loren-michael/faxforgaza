import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../resources/logo.jpg'
import RepCard from './RepCard';
import SenCard from './SenCard';
// import RepDisplay from './RepDisplay';
// import Form from './Form';
// import RepCard from './RepCard';
// import SenCard from './SenCard';
// import GovernorLetter from '../resources/GovernorLetter.pdf'
// import HouseRepLetter from '../resources/HouseRepLetter.pdf'
// import SenatorLetter from '../resources/SenatorLetter.pdf'

// https://civicinfo.googleapis.com/civicinfo/v2/representatives?levels=country&levels=administrativeArea1&roles=legislatorUpperBody&roles=legislatorLowerBody&roles=headOfGovernment&key=[YOUR_API_KEY]
// https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=1639%20West%20Farwell%20Avenue%2C%20Chicago%20IL%2060626&levels=country&levels=administrativeArea1&roles=legislatorUpperBody&roles=legislatorLowerBody&roles=headOfGovernment&key=[YOUR_API_KEY]



function Downloads ({ userSenators, userRepresentative }) {
    const navigate = useNavigate();
    // const [userSenators, setUserSenators] = useState([]);
    // const [userRepresentative, setUserRepresentative] = useState([]);

    function findmyreps() {
        navigate("/findmyrep")
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

                                { userRepresentative ? userRepresentative.map(representative => {return (<RepCard representative={representative} />)}) : <></> }

                                { userSenators ? userSenators.map(senator => {return (<SenCard senator={senator}/>)}) : <></>}

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
                                                <a href={require("../resources/HouseRepLetter.pdf")} download="myFile" class="bg-blue-500 hover:bg-blue-700 text-white font-merriweather font-bold py-2 px-4 rounded">Download</a>
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
                                                <a href={require("../resources/SenatorLetter.pdf")} download="myFile" class="bg-blue-500 hover:bg-blue-700 text-white font-merriweather font-bold py-2 px-4 rounded">Download</a>
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