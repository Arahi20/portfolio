export interface WorkItem {
  id: number;
  title: string;
  date: string;
  description: string;
  tech: string;
  link?: string;
  video?: string;
  image?: string;
}

export const WORK_DATA: WorkItem[] = [
  {
    id: 1,
    title: 'Kinect Fitness Playground',
    date: 'Jan 2026',
    description:
      'Built a Python fitness application using the Microsoft Xbox Kinect V2 for real-time body movement tracking, automatic rep counting, and form feedback. Implemented experimental heart rate monitoring using Photoplethysmography (PPG) via visual detection, alongside a personal leaderboard and form quality tracker.',
    tech: 'Python · OpenCV · NumPy · SciPy · Pygame',
    link: 'https://github.com/Arahi20/Kinect-Fitness',
    video: 'https://www.youtube.com/embed/UJg7q93IMOE',
  },
  {
    id: 2,
    title: 'Edustruct (Imperial Hackathon)',
    date: 'Nov 2023',
    description:
      "Educational platform developed during IC Hack 2024 to teach children coding visually. Merged Leetcode principles with Scratch's simplicity for interactive 5-minute daily exercises.",
    tech: 'JavaScript · Flask · HTML',
    link: 'https://github.com/christieszi/edustruct',
    image: '/assets/edustruct.png',
  },
  {
    id: 3,
    title: 'Covert Woods (2D Engine)',
    date: 'Nov 2022',
    description:
      'Designed and built a versatile 2D game engine in C# and MonoGame with physics and collision handling, completed as my undergraduate dissertation.',
    tech: 'C# · MonoGame',
  },
];
