import { memo } from 'react';
import { FEATURES } from '@/constants/app';

interface FeaturesStepProps {
  onNext: () => void;
  onBack: () => void;
}

const FeatureCard = memo(
  ({
    title,
    description,
    icon,
    gradient,
    borderColor,
  }: (typeof FEATURES)[number]) => (
    <div
      className={`group relative overflow-hidden rounded-2xl border 
               bg-gradient-to-br ${gradient} ${borderColor}
               transition-all duration-300 hover:scale-[1.02]`}
    >
      <div className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="text-4xl">{icon}</div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div
        className={`absolute -bottom-4 -right-4 h-24 w-24 
                   bg-gradient-to-br ${gradient} rounded-full 
                   opacity-50 blur-2xl`}
      />
    </div>
  ),
);

FeatureCard.displayName = 'FeatureCard';

export const FeaturesStep = memo(({ onNext, onBack }: FeaturesStepProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1">
        <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
          Powerful Features
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Discover what makes CapIQ the perfect tool for your media workflow
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-between border-t border-gray-200 pt-8 dark:border-gray-700">
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-600 hover:text-gray-900 
                   dark:text-gray-400 dark:hover:text-white"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="rounded-lg bg-blue-500 px-8 py-2 text-white 
                   transition-colors hover:bg-blue-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
});

FeaturesStep.displayName = 'FeaturesStep';
