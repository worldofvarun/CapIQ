import { useState, useCallback } from 'react';
import { OnboardingLayout } from '@/layouts/OnboardingLayout.tsx';
import { WelcomeStep } from '@/components/onboarding/steps/WelcomeStep';
import { FeaturesStep } from '@/components/onboarding/steps/FeaturesStep';
import { APIKeyStep } from '@/components/onboarding/steps/APIKeyStep';
import { useSetApiKey } from '@/stores/authStore';
import { APP_CONSTANTS } from '@/constants/app';

export const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState<number>(
    APP_CONSTANTS.STEPS.WELCOME,
  );
  const setApiKey = useSetApiKey();

  const handleNext = useCallback(() => {
    if (currentStep < APP_CONSTANTS.STEPS.TOTAL) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    if (currentStep > APP_CONSTANTS.STEPS.WELCOME) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const handleApiKeySubmit = useCallback(
    (apiKey: string) => {
      setApiKey(apiKey);
    },
    [setApiKey],
  );

  const renderStep = useCallback(() => {
    switch (currentStep) {
      case APP_CONSTANTS.STEPS.WELCOME:
        return <WelcomeStep onNext={handleNext} />;
      case APP_CONSTANTS.STEPS.FEATURES:
        return <FeaturesStep onNext={handleNext} onBack={handleBack} />;
      case APP_CONSTANTS.STEPS.API_KEY:
        return <APIKeyStep onSubmit={handleApiKeySubmit} onBack={handleBack} />;
      default:
        return null;
    }
  }, [currentStep, handleNext, handleBack, handleApiKeySubmit]);

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={APP_CONSTANTS.STEPS.TOTAL}
    >
      {renderStep()}
    </OnboardingLayout>
  );
};
