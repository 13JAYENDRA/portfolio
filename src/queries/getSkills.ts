// queries/getSkills.ts
import { Skill } from "../types";
import { mockSkills } from "../data/mockData";

// Temporarily using mock data instead of DatoCMS
export async function getSkills(): Promise<Skill[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  console.log("🚀 ~ getSkills ~ using mock data:", mockSkills);
  return mockSkills;
}

// Original DatoCMS implementation (commented out)
/*
import datoCMSClient from './datoCMSClient';

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);
  return data.allSkills;
}
*/
