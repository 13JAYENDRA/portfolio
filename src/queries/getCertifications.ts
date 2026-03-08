// queries/getCertifications.ts
import { Certification } from "../types";
import { mockCertifications } from "../data/mockData";

// Temporarily using mock data instead of DatoCMS
export async function getCertifications(): Promise<Certification[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 350));
  console.log("🚀 ~ getCertifications ~ using mock data:", mockCertifications);
  return mockCertifications;
}

// Original DatoCMS implementation (commented out)
/*
import datoCMSClient from './datoCMSClient';

const GET_CERTIFICATIONS = `
  query {
    allCertifications {
      title
      issuer
      issuedDate
      link
      iconName
    }
  }
`;

export async function getCertifications(): Promise<Certification[]> {
  const data = await datoCMSClient.request<{ allCertifications: Certification[] }>(GET_CERTIFICATIONS);
  return data.allCertifications;
}
*/
