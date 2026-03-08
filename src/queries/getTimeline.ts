// queries/getTimeline.ts
import { TimelineItem } from "../types";
import { mockTimeline } from "../data/mockData";

// Temporarily using mock data instead of DatoCMS
export async function getTimeline(): Promise<TimelineItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));
  console.log("🚀 ~ getTimeline ~ using mock data:", mockTimeline);
  return mockTimeline;
}

// Original DatoCMS implementation (commented out)
/*
import datoCMSClient from './datoCMSClient';

const GET_TIMELINE = `
{
  allTimelines {
   	name
    timelineType
    title
    techStack
    summaryPoints
    dateRange
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(GET_TIMELINE);
  return data.allTimelines;
}
*/
