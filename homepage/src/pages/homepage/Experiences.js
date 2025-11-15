import React, { useState, useEffect, useCallback } from 'react';
import ExperienceCard from './ExperienceCard';

function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagePopup, setImagePopup] = useState(null);

  const experiences = [
    {
      company: "Grid Dynamics",
      logo: "/logos/griddynamics.png",
      role: "Software Engineer",
      period: "08.05.2025 - current",
      brief: <>
        <p>Maintaining and occasionally adding features to a recommendation engine built on top of PredictionIO in Scala 2 for large e-commerce platforms. Implementing the partial replacement for the engine in Java 21 with Spring Boot. Figuring out the domain via use-cases /AI ftw!/ and setting up meetings.</p>
      </>,
      tech: ["Scala 2", "PredictionIO", "Cats", "Java 21", "GCP"]
    },
    {
      company: "TUMO Yerevan",
      logo: "/logos/tumo.png",
      role: "Workshop Leader",
      period: "01.05.2025 - 31.05.2025",
      brief: <>
        <p>A workshop for high school students on building programming languages. <a href="https://github.com/amuradyan/shvi" target="_blank" rel="noopener noreferrer">Shvi</a>, the language, is inspired by LISP and is a simple notation for writing music. Students moved through each step, supported with reading material and unit tests, gradually adding features and building a simple interpreter. This later got its' spinoff - <a href="https://lyre.amuradyan.am" target="_blank" rel="noopener noreferrer">Lyre</a>.</p>
      </>,
      tech: ["JavaScript", "Deno", "LISP"]
    },
    {
      company: "Quality Testing Lab",
      logo: "/logos/qtl.png",
      role: "Consulting engineer",
      period: "01.03.2025 - current",
      brief: <>
        <p>I help develop and maintain a wide-range printing e-shop. Most of the time I'm in the backend, integrating logistics, adding logs or building images, but occasionally I'll do some coding in the front. Mainly I steer both ends in terms of design and practices.</p>
      </>,
      tech: ["React", "Next.js", "PostgreSQL",]
    },
    {
      company: "DataArt Armenia",
      logo: "/logos/dataart.png",
      role: "Scala Engineer & Team Lead",
      period: "04.04.2022 - 18.07.2024",
      brief: <>
        <p>Built plane ticket search module for a big cruise company's reservation system. Maintained well-tested codebase, established CI/CD practices and team processes, and mentored junior developers. Focused on frequent demos for expectation\anxiety management.</p>

        <p>Led a team of 5 for a few months. To mitigate occasional misunderstanding and later system failures, we decided to resort to pair programming and early-on inclusive requirement gathering. Unfortunately, we were not able to sustain such practices at an acceptable pace for long enough, but the team was able to maintain a deliverable flow suiting the needs at the moment.</p>
      </>,
      tech: ["Scala 2.13", "Akka", "Play", "tAPIr", "AWS SQS", "IBM MQ", "Cats"]
    },
    {
      company: "Quality Testing Lab",
      logo: "/logos/qtl.png",
      role: "Technical Trainer",
      period: "01.03.2020 - 01.06.2022",
      brief: <>
        <p>Designed and implemented testing frameworks for a group of similar online shops, evolving from raw Selenium to well-structured SerenityBDD /required 3 rewrites/, integrated with Browserstack for cross-platform testing. Led training courses and mentored junior colleagues by developing toy projects for hands-on learning.</p>

        <p>Pleasantly surprised to learn that a team of 2, given enough time and rigid practices, can get to a <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setImagePopup('/board-of-1s.jpg')}>board with just 1-2 pointers</span>. <b>!</b> Note that the points are not the time it takes to do the task, but rather how well we understand what we shall do - a <i>smoothness</i> coefficient of a sort.</p>
      </>,
      tech: ["Java 8", "SerenityBDD", "Cucumber", "Selenium", "Browserstack"]
    },
    {
      company: "Freelance",
      logo: "/logos/freelance.png",
      role: "Backend Developer",
      period: "01.02.2018 - 01.03.2020",
      brief: <>
        <p>Built ticker data aggregator from MetaTrader4 vendors in Scala and MQL. Processed financial data from Excel workbooks, normalizing and exporting to PDF. Implemented tests for collateralized loan obligations framework.</p>
      </>,
      tech: ["Scala", "Akka HTTP", "MQL", "Python", "Cython"]
    },
    {
      company: "Praddicts",
      logo: "/logos/praddicts.png",
      role: "Co-founder & Senior Developer",
      period: "11.11.2016 - 01.02.2018",
      brief: <>
        <p>Co-founded social betting platform. Designed and maintained REST API, integrated third-party data sources. Worked across the stack with Java, Scala, and various technologies. Learned entrepreneurial lessons alongside technical growth.</p>
      </>,
      tech: ["Java", "Scala", "Spring", "PostgreSQL", "MongoDB", "Apache Spark", "Kafka"]
    },
    {
      company: "SCDM",
      logo: "/logos/scdm.png",
      role: "Senior Software Developer",
      period: "11.11.2014 - 11.11.2016",
      brief: <>
        <p>Securities valuation system processing data from multiple sources. Integrated finmath library for inflation bonds valuation. Built UI tools for asset valuation. Close collaboration with Frankfurt-based client for domain modeling.</p>
      </>,
      tech: ["Java EE", "Oracle DB", "PL/SQL", "JSP"]
    },
    {
      company: "Freelance",
      logo: "/logos/freelance2.png",
      role: "Software Developer",
      period: "01.09.2009 - 11.11.2014",
      brief: <>
        <p>Employee database in C#/MySQL. Chat module in Objective-C based on XMPP protocol (Facebook chat, GTalk). Media player with 360 plugin based on VLC using Qt and C++. Custom installer with crypto plugins in NSIS.</p>
      </>,
      tech: ["C#", "C++", "Objective-C", "MySQL", "XMPP", "Qt"]
    },
    {
      company: "Hitegrity",
      logo: "/logos/hitegrity.png",
      role: "Software Developer",
      period: "01.12.2007 - 01.09.2009",
      brief: <>
        <p>Ported OmniTrust Protected Browser to 64-bit. Implemented notes and highlighters for Castelle FaxPress editor. Participated in ProtectFile project for SafeNet-Inc.</p>
      </>,
      tech: ["C/C++", "COM", "DCOM"]
    },
    {
      company: "WestSoft",
      logo: "/logos/westsoft.png",
      role: "Software Developer",
      period: "01.07.2007 - 01.12.2007",
      brief: <>
        <p>Designed and implemented ORM for MySQL/C++ for ERP application. Built library for custom report generation in rich text format.</p>
      </>,
      tech: ["C++", "ATL", "STL", "MySQL"]
    },
    {
      company: "Smart-Tech",
      logo: "/logos/smarttech.png",
      role: "Software Developer",
      period: "25.12.2006 - 21.06.2007",
      brief: <>
        <p>Integration for Armenian banks with ARCA card processing system. First job working with Erlang ecosystem, running on BSDs with functional programming approach. Fortunate start to a career.</p>
      </>,
      tech: ["Erlang", "Mnesia", "Yaws"]
    }
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  }, [experiences.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  }, [experiences.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

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

      {imagePopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={() => setImagePopup(null)}
        >
          <img
            src={imagePopup}
            alt="Board with 1-pointers"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain'
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Experiences;
