import React, { useState } from 'react'


const Form = ({ representatives, setRepresentatives, setFormDisplay }) => {
    const repLookupURL = "https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=";
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState({
        line1: "",
        city: "",
        state: "",
        zip: ""
    });

    function resetForm (e) {
        e.preventDefault();
        setName("")
        setAddress({
            line1: "",
            city: "",
            state: "",
            zip: ""
        })
        setFormDisplay(false)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const addressParams = "%" + address.line1.replaceAll(" ", "%20") + "%20" + address.city + "%20" + address.state + "%20" + address.state + "%20" + address.zip
        console.log(repLookupURL + addressParams)
        fetch(repLookupURL + addressParams + "&levels=country&levels=administrativeArea1&roles=legislatorUpperBody&roles=legislatorLowerBody&roles=headOfGovernment&key=AIzaSyB3B5EEu9oGWIZa8hIJKa1a2VxNcBZtoP4", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(representatives => {
                    setRepresentatives(representatives)
                    console.log(representatives)
                })
            } else {
                r.json().then(data => setErrors(data.errors))
            }
        })
    }

    return (
        <div>
        <h2 class="text-xl font-bold mt-6 mb-4">Enter your information to find your representatives:</h2>
        <div class="mb-6">
            <div class="flex justify-between">
                {errors.map(err => {
                    return (<p>{err.message}</p>)
                })}
                <form onSubmit={handleSubmit()}>
                    <div class="md:col-span-5">
                        <label htmlFor="name">Name: </label>
                        <input 
                            required
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
                            required
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
                            required
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
                            required
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
                            required
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            type="text"
                            id="zip"
                            value={ address.zip }
                            onChange={ e => setAddress({...address, zip: e.target.value}) }
                        />
                    </div>
                    <button onClick={resetForm()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather py-2 px-4 rounded"> Reset </button>
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-merriweather py-2 px-4 rounded"> Submit </button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Form