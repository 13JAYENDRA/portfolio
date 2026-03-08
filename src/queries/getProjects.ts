// queries/getProjects.ts
import { Project } from "../types";
import { mockProjects } from "../data/mockData";

// Temporarily using mock data instead of DatoCMS
export async function getProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));
  console.log("🚀 ~ getProjects ~ using mock data:", mockProjects);
  return mockProjects;
}

// Original DatoCMS implementation (commented out)
/*
import datoCMSClient from './datoCMSClient';

const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techUsed
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  return data.allProjects;
}
*/
