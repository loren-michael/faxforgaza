import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NameContext } from '../context/NameStore';
import { AddressContext } from '../context/AddressStore';
import { SenatorContext } from '../context/SenatorStore';
import { RepresentativeContext } from '../context/RepresentativeStore';


function Form () {
    const navigate = useNavigate();
    const repLookupURL = "https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=";
    const senatorParams = "&levels=country&roles=legislatorUpperBody&key=AIzaSyB3B5EEu9oGWIZa8hIJKa1a2VxNcBZtoP4";
    const repParams = "&levels=country&roles=legislatorLowerBody&key=AIzaSyB3B5EEu9oGWIZa8hIJKa1a2VxNcBZtoP4";
    const [errors, setErrors] = useState([]);

    const [name, setName] = useContext(NameContext);
    const [address, setAddress] = useContext(AddressContext);
    const [userSenators, setUserSenators] = useContext(SenatorContext);
    const [userRepresentative, setUserRepresentative] = useContext(RepresentativeContext);


    // function handleSenFetch() {
    //     const addressParams = "%" + address.line1.replaceAll(" ", "%20") + "%20" + address.city + "%20" + address.state + "%20" + address.state + "%20" + address.zip
    //     fetch(repLookupURL + addressParams + senatorParams, {
    //         method: "GET",
    //         headers: {
    //             "content-type": "application/json",
    //             "accept": "application/json"
    //         }
    //     })
    //         .then(r => {
    //             if (r.ok) {
    //                 r.json().then(data => setUserSenators(data.officials))
    //                 // r.json().then(data => console.log("full data", data, "just officials", data.officials))
    //             } else {
    //                 r.json().then(data => setErrors(data.errors))
    //             }
    //     })
    // }

    // function handleRepFetch() {
    //     const addressParams = "%" + address.line1.replaceAll(" ", "%20") + "%20" + address.city + "%20" + address.state + "%20" + address.state + "%20" + address.zip
    //     fetch(repLookupURL + addressParams + repParams, {
    //         method: "GET",
    //         headers: {
    //             "content-type": "application/json",
    //             "accept": "application/json"
    //         }
    //     })
    //         .then(r => {
    //             if (r.ok) {
    //                 r.json().then(data => setUserRepresentative(data.officials));
    //                 // r.json().then(data => console.log("full data", data, "just officials", data.officials))
    //             } else {
    //                 r.json().then(data => setErrors(data.errors))
    //             }
    //     })
    // }



    function handleSubmit(e) {
        e.preventDefault();
        // console.log(userRepresentative);
        // console.log(userSenators);
        // handleSenFetch();
        // handleRepFetch();
        // SENATOR LOOKUP
        const addressParams = "%" + address.line1.replaceAll(" ", "%20") + "%20" + address.city + "%20" + address.state + "%20" + address.state + "%20" + address.zip
        fetch(repLookupURL + addressParams + senatorParams, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(data => setUserSenators(data.officials))
                    // r.json().then(data => console.log("full data", data, "just officials", data.officials))
                } else {
                    r.json().then(data => setErrors(data.errors))
                }
            })
        // REPRESENTATIVE LOOKUP
        fetch(repLookupURL + addressParams + repParams, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(data => setUserRepresentative(data.officials));
                    // r.json().then(data => console.log("full data", data, "just officials", data.officials))
                } else {
                    r.json().then(data => setErrors(data.errors))
                }
            })
        // console.log(userRepresentative);
        // console.log(userSenators);
        navigate("/myreps")
    }

    function resetForm(e) {
        e.preventDefault();
        setName("");
        setAddress({
            line1: "",
            city: "",
            state: "",
            zip: ""
        });
        setUserRepresentative([]);
        setUserSenators([]);
    }

    return (
        <div>
            <h2 class="text-xl font-bold mt-6 mb-4">Enter your information to find your representatives:</h2>
            <div class="mb-6">
                <div class="flex justify-between">
                    {errors.map(err => {
                        return (<p>{err.message}</p>)
                    })}
                    <form onSubmit={handleSubmit}>
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
                                id="line1"
                                value={ address.line1 }
                                onChange={ e => setAddress({...address, line1: e.target.value}) }
                            />
                        </div>
                        <div class="md:col-span-2">
                            <label htmlFor="city">City: </label>
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
                            <label htmlFor="state">State: </label>
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
                            <label htmlFor="zip">Zip Code: </label>
                            <input 
                                required
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                type="text"
                                id="zip"
                                value={ address.zip }
                                onChange={ e => setAddress({...address, zip: e.target.value}) }
                            />
                        </div>
                        <br></br>
                        <br></br>
                        <span class="p-2">
                            <button onClick={e => resetForm(e)} class="bg-green-700 hover:bg-green-900 text-white font-bold font-merriweather py-2 px-4 rounded"> Reset </button>  
                        </span>
                        <span class="p-2">
                            <button type="submit" class="bg-green-700 hover:bg-green-900 text-white font-bold font-merriweather py-2 px-4 rounded"> Submit </button>
                        </span>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form