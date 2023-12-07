import React from 'react'
import logo from '../resources/logo.jpg'
import Form from './Form'
import RepCard from './RepCard'
import SenCard from './SenCard'


function FindMyRep ({ userSenators, setUserSenators, userRepresentative, setUserRepresentative }) {

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
                { userRepresentative ? userRepresentative.map(representative => {return (<RepCard representative={representative} />)}) : <></> }
                { userSenators ? userSenators.map(senator => {return (<SenCard senator={senator}/>)}) : <></>}
                <Form userSenators={userSenators} setUserSenators={setUserSenators} userRepresentative={userRepresentative} setUserRepresentative={setUserRepresentative} />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindMyRep