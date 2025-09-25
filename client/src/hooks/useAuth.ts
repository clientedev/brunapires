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
        return { authenticated: false };
      } catch {
        return { authenticated: false };
      }
    },
    retry: false,
  });

  // Prioritize session auth over Replit auth in non-Replit environments
  const isLoading = replitLoading || sessionLoading;
  const isSessionAuth = sessionCheck?.authenticated;
  const user = replitUser || (isSessionAuth ? { email: 'admin', firstName: 'Admin' } : null);
  const isAuthenticated = !!replitUser || !!isSessionAuth;

  return {
    user,
    isLoading,
    isAuthenticated,
  };
}