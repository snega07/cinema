import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/profile.css";
const Profile = () => {
    const [profileData, setProfileData] = useState({
        userName: "snega",
        email: "snega@gmail.com",
        pass: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(profileData);
        console.log("Submitted!");
        setProfileData((prevState) => ({
            ...prevState,
            userName: profileData.userName,
            email: profileData.email,
            pass: profileData.pass,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex-fill"
            style={{
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "500",
                backgroundColor: "#363636",
                overflow: "hidden",
                height: "100vh"

            }}>
            <div className=" row box" style={{ margin: "100px" }} >
                
                <form onSubmit={handleSubmit} className="profileForm">
                    <h1 style={{color:"#ffa500"}}>Profile</h1>
                    <div className="row row-padding">
                        <label className="col-sm-3 lbl">Username:</label>
                        <input className="col-sm-7"
                            type="text"
                            name="userName"
                            value={profileData.userName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row row-padding">
                        <label className="col-sm-3 lbl">Email:</label>
                        <input className="col-sm-7"
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row row-padding">
                        <label className="col-sm-3 lbl">Password:</label>


                        <input

                            type={showPassword ? "text" : "password"}
                            name="pass"
                            value={profileData.pass}
                            onChange={handleChange}
                            className="col-sm-7"
                        />
                        <i style={{ width: "30px", alignItems: "center" }}
                            className="col-sm-1 password-toggle-btn"
                            type="button"
                            onClick={togglePasswordVisibility}

                        >
                            {showPassword ? (<FaEye />) :
                                (<FaEyeSlash />)}
                        </i>


                    </div>
                    <div className="row-padding">
                        <button className="btn"
                            variant="primary"
                            type="Submit"
                            style={{
                                backgroundColor: "#FFA500",
                                borderColor: "#FFA500",
                                color: "black",
                            }}>Save Changes</button></div>
                </form>
            </div>
        </div>

    );
};

export default Profile;