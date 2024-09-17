import React, { useState, useEffect } from "react";
import signupImg from "../assets/SignupImg.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { WalletAddressAtom } from "../atom";

const SignupForm = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

    useEffect(() => {
    if (user) {
      const sendUserDataToBackend = async () => {
        try {
          const userData = {
            Name: user.given_name || formData.firstName,
            lastName: user.family_name || formData.lastName,
            email: user.email,
            auth0Id: user.sub,
            WalletAddress : WalletAddressAtom

          };

          const token =await axios.post("http://localhost:3001/users/register", userData);
          if(token){
            localStorage.setItem("token" , token)
          }
          console.log("User data sent to backend");
        } catch (error) {
          console.error("Error sending user data to backend", error);
        }
      };

      sendUserDataToBackend();
    }
  }, [user]); 

  return (
    <div className="min-h-screen">
      <img
        src={signupImg}
        alt=""
        className="relative h-[730px] w-full flex items-center justify-center overflow-hidden "
      />
      <div className="absolute bg-gray-900 rounded-3xl top-[25px] w-[1400px] right-[80px] h-[680px] overflow-hidden">
        <img
          src={signupImg}
          alt=""
          className="absolute w-[800px] h-[680px] rounded-3xl"
        />
        <div className="absolute right-[70px] top-[80px] p-8 rounded-lg w-full max-w-md shadow-md">
          <h2 className="text-2xl font-bold text-white mb-6">CREATE AN ACCOUNT</h2>
          <p className="text-gray-400 mb-6">
            Already have an account?{" "}
            <a href="/login" className="text-green-400 hover:underline">
              Login
            </a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="h-4 w-4 text-green-400 bg-gray-700 border-gray-600 rounded focus:ring-green-400"
              />
              <label className="ml-2 text-gray-400">
                I agree to the{" "}
                <a href="/terms" className="text-green-400 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">Or register with</div>
          <div className="flex gap-4 mt-4 justify-center">
            { (
              <button
                onClick={() => loginWithRedirect({ connection: "google-oauth2" })}
                className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg border border-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <span>Google</span>
              </button>
            )}
            <button className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg border border-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400">
              <span>Apple</span>
            </button>
          </div>
        </div>

        {/* Conditionally render user details */}
        {user && (
          <div className="text-white font-bold mt-4">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <img src={user.picture} alt="User profile" className="w-16 h-16 rounded-full" />
            <button onClick={() => logout()} className="text-red-500 mt-4">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
