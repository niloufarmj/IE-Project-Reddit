import React from "react";
import ProfileInfoBox from "./ProfileInfoBox";
import PostItem from "../Post/PostItem";
import Navbar from "../../Searchbar/Navbar";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <main className="dark page">
      <Navbar navPage="home" user={user} />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5">
          {user.posts.map((postId, index) => {
            return <PostItem user={user} postId={postId} key={index} />;
          })}
        </div>
        <div className="col-3">
          <ProfileInfoBox type="user" user={user}/>
        </div>
        <div className="col-2"></div>
      </div>
    </main>
  );
};

export default UserProfile;
