import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';

function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      company: "Grid Dynamics",
      logo: "/logos/griddynamics.png",
      role: "Software Engineer",
      period: "08.05.2025 - current",
      brief: "Supporting a recommendation engine in Scala 2 on PredictionIO for large e-commerce platforms, extending the API for a more granular search. Documenting behavior in an effort to later write the next version of the service in Java 21, prototyping APIs, setting up meetings.",
      tech: ["Scala 2", "PredictionIO", "Java 21"]
    },
    {
      company: "TUMO Yerevan",
      logo: "/logos/tumo.png",
      role: "Workshop Leader",
      period: "01.05.2025 - 31.05.2025",
      brief: "A workshop for high school students on building programming language. Shvi, the language, is inspired by LISP and is a simple notation for writing music. During the workshop, students moved through each step, supported with reading material and guided by tests, gradually adding features and building a simple interpreter.",
      tech: ["JavaScript", "Deno", "LISP"]
    },
    {
      company: "Freelance",
      logo: "/logos/freelance.png",
      role: "Full-stack & Backend Developer",
      period: "01.08.2024 - 08.05.2025",
      brief: "Python scraper for Armenian laws and regulations. Scala 3 e-shop scraper with Telegram frontend for hot deals. Full-stack print shop in React/Next.js with PostgreSQL, focusing on code quality and maintainability.",
      tech: ["Python", "Scala 3", "React", "Next.js", "PostgreSQL", "Telegram Bot API"]
    },
    {
      company: "DataArt Armenia",
      logo: "/logos/dataart.png",
      role: "Senior Scala Engineer & Team Lead",
      period: "04.04.2022 - 18.07.2024",
      brief: "Built plane ticket search module for travel industry cruise reservation system. Led team of 5 for 3 months, managing central modules. Maintained well-tested codebase, established CI/CD practices, and mentored junior developers. Focused on code quality, frequent demos, and team processes.",
      tech: ["Scala 2.13", "Akka", "Play", "tAPIr", "AWS SQS", "IBM MQ", "Cats"]
    },
    {
      company: "Quality Testing Lab",
      logo: "/logos/qtl.png",
      role: "Technical Trainer",
      period: "01.03.2020 - 01.06.2022",
      brief: "Designed and implemented testing frameworks for online shops, evolving from Selenium to SerenityBDD. Integrated with Browserstack for cross-platform testing. Led training courses and mentored junior colleagues, developing toy projects for hands-on learning.",
      tech: ["Java 8", "SerenityBDD", "Cucumber", "Selenium", "Browserstack"]
    },
    {
      company: "Freelance",
      logo: "/logos/freelance.png",
      role: "Backend Developer",
      period: "01.02.2018 - 01.03.2020",
      brief: "Built ticker data aggregator from MetaTrader4 vendors in Scala and MQL. Processed financial data from Excel workbooks, normalizing and exporting to PDF. Implemented tests for collateralized loan obligations framework.",
      tech: ["Scala", "Akka HTTP", "MQL", "Python", "Cython"]
    },
    {
      company: "Praddicts",
      logo: "/logos/praddicts.png",
      role: "Co-founder & Senior Developer",
      period: "11.11.2016 - 01.02.2018",
      brief: "Co-founded social betting platform. Designed and maintained REST API, integrated third-party data sources. Worked across the stack with Java, Scala, and various technologies. Learned entrepreneurial lessons alongside technical growth.",
      tech: ["Java", "Scala", "Spring", "PostgreSQL", "MongoDB", "Apache Spark", "Kafka"]
    },
    {
      company: "SCDM",
      logo: "/logos/scdm.png",
      role: "Senior Software Developer",
      period: "11.11.2014 - 11.11.2016",
      brief: "Securities valuation system processing data from multiple sources. Integrated finmath library for inflation bonds valuation. Built UI tools for asset valuation. Close collaboration with Frankfurt-based client for domain modeling.",
      tech: ["Java EE", "Oracle DB", "PL/SQL", "JSP"]
    },
    {
      company: "Freelance",
      logo: "/logos/freelance.png",
      role: "Software Developer",
      period: "01.09.2009 - 11.11.2014",
      brief: "Employee database in C#/MySQL. Chat module in Objective-C based on XMPP protocol (Facebook chat, GTalk). Media player with 360 plugin based on VLC using Qt and C++. Custom installer with crypto plugins in NSIS.",
      tech: ["C#", "C++", "Objective-C", "MySQL", "XMPP", "Qt"]
    },
    {
      company: "Hitegrity",
      logo: "/logos/hitegrity.png",
      role: "Software Developer",
      period: "01.12.2007 - 01.09.2009",
      brief: "Ported OmniTrust Protected Browser to 64-bit. Implemented notes and highlighters for Castelle FaxPress editor. Participated in ProtectFile project for SafeNet-Inc.",
      tech: ["C/C++", "COM", "DCOM"]
    },
    {
      company: "WestSoft",
      logo: "/logos/westsoft.png",
      role: "Software Developer",
      period: "01.07.2007 - 01.12.2007",
      brief: "Designed and implemented ORM for MySQL/C++ for ERP application. Built library for custom report generation in rich text format.",
      tech: ["C++", "ATL", "STL", "MySQL"]
    },
    {
      company: "Smart-Tech",
      logo: "/logos/smarttech.png",
      role: "Software Developer",
      period: "25.12.2006 - 21.06.2007",
      brief: "Integration for Armenian banks with ARCA card processing system. First job working with Erlang ecosystem, running on BSDs with functional programming approach. Fortunate start to a career.",
      tech: ["Erlang", "Mnesia", "Yaws"]
    }
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="experiences-container">
      <div className="carousel-wrapper">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={goToPrevious}
          aria-label="Previous experience"
        >
          ‹
        </button>

        <div className="carousel-content">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {experiences.map((experience, index) => (
              <div key={index} className="carousel-slide">
                <ExperienceCard {...experience} />
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={goToNext}
          aria-label="Next experience"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {experiences.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
