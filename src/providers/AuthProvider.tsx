"use client";

import { ReactNode } from "react";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { readAuthCookie } from "@/lib/helpers/cookie";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const hasAuthToken = readAuthCookie("oasisAfrikUserId");

  useCurrentUser(!!hasAuthToken);

  return <>{children}</>;
};
