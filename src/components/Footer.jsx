import React from "react";
import Section from "./Section";
import { socials } from "../constants";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex items-center justify-center gap-10 sm:justify-between max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <select
          className="select"
          name="language"
          selected="en"
          onChange={onChange}
        >
          <option value="en">{t("Footer.English")}</option>
          <option value="fr">{t("Footer.French")}</option>
        </select>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
