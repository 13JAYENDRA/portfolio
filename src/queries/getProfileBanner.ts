// queries/getProfileBanner.ts
import { ProfileBanner } from "../types";
import { mockProfileBanner } from "../data/mockData";

// Temporarily using mock data instead of DatoCMS
export async function getProfileBanner(): Promise<ProfileBanner> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("🚀 ~ getProfileBanner ~ using mock data:", mockProfileBanner);
  return mockProfileBanner;
}

// Original DatoCMS implementation (commented out)
/*
import datoCMSClient from './datoCMSClient';

const GET_PROFILE_BANNER = `
 {
  profilebanner {
    backgroundImage {
      url
    }
    headline
    resumeLink {
      url
    }
    linkedinLink
    profileSummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
  console.log("🚀 ~ getProfileBanner ~ data:", data)
  return data.profilebanner;
}
*/
