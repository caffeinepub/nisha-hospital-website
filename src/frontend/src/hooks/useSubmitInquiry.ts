import { useState } from 'react';
import { useActor } from './useActor';

export function useSubmitInquiry() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitInquiry = async (name: string, email: string, subject: string, message: string) => {
    if (!actor) {
      setIsError(true);
      setError('Unable to connect to the server. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
    setError(null);

    try {
      await actor.submitInquiry(name, email, subject, message);
      setIsSuccess(true);
    } catch (err: any) {
      setIsError(true);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSuccess(false);
    setIsError(false);
    setError(null);
  };

  return {
    submitInquiry,
    isSubmitting,
    isSuccess,
    isError,
    error,
    reset,
  };
}
