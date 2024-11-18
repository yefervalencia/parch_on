// Atoms/Icon.tsx
import React from "react";
import { AlertIcon, XIcon, CheckIcon } from "@primer/octicons-react";

interface IconProps {
  type: "warning" | "cancel" | "confirm";
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ type, size = 48 }) => {
  const icons = {
    warning: <AlertIcon size={size} className="text-yellow-500" />,
    cancel: <XIcon size={size} className="text-red-600" />,
    confirm: <CheckIcon size={size} className="text-green-600" />,
  };

  return <>{icons[type]}</>;
};
