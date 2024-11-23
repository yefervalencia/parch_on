"use client";

import { useTranslation } from "react-i18next";
import "./FAQ.css";

export const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("howCanIRegister"),
      answer: t("youCanRegister"),
    },
    {
      question: t("canIChangeMyPassword"),
      answer: t("yesYouCanChangeYourPassword"),
    },
    {
      question: t("howDoIContactSupport"),
      answer: t("youCanContactSupportBy"),
    },
    {
      question: t("isThereAParchonMobile"),
      answer: t("noWeAreWorkingToBring"),
    },
  ];

  return (
    <div className="faq-page">
      <h1 className="faq-title">{t("questions")}</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
