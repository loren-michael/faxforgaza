import React, { useEffect, useContext } from 'react';
import logo from '../resources/logo.jpg';
import SenCard from './SenCard';
import RepCard from './RepCard';
import { useNavigate } from 'react-router-dom';
import { RepresentativeContext } from '../context/RepresentativeStore';
import { SenatorContext } from '../context/SenatorStore';


function RepDisplay() {
  const navigate = useNavigate()

  const [userRepresentative, setUserRepresentative] = useContext(RepresentativeContext);
  const [userSenators, setUserSenators] = useContext(SenatorContext)

  // useEffect(() => {
  //   if (userRepresentative.length === 0 && userSenators.length === 0) {
  //     navigate("/findmyrep")
  //   }
  // }, [])

  function handleNavigation() {
    navigate("/findmyrep");
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
                <h2 class="text-xl font-bold mb-4 font-merriweather">Here is your local representative:</h2>
                {/* {userRepresentative.map(representative => {
                  return (
                    <RepCard representative={representative} />
                  )
                })} */}
                <br></br>
                <h2 class="text-xl font-bold mb-4 font-merriweather">Here are your state senators:</h2>
                {/* {userSenators.map(senator => {
                  return(
                    <SenCard senator={senator} />
                  )
                })} */}
                <br></br>
                <button type="button" onClick={handleNavigation} class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather p-2 rounded justify-center" data-te-ripple-init data-te-ripple-color="light" > Back to Form </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default RepDisplay