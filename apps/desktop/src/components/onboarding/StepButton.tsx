import { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface StepButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const StepButton = ({
  children,
  variant = 'primary',
  ...props
}: StepButtonProps) => {
  const baseStyles =
    'px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: `${baseStyles} bg-blue-500 hover:bg-blue-600 text-white 
              focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed`,
    secondary: `${baseStyles} bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                dark:hover:bg-gray-700 text-gray-900 dark:text-white 
                focus:ring-gray-500`,
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      className={variants[variant]}
      {...props}
    >
      {children}
    </motion.button>
  );
};
