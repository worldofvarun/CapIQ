import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { APP_CONSTANTS } from '@/constants/app';

interface AuthState {
  apiKey: string | null;
  setApiKey: (apiKey: string) => void;
  clearApiKey: () => void;
  validateApiKey: (apiKey: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      apiKey: null,
      setApiKey: (apiKey) => set({ apiKey }),
      clearApiKey: () => set({ apiKey: null }),
      validateApiKey: async (apiKey: string) => {
        try {
          return apiKey.startsWith('sk-');
        } catch (error) {
          console.error('API key validation failed:', error);
          return false;
        }
      },
    }),
    {
      name: APP_CONSTANTS.STORAGE_KEYS.AUTH,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ apiKey: state.apiKey }),
    },
  ),
);

// Type-safe selector hooks
export const useApiKey = () => useAuthStore((state) => state.apiKey);
export const useSetApiKey = () => useAuthStore((state) => state.setApiKey);
export const useClearApiKey = () => useAuthStore((state) => state.clearApiKey);
export const useValidateApiKey = () =>
  useAuthStore((state) => state.validateApiKey);
