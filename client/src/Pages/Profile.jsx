import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      {user && user.name && user.email ? (  
        <div>
          <h2 className="text-2xl font-semibold mb-6">My Profile</h2>
          <div className="mb-4">
            <p className="text-lg">
              <strong>Name:</strong> {user.name}  
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {user.email}  
            </p>
          </div>
          <button
            onClick={() => navigate(`/dashboard`)}  
            className="flex items-center gap-2 mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Go to Dashboard
          </button>
        </div>
      ) : (
        <p>Loading...</p>  
      )}
    </div>
  );
};

export default Profile;
