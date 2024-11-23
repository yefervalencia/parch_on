"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Paragraph, CardText } from "@/components";

type TestimonyCardProps = {
  user: string;
  feedback: string;
  location: string;
};

export const TestimonyCard: React.FC<TestimonyCardProps> = ({
  user,
  feedback,
  location,
}) => {
  const { t } = useTranslation();
  return (
    <div className="testimony-card">
      <Paragraph className="user">{user}</Paragraph>
      <Paragraph className="feedback">“{feedback}”</Paragraph>
      <CardText
        label={t("sitesVisited")}
        value={location}
        className="location"
      />
    </div>
  );
};
