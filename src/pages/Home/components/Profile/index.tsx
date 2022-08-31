import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

import {
  GithubStats,
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  Stat,
} from "./styles";

interface ProfileData {
  avatarUrl: string;
  name: string;
  bio: string;
  userName: string;
  followers: number;
  githubLink: string;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      const response = await api.get("/users/rafaelc77");

      const profile = {
        avatarUrl: response.data.avatar_url,
        name: response.data.name,
        bio: response.data.bio,
        userName: response.data.login,
        followers: response.data.followers,
        githubLink: response.data.html_url,
      };

      setProfileData(profile);
    }

    fetchProfile();
  }, []);

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={profileData?.avatarUrl} alt="" />

        <ProfileInfo>
          <h1>{profileData?.name}</h1>

          <p>{profileData?.bio}</p>

          <GithubStats>
            <Stat>
              <BsGithub />
              <span>{profileData?.userName}</span>
            </Stat>
            <Stat>
              <HiUsers />
              <span>{profileData?.followers}</span>
            </Stat>
          </GithubStats>
        </ProfileInfo>

        <a href={profileData?.githubLink}>
          <span>GITHUB</span>
          <BsBoxArrowUpRight />
        </a>
      </ProfileContent>
    </ProfileContainer>
  );
}
