interface WelcomeStepProps {
  onNext: () => void;
}

export const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  return (
    <div className="space-y-6 text-center">
      <div className="mx-auto mb-8 h-24 w-24">
        <img
          src="/icon.png"
          alt="CapIQ"
          className="h-full w-full rounded-xl shadow-lg"
        />
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Welcome to CapIQ
      </h1>

      <p className="mx-auto max-w-md text-gray-600 dark:text-gray-400">
        Let&#39;s set up CapIQ to help you organize and manage your photo and
        video library.
      </p>

      <button
        onClick={onNext}
        className="mt-8 rounded-md bg-blue-500 px-6 py-2 
                   text-white transition-colors hover:bg-blue-600"
      >
        Continue
      </button>
    </div>
  );
};
