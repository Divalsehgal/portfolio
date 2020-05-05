import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";
const SocialProfile = (props) => {
  const { image, link } =props.socialProfile;
  return (
    <span>
      <a href={link}>
        <img
          alt="profiles"
          src={image}
          style={{ height: 35, width: 35, margin: 10 }}
        />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
    <div>
      <h1>Connect with me !</h1>
      <div>
        {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => (
            <SocialProfile
              key={SOCIAL_PROFILE.id}
              socialProfile={SOCIAL_PROFILE}
            />
          )
        )}
      </div>
    </div>
  );


export default SocialProfiles;
