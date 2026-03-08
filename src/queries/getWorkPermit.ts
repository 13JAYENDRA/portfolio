// queries/getWorkPermit.ts
import { WorkPermit } from "../types";
import { mockWorkPermit } from "../data/mockData";

// Temporarily using mock data instead of DatoCMS
export async function getWorkPermit(): Promise<WorkPermit> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));
  console.log("🚀 ~ getWorkPermit ~ using mock data:", mockWorkPermit);
  return mockWorkPermit;
}

// Original DatoCMS implementation (commented out)
/*
import datoCMSClient from './datoCMSClient';

const GET_WORK_PERMIT = `
  query {
    workPermit {
      visaStatus
      expiryDate
      summary
      additionalInfo
    }
  }
`;

export async function getWorkPermit(): Promise<WorkPermit> {
  const data = await datoCMSClient.request<{ workPermit: WorkPermit }>(GET_WORK_PERMIT);
  return data.workPermit;
}
*/
