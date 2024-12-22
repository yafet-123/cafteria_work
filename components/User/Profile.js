import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Gravatar from 'react-gravatar';
import {UpdateProfile} from './UpdateProfile'

const Profile = ({user}) => {
  const [updatemodalOn, setupdateModalOn] = useState(false);
  const [updateuserid,setupdateuserid] = useState()
  const [updatefirstName,setupdatefirstName] = useState()
  const [updatelastName,setupdatelastName] = useState()
  const [updateage,setupdateage] = useState("")
  const [updateUserName,setupdateUserName] = useState("")
  const [updateemail,setupdateemail] = useState("")

  const clickedForupdate = () => {
    setupdateModalOn(true)
  }
  return (
    <div className="flex flex-col mb-5">      
      <div className="bg-white rounded-lg p-8 shadow-md w-full lg:w-[26rem] text-center">
        <h1 className="text-center text-2xl font-bold mb-5">Profile</h1>
        <div className="flex items-center justify-center">
          <div className="rounded-full overflow-hidden">
            <Gravatar email={user.email} size={100} />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
          <h2 className="text-lg font-semibold">{user.UserName}</h2>
          <p className="text-gray-500">Age: {user.age}</p>
          <p className="text-gray-500">Email: {user.email}</p>
        </div>

        <button 
          onClick={() => {
            clickedForupdate()
            setupdateuserid(user.user_id)
            setupdatefirstName(user.firstName)
            setupdatelastName(user.lastName)
            setupdateage(user.age)
            setupdateUserName(user.UserName)
            setupdateemail(user.email)
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Edit Profile
        </button>
      </div>
      {updatemodalOn && 
        <UpdateProfile
          updateuserid={updateuserid} 
          updatefirstName={updatefirstName}
          updatelastName={updatelastName}
          updateage={updateage}
          updateUserName={updateUserName}
          updateemail={updateemail}
          setupdateModalOn={setupdateModalOn}
          setupdatefirstName={setupdatefirstName}
          setupdatelastName={setupdatelastName}
          setupdateage={setupdateage}
          setupdateUserName={setupdateUserName}
          setupdateemail={setupdateemail}
        />
      }
    </div>

    
  );
};

export default Profile;
