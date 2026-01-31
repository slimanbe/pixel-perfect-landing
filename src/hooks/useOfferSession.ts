import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useOfferSession = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const createSession = useCallback(async () => {
    setIsLoading(true);
    try {
      // Generate a unique session ID
      const newSessionId = crypto.randomUUID();
      
      // Create the session in the database
      const { error } = await supabase
        .from('offer_completions')
        .insert({ session_id: newSessionId });

      if (error) {
        console.error('Failed to create session:', error);
        return null;
      }

      setSessionId(newSessionId);
      return newSessionId;
    } catch (error) {
      console.error('Error creating session:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { sessionId, createSession, isLoading };
};
