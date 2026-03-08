// queries/getContactMe.ts
import { ContactMe } from "../types";
import { mockContactMe } from "../data/mockData";

// Temporarily using mock data instead of DatoCMS
export async function getContactMe(): Promise<ContactMe> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  console.log("🚀 ~ getContactMe ~ using mock data:", mockContactMe);
  return mockContactMe;
}

// Original DatoCMS implementation (commented out)
/*
import datoCMSClient from './datoCMSClient';

const GET_CONTACT_ME = `
  query {
    contactMe {
      profilePicture {
        url
      }
      name
      title
      summary
      companyUniversity
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  const data = await datoCMSClient.request<{ contactMe: ContactMe }>(GET_CONTACT_ME);
  return data.contactMe;
}
*/
