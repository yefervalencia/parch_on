"use client";
import React from "react";

type CardTextProps = {
  label: string;
  value: string;
  className?: string;
};

export const CardText: React.FC<CardTextProps> = ({
  label,
  value,
  className,
}) => (
  <p className={className}>
    <strong>{label}</strong>: {value}
  </p>
);
