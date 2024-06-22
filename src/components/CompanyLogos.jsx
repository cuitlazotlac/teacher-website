import { companyLogos } from "../constants";
import { useTranslation } from "react-i18next";

const CompanyLogos = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h5 className="mb-6 text-center tagline text-n-1/50">
      {t("Hero.Title4")}
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
