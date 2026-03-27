export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
  icon: string; // key for the 3D wireframe shape
}

export const projects: Project[] = [
  {
    title: "Menace of the Seagull",
    description:
      "VR simulation where players experience getting attacked by a bird. Built for Oculus Quest 2 with interactive environments and spatial audio.",
    tags: ["Unity", "C#", "VR", "Oculus Quest 2"],
    url: "https://github.com/hamzzgab/MenaceOfTheSeagull",
    icon: "bird",
  },
  {
    title: "3D Tic-Tac-Toe",
    description:
      "3D tic-tac-toe game built with OpenGL featuring custom shaders, GUI overlay, and interactive camera controls.",
    tags: ["C++", "OpenGL", "GLSL", "Shaders"],
    url: "https://github.com/hamzzgab/3DTicTacToe",
    icon: "cube",
  },
  {
    title: "DAS-GAND",
    description:
      "MSc Dissertation — Mitigating data collection challenges using Conditional GANs. Trained ResNet50 and MobileNetV3 with Keras/TensorFlow to generate synthetic images that boost ML model performance on unseen data.",
    tags: ["Python", "TensorFlow", "Keras", "GANs", "Computer Vision"],
    url: "https://github.com/hamzzgab/DAS-GAND",
    icon: "network",
  },
  {
    title: "Real-Time Rendering",
    description:
      "OpenGL-based real-time rendering engine built during MSc coursework. Implements shading models, texture mapping, and lighting techniques.",
    tags: ["C++", "OpenGL", "GLSL", "Computer Graphics"],
    url: "https://github.com/hamzzgab/Real-Time-Rendering",
    icon: "sphere",
  },
  {
    title: "Airbnb Rating Prediction",
    description:
      "Machine learning pipeline to predict Airbnb listing ratings using feature engineering, exploratory data analysis, and ensemble models.",
    tags: ["Python", "Pandas", "scikit-learn", "ML"],
    url: "https://github.com/hamzzgab/Airbnb-Rating-Prediction",
    icon: "chart",
  },
  {
    title: "Real-Time Animation",
    description:
      "Character animation system with skeletal rigging, inverse kinematics, and motion blending implemented in OpenGL.",
    tags: ["C++", "OpenGL", "Animation", "IK"],
    url: "https://github.com/hamzzgab/Real-Time-Animation",
    icon: "figure",
  },
];
