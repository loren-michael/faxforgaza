import React, { useContext, useEffect } from 'react';
import SenCard from './SenCard';
import RepCard from './RepCard';
import { useNavigate } from 'react-router-dom';
import { RepresentativeContext } from '../context/RepresentativeStore';
import { SenatorContext } from '../context/SenatorStore';


function RepDisplay() {
  const navigate = useNavigate()

  const [userRepresentative, setUserRepresentative] = useContext(RepresentativeContext);
  const [userSenators, setUserSenators] = useContext(SenatorContext)

  useEffect(() => {
    if (userRepresentative.length === 0 && userSenators.length === 0) {
      navigate("/findmyrep")
    }
  }, [])

  function handleNavToForm(e) {
    e.preventDefault();
    navigate("/findmyrep");
  }

  return (
    <div>
      <div class="h-screen flex-grow bg-green-100">
        <div class="container mx-auto py-8">
          <div class="col-span-4 sm:col-span-9">
            <div class="bg-white shadow rounded-lg p-6">
              <br></br>
                {userRepresentative.map(representative => {
                  return (
                    <RepCard representative={representative} />
                  )
                })}
              <br></br>
                {userSenators.map(senator => {
                  return(
                    <SenCard senator={senator} />
                  )
                })}
              <br></br>
              <button type="button" onClick={e => handleNavToForm(e)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather p-2 rounded justify-center" data-te-ripple-init data-te-ripple-color="light" > Back to Form </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepDisplay