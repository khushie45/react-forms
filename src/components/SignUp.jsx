import React, { useEffect, useRef } from 'react'
import { useState } from "react"
import { useForm } from 'react-hook-form'

// const initialFormData = {
//     username: "",
//     about: "",
//     photo: "",
//     coverPhoto: "",
//     firstName: "",
//     lastName: "",
//     dob: "",
//     email: "",
//     password: "",
//     country: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     comments: false,
//     candidates: false,
//     offers: false,
//     pushNotifications: ""
// }

function SignUp() {
    // const [form, setForm] = useState(initialFormData)
    const coverPhotoInput = useRef(null)
    const photoInput = useRef(null)
    const [darkMode, setDarkMode] = React.useState(true)
    const { handleSubmit, register, reset, setValue, formState: { errors } } = useForm();
    const [showPasswordMessage, setShowPasswordMessage] = useState(false)

    const [file, setFile] = useState({
        photo: "",
        coverPhoto: ""
    })

    useEffect(() => {
        setValue('photo', file.photo ? file.photo : "")
        setValue('coverPhoto', file.coverPhoto ? file.coverPhoto : "")
    }, [photoOnChange, coverPhotoOnChange])

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    // function handleChange(event) {
    //     const { name, value, type, checked } = event.target
    //     setForm(prevForm => ({
    //         ...prevForm,
    //         [name]: type === "checkbox" ? checked : value
    //     }))
    // }

    function onSubmit(data, event) {
        event.preventDefault()
        const formDataString = JSON.stringify(data, null, 5);
        alert("Successfully submitted")
        alert("Form Data : " + formDataString)
        console.log(data)
        // console.log(form)
        // Form data: ${JSON.stringify(form, null, 5)}`)
    }

    function handleCancel(event) {
        event.preventDefault()
        reset()
    }

    function photoOnChange() {
        setFile(prevFile => ({
            ...prevFile,
            photo: photoInput.current.files[0].name
        }))
    }

    function coverPhotoOnChange() {
        setFile(prevFile => ({
            ...prevFile,
            coverPhoto: coverPhotoInput.current.files[0].name
        }))
    }

    function passwordFocus() {
        setShowPasswordMessage(true)
    }

    return (
        <div className={`form--div ${darkMode ? "" : "dark"}`}>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={toggleDarkMode} >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Registration Form</h2>
                <h3>Profile</h3>
                <p>This information will be displayed publicly so be careful what you share.</p>
                <br />
                <p>Fields with * are mandatory.</p>

                <label htmlFor="username">Username *</label>
                <input
                    type="text"
                    id="username"
                    // name="username"
                    // value={form.username}
                    // onChange={handleChange}
                    className="narrow-input"
                    {...register('username', { required: 'required' })}
                />
                {errors.username && <span className='error'>{errors.username.message}</span>}

                <label htmlFor="about">About</label>
                <textarea
                    id="about"
                    rows="5"
                    // name="about"
                    // value={form.about}
                    // onChange={handleChange}
                    {...register('about')}
                    className="wide-input"
                />
                <p>Write a few sentences about yourself.</p>

                <label htmlFor="photo">Photo</label>
                <div className="photo">
                    <img src="https://svgshare.com/i/4V0.svg" className="photo-img" />
                    <label id="photo" className="photo-change-label">
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            ref={photoInput}
                            onChange={photoOnChange}
                        />
                        Change
                    </label>
                    <h4 className="photo--file--name">{file.photo}</h4>
                </div>

                <label htmlFor="coverPhoto">Cover Photo</label>
                <label className="coverPhoto">
                    <span className="upload--coverPhoto">{file.coverPhoto ? file.coverPhoto : "Upload a file"}</span>
                    {/* <span className="upload--coverPhoto">Upload a file</span> */}
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
                    <label htmlFor="firstName">First name *</label>
                    <label htmlFor="lastName">Last name *</label>
                    <input
                        type="text"
                        id="firstName"
                        // name="firstName"
                        // value={form.firstName}
                        // onChange={handleChange}
                        className="grid-input"
                        {...register('firstName', { required: 'required' })}
                    />
                    
                    <input
                        type="text"
                        id="lastName"
                        // name="lastName"
                        // value={form.lastName}
                        // onChange={handleChange}
                        className="grid-input"
                        {...register('lastName', { required: 'required' })}
                    />

                    {errors.firstName && <span className='error'>{errors.firstName.message}</span>}
                    {errors.lastName && <span className='error'>{errors.lastName.message}</span>}
                </div>

                <label htmlFor="dob">Date of birth *</label>
                <input
                    type="date"
                    id="dob"
                    // name="dob"
                    // value={form.dob}
                    // onChange={handleChange}
                    className="narrow-input"
                    {...register('dob', { required: 'Please enter date of birth' })}
                />
                {errors.dob && <span className='error'>{errors.dob.message}</span>}

                <label htmlFor="email">Email address *</label>
                <input
                    type="email"
                    id="email"
                    // name="email"
                    // value={form.email}
                    // onChange={handleChange}
                    className="medium-input"
                    {...register("email", {
                        required: "required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {errors.email && <span className='error'>{errors.email.message}</span> }

                <label htmlFor="password">Create a password *</label>
                <input
                    type="password"
                    id="password"
                    // name="password"
                    // value={form.password}
                    // onChange={handleChange}
                    className="narrow-input"
                    autoComplete="on"
                    {...register("password", {
                        required: "required",
                        pattern: {
                          value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                        //   message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
                          message: "required"
                        }
                    })}
                    onFocus={passwordFocus}
                />
                {errors.password && <span className='error'>{errors.password.message}</span>}
                {showPasswordMessage && <p style={{marginTop:"15px"}}>Password must be at least 8 characters long and should have atleast 1 number, 1 letter and 1 symbol</p>}

                <label htmlFor="country">Country *</label>
                <select
                    id="country"
                    // name="country"
                    // value={form.country}
                    // onChange={handleChange}
                    {...register('country', { required: 'Please select a country' })}
                >
                    <option value="">--Select--</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                </select>
                {errors.country && <span className='error'>{errors.country.message}</span>}

                <label htmlFor="streetAddress">Street Address *</label>
                <input
                    type="text"
                    id="streetAddress"
                    // name="streetAddress"
                    // value={form.streetAddress}
                    // onChange={handleChange}
                    className="wide-input"
                    {...register('streetAddress', { required: 'required' })}
                />
                {errors.streetAddress && <span className='error'>{errors.streetAddress.message}</span>}

                <div className="grid-address">
                    <label htmlFor="city">City *</label>
                    <label htmlFor="state">State / Province *</label>
                    <label htmlFor="postalCode">ZIP / Postal code *</label>

                    <input
                        type="text"
                        id="city"
                        // name="city"
                        // value={form.city}
                        // onChange={handleChange}
                        {...register('city', { required: 'required' })}
                    />

                    <input
                        type="text"
                        id="state"
                        // name="state"
                        // value={form.state}
                        // onChange={handleChange}
                        {...register('state', { required: 'required' })}
                    />

                    <input
                        type="text"
                        id="postalCode"
                        // name="postalCode"
                        // value={form.postalCode}
                        // onChange={handleChange}
                        {...register('postalCode', { required: 'required' })}
                    />

                    {errors.city && <span className='error'>{errors.city.message}</span>}
                    {errors.state && <span className='error'>{errors.state.message}</span>}
                    {errors.postalCode && <span className='error'>{errors.postalCode.message}</span>}
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
                        // name="comments"
                        // checked={form.comments}
                        // onChange={handleChange}
                        value="comments"
                        {...register('Notifications')}
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
                        // name="candidates"
                        // checked={form.candidates}
                        // onChange={handleChange}
                        value="candidates"
                        {...register('Notifications')}
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
                        // name="offers"
                        // checked={form.offers}
                        // onChange={handleChange}
                        value="offers"
                        {...register('Notifications')}
                    />
                    <div>
                        <label htmlFor="Offers">Offers</label>
                        <p>Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                </div>
                <br />

                <label htmlFor="pushNotifications">Push Notifications *</label>
                <p style={{ marginTop: "12px" }}>These are delivered via SMS to your mobile phone.</p>

                <div className="radiobutton">
                    <input
                        id="everything"
                        type="radio"
                        // name="pushNotifications"
                        // value="everything"
                        // checked={form.pushNotifications === "everything"}
                        // onChange={handleChange}
                        value="everything"
                        {...register('pushNotifications', {required: 'Please select an option'})}
                    />
                    <label htmlFor="everything">Everything</label>
                </div>
                <div className="radiobutton">
                    <input
                        id="sameAsEmail"
                        type="radio"
                        // name="pushNotifications"
                        // value="sameAsEmail"
                        // checked={form.pushNotifications === "sameAsEmail"}
                        // onChange={handleChange}
                        value="sameAsEmail"
                        {...register('pushNotifications', {required: 'Please select an option' })}
                    />
                    <label htmlFor="sameAsEmail">Same as email</label>
                </div>
                <div className="radiobutton">
                    <input
                        id="noNotifications"
                        type="radio"
                        // name="pushNotifications"
                        // value="noNotifications"
                        // checked={form.pushNotifications === "noNotifications"}
                        // onChange={handleChange}
                        value="noNotifications"
                        {...register('pushNotifications', {required: 'Please select an option' })}
                    />
                    <label htmlFor="noNotifications">No push notifications</label>
                </div>
                <br />
                {errors.pushNotifications && <span className='error'>{errors.pushNotifications.message}</span>}

                <br /> <br />
                <hr />
                <br />

                <div className="cancel-save-div">
                    <button onClick={handleCancel} className="cancel-button">Cancel</button>
                    <button type="submit" className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp