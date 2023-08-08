import React, { useRef } from 'react'
import { useState } from "react"

const initialFormData = {
    username:"",
    about: "",
    photo: "",
    coverPhoto: "",
    firstName:"",
    lastName: "",
    dob:"",
    email:"",
    password:"",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
}

function SignUp() {
    const [form, setForm] = useState(initialFormData)

    const coverPhotoInput = useRef(null)
    const photoInput = useRef(null)

    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setForm(prevForm => ({
            ...prevForm,
            [name] : type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(form)
        alert(`Form submitted successfully!! 
Form data: ${JSON.stringify(form, null, 5)}`)
    }

    function handleClick(event) {
        event.preventDefault()
        setForm(initialFormData)
    }

    function photoOnChange() {
        setForm(prevForm => ({
            ...prevForm,
            photo: photoInput.current.files[0].name
        }))
    }

    function coverPhotoOnChange() {
        setForm(prevForm => ({
            ...prevForm,
            coverPhoto: coverPhotoInput.current.files[0].name
        }))
    }

    return (
        <div className={`form--div ${darkMode ? "": "dark"}`}>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={toggleDarkMode} >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            <form>
                <h2>Registration Form</h2>
                <h3>Profile</h3>
                <p>This information will be displayed publicly so be careful what you share.</p>
                <br />

                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    className="narrow-input"
                />

                <label htmlFor="about">About</label>
                <textarea
                    id="about"
                    rows="5"
                    name="about"
                    value={form.about}
                    onChange={handleChange}
                    className="wide-input"
                />
                <p>Write a few sentences about yourself.</p>

                <label htmlFor="photo">Photo</label>
                <div className="photo">
                    <img src="https://svgshare.com/i/4V0.svg" className="photo-img"/>
                    <label id="photo" className="photo-change-label">
                        <input 
                        type="file"
                        accept=".jpg, .jpeg, .png" 
                        ref={photoInput}
                        onChange={photoOnChange}
                        />
                        Change
                    </label>
                    <h4 className="photo--file--name">{form.photo}</h4>
                </div>

                <label htmlFor="coverPhoto">Cover Photo</label>
                <label className="coverPhoto">
                    <span>{form.coverPhoto ? form.coverPhoto : "Upload a file"}</span>
                    {/* <span>Upload a file</span> */}
                    <input
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        id="coverPhoto" 
                        ref={coverPhotoInput}
                        onChange={coverPhotoOnChange}
                    />
                </label>

                <br /> <br />
                <hr /> 
                <br />

                <h3>Personal Information</h3>
                <p>Use a permanent address where you can receive mail.</p>
                <br />

                <div className="grid-name">
                    <label htmlFor="firstName">First name</label>
                    <label htmlFor="lastName">Last name</label>
                    <input 
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className="grid-input"
                    />          
                    <input 
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="grid-input"
                    />      
                </div>

                <label htmlFor="dob">Date of birth</label>
                <input 
                    type="date"
                    id="dob"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className="narrow-input"
                />

                <label htmlFor="email">Email address</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="medium-input"
                />
                <label htmlFor="password">Create a password </label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="narrow-input"
                    autoComplete="on"
                />

                <label htmlFor="country">Country</label>
                <select 
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                >
                    <option value="">--Select--</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                </select>

                <label htmlFor="streetAddress">Street Address</label>
                <input 
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={form.streetAddress}
                    onChange={handleChange}
                    className="wide-input"
                />

                <div className="grid-address">
                    <label htmlFor="city">City</label>
                    <label htmlFor="state">State / Province</label>
                    <label htmlFor="postalCode">ZIP / Postal code</label>

                    <input 
                        type="text"
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                    />
                                    
                    <input 
                        type="text"
                        id="state"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                    />
                                    
                    <input 
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={form.postalCode}
                        onChange={handleChange}
                    />
                </div>

                <br /> <br />
                <hr /> 
                <br />

                <h3>Notifications</h3>
                <p>We'll always let you know about important changes, but you pick what else you want to hear about.</p>
                <br />

                <label>By Email</label>

                <div className="byEmail--checkbox">
                    <input
                        id="comments"
                        type="checkbox"
                        name="comments"
                        checked={form.comments}
                        onChange={handleChange} 
                    />
                    <div>
                        <label htmlFor="Comments">Comments</label>
                        <p>Get notified when someones posts a comment on a posting.</p>
                    </div>
                </div>
                <div className="byEmail--checkbox">
                    <input
                        id="candidates"
                        type="checkbox"
                        name="candidates"
                        checked={form.candidates}
                        onChange={handleChange}  
                    />
                    <div>
                        <label htmlFor="Candidates">Candidates</label>
                        <p>Get notified when a candidate applies for a job.</p>
                    </div>
                </div>
                <div className="byEmail--checkbox">
                    <input
                        id="offers"
                        type="checkbox"
                        name="offers" 
                        checked={form.offers}
                        onChange={handleChange} 
                    />
                    <div>
                        <label htmlFor="Offers">Offers</label>
                        <p>Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                </div>
                <br />
                
                <label htmlFor="pushNotifications">Push Notifications</label>
                <p style={{marginTop:"12px"}}>These are delivered via SMS to your mobile phone.</p>
                
                <div className="radiobutton">
                    <input
                        id="everything"
                        type="radio"
                        name="pushNotifications" 
                        value="everything"
                        checked={form.pushNotifications === "everything"}
                        onChange={handleChange}
                    />
                    <label htmlFor="everything">Everything</label>
                </div>
                <div className="radiobutton">
                    <input
                        id="sameAsEmail"
                        type="radio"
                        name="pushNotifications" 
                        value="sameAsEmail"
                        checked={form.pushNotifications === "sameAsEmail"}
                        onChange={handleChange}
                    />
                    <label htmlFor="sameAsEmail">Same as email</label>
                </div>
                <div className="radiobutton">
                    <input
                        id="noNotifications"
                        type="radio"
                        name="pushNotifications"
                        value="noNotifications" 
                        checked={form.pushNotifications === "noNotifications"}
                        onChange={handleChange}
                    />
                    <label htmlFor="noNotifications">No push notifications</label>
                </div>

                <br /> <br />
                <hr /> 
                <br />

                <div className="cancel-save-div">
                    <button onClick={handleClick} className="cancel-button">Cancel</button>
                    <button onClick={handleSubmit} className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp