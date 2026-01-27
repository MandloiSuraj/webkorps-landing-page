import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbtack,
  faClock,
  faShuffle,
  faBullseye,
  faUsers,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Icons1 from '../../assets/Icons/expert-talent-and-engineering-excellence.svg'
import Icons2 from '../../assets/Icons/accurate-cost-estimation-and-budget-control.svg'
import Icons3 from '../../assets/Icons/agile-and-adaptive-project-scoping.svg'
import Icons4 from '../../assets/Icons/risk-driven-project-management.svg'
import Icons5 from '../../assets/Icons/competence-based-team-selection.svg'
import Icons6 from '../../assets/Icons/prevention-of-scope-creep.svg'
import Icons7 from '../../assets/Icons/responsible-approach-to-deadlines.svg'
import Icons8 from '../../assets/Icons/routine-reporting-and-transparency.svg'
import Icons9 from '../../assets/Icons/centralized-knowledge-management.svg'

const guaranteePageModels = [
  {
    title: "Expert Talent & Engineering Excellence",
    description:
      "We recruit top-tier professionals and apply best engineering practices to deliver robust and scalable solutions.",
    icon: Icons1,
  },
  {
    title: "Accurate Cost Estimation & Budget Control",
    description:
      "Our precise financial planning ensures cost-effectiveness and prevents budget overruns.",
    icon: Icons2,
  },
  {
    title: "Agile & Adaptive Project Scoping",
    description:
      "We define project scopes dynamically while maintaining control over requirements and deliverables.",
    icon: Icons3,
  },
  {
    title: "Risk-Driven Project Management",
    description:
      "Proactive risk assessment and mitigation strategies ensure smooth execution and minimal disruptions.",
    icon: Icons4,
  },
  {
    title: "Competence-Based Team Selection",
    description:
      "We build specialized teams with the right expertise to meet project-specific needs effectively.",
    icon: Icons5,
  },
  {
    title: "Prevention of Scope Creep",
    description:
      "By maintaining well-defined project goals, we prevent unnecessary expansion that could impact deadlines.",
    icon: Icons6,
  },
  {
    title: "Responsible Approach to Deadlines",
    description:
      "We prioritize efficient planning and execution to meet project timelines without compromising quality.",
    icon: Icons7,
  },
  {
    title: "Routine Reporting & Transparency",
    description:
      "Regular updates keep stakeholders informed, ensuring alignment and seamless collaboration.",
    icon: Icons8,
  },
  {
    title: "Centralized Knowledge Management",
    description:
      "We document and manage project insights effectively to maintain consistency and long-term success.",
    icon: Icons9,
  },
];

const GuaranteePage = () => {
  return (
    <div className="bg-white text-black  px-[5%] xl:px-[50px] ipad-pro:px-[40px] py-[4rem]">
      <div className=" px-[3%] xl:px-[30px] ipad-pro:px-[30px] p-12 border border-gray-300 rounded-[40px] shadow-custom-lg bg-white">
        <h2 className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] text-black font-inter font-bold text-center ">
          Our Proven Approach to Delivering Successful Projects{" "}
        </h2>
        <p className=" text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] text-center leading-[1.5875rem] text-gray-700  pt-4 pb-4">
          At Webkorps, we follow a strategic and structured approach to ensure every project is delivered successfully, on time, and within budget. Our process focuses on efficiency, transparency, and innovation to drive impactful results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guaranteePageModels.map((model, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-300 p-6 shadow-custom-lg hover:shadow-xl transition-all">
              <div className="flex justify-center items-center">
                <img src={model.icon} alt={model.title} className="w-12 h-12" width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy" /> {/* Adjust the width and height as needed */}
              </div>
              <h3 className="text-xl font-bold mt-4 text-[#005baa] text-center">
                {model.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mt-2 text-center">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuaranteePage;
