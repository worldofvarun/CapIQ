export const APP_CONSTANTS = {
  STORAGE_KEYS: {
    AUTH: 'capiq-auth-storage',
  },
  STEPS: {
    TOTAL: 3,
    WELCOME: 1,
    FEATURES: 2,
    API_KEY: 3,
  },
} as const;

export const FEATURES = [
  {
    title: 'Smart Organization',
    description: 'AI-powered sorting and categorization of your media files',
    icon: '🤖',
    gradient: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/50',
  },
  {
    title: 'Quick Search',
    description: 'Find any photo or video instantly with smart filters',
    icon: '🔍',
    gradient: 'from-green-500/20 to-teal-500/20',
    borderColor: 'border-green-500/50',
  },
  {
    title: 'Auto Labeling',
    description: 'Automatic tagging and description of your content',
    icon: '🏷️',
    gradient: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/50',
  },
  {
    title: 'Face Recognition',
    description: 'Automatically detect and group photos by people',
    icon: '👤',
    gradient: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-500/50',
  },
] as const;
