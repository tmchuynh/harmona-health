"use client";

import React, { createContext, useContext, ReactNode } from "react";

export interface ToolContextType {
  tool: string;
  toolKit: string;
  toolKitID: string;
  toolInformation: any;
}

const ToolContext = createContext<ToolContextType | undefined>(undefined);

export const ToolProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: ToolContextType;
}) => {
  return <ToolContext.Provider value={value}>{children}</ToolContext.Provider>;
};

export const useToolContext = () => {
  const context = useContext(ToolContext);
  if (context === undefined) {
    throw new Error("useToolContext must be used within a ToolProvider");
  }
  return context;
};
