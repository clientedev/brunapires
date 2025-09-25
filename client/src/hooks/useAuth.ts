import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  // Try Replit auth first, fallback to simple session check
  const { data: replitUser, isLoading: replitLoading, error: replitError } = useQuery({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  // Check session auth for non-Replit environments
  const { data: sessionCheck, isLoading: sessionLoading } = useQuery({
    queryKey: ["/api/admin/session"],
    queryFn: async () => {
      try {
        const response = await fetch('/api/admin/session');
        if (response.ok) {
          return await response.json();
        }
        throw new Error('Not authenticated');
      } catch {
        return null;
      }
    },
    retry: false,
    enabled: !!replitError, // Only check session if Replit auth failed
  });

  const isLoading = replitLoading || sessionLoading;
  const user = replitUser || (sessionCheck?.authenticated ? { email: 'admin', firstName: 'Admin' } : null);
  const isAuthenticated = !!replitUser || !!sessionCheck?.authenticated;

  return {
    user,
    isLoading,
    isAuthenticated,
  };
}