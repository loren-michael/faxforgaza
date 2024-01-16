import React from 'react';
import Form from './Form';

function FindMyRep () {

  return (
    <div>
      <div class="h-screen flex-grow bg-green-100">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-1">
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow rounded-lg p-6">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindMyRep