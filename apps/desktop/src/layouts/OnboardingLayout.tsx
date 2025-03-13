import { motion, AnimatePresence } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface OnboardingLayoutProps extends PropsWithChildren {
  currentStep: number;
  totalSteps: number;
}

export const OnboardingLayout = ({
  children,
  currentStep,
  totalSteps,
}: OnboardingLayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FBFBFB] p-6 dark:bg-[#1C1C1E]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl rounded-2xl bg-white bg-opacity-50 shadow-xl 
                   backdrop-blur-xl dark:bg-[#2C2C2E] dark:bg-opacity-50"
      >
        {/* Progress Bar */}
        <div className="h-1 overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-800">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
        </div>

        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
