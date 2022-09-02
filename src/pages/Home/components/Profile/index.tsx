import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faUserGroup,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  GithubStats,
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  Stat,
} from "./styles";
import { LoadingScreen } from "../../../../components/LoadingScreen";

const userName = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileData {
  avatarUrl: string;
  name: string;
  bio: string;
  userName: string;
  followers: number;
  githubLink: string;
  location: string;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      setIsLoading(true);
      const response = await api.get(`/users/${userName}`);

      const profile = {
        avatarUrl: response.data.avatar_url,
        name: response.data.name,
        bio: response.data.bio,
        userName: response.data.login,
        followers: response.data.followers,
        githubLink: response.data.html_url,
        location: response.data.location,
      };

      setProfileData(profile);
    }

    fetchProfile();
    setIsLoading(false);
  }, []);

  return (
    <ProfileContainer>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <ProfileContent>
          <img src={profileData.avatarUrl} alt="" />

          <ProfileInfo>
            <h1>{profileData.name}</h1>

            <p>{profileData.bio}</p>

            <GithubStats>
              <Stat>
                <FontAwesomeIcon icon={faGithub} />
                <span>{profileData.userName}</span>
              </Stat>

              <Stat>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{profileData.location}</span>
              </Stat>

              <Stat>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>
                  {profileData.followers === 1
                    ? profileData.followers + " seguidor"
                    : profileData.followers + " seguidores"}
                </span>
              </Stat>
            </GithubStats>
          </ProfileInfo>

          <a href={profileData.githubLink}>
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </ProfileContent>
      )}
    </ProfileContainer>
  );
}
