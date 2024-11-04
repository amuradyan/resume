import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ProjectItem({ title, when, fullDescription }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ width: '80%', flexShrink: 0 }}>{title}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{when}</Typography>

      </AccordionSummary>
      <AccordionDetails>{fullDescription}</AccordionDetails>
    </Accordion>
  );
}


function Projects() {
  return (
    <div>
      <ProjectItem
        title="Software Engineer in travel"
        when="half a year ago"
        fullDescription={
          <>
            {/* <Typography variant="body2">
              <em>April 2022 - July 2024</em>
            </Typography> */}
            <Typography>
              Overall I've spent about two years in two teams on a project in the travel industry, automating cruise
              reservation flows across multiple agents and elements.
            </Typography>
            <Typography>
              My main contribution to the project was a module to search plane tickets. I've managed to maintain a
              well-tested and coherent codebase and a structured repository, and learned that frequent demos calm the
              worried mind and help avoiding <em>dirty</em> estimates. Our team was able to experiment and agree on
              what's good or bad, so we were able to affect our modules of the project both technically{' '}
              <em>/code style and structure, tooling, practices/</em> and process-wise{' '}
              <em>/CI\CD, branching strategy, code review, .../</em>.
            </Typography>
            <Typography>
              Soon after, I took up the role of the team lead of a team of five <em>/team 1/</em> and led it for three
              months. The team was in charge of several modules central to the operation, both semantically and
              topologically. In order to address the system correctness issues, I tried to achieve better code reviews
              via pair programming and a clearer information flow via more inclusive requirement gathering. These, along
              with a few other ideas, did not work out as planned due to different socioeconomic reasons. Nevertheless,
              the team was able to maintain a deliverable flow suiting the needs at the moment.
            </Typography>
            <Typography>
              For the last two months, I've been primarily engaged in maintenance tasks, frequently collaborating with a
              colleague.
            </Typography>
            <Typography>
              <strong>Tech:</strong> Scala/2/, Akka, Play, tapir, AWS SQS, IBM MQ, Cats
            </Typography>
          </>
        }
      />

      <ProjectItem
        title="Helping hands at a testing company"
        when="~ 2 years ago"
        fullDescription={
          <>
            {/* <Typography variant="body2">
              <em>February 2020 - June 2022</em>
            </Typography> */}
            <Typography>
              My main responsibility, along with my junior colleague, was automating e2e tests for a number of online
              shops dealing in all sorts of goods from wines to car parts. I started with simple Selenium tests and
              gradually moved to SerenityBDD. In 2 major rehauls along the way, the layers settled and the system
              developed a comfortable library of steps, which led to tickets in Jira becoming either 1 or 2{' '}
              <Link href="https://estimation.lunarlogic.io/">points</Link>. The latter case was due to us not feeling
              like splitting it further. Tests would run on different platforms and browsers with the help of
              Browserstack.
            </Typography>
            <Typography>
              I was also actively involved in training of employees by running a course, occasional tech discussions, and
              closely working with two of our juniors.
            </Typography>
            <Typography>
              <strong>Tech:</strong> Java/8/, Gherkin, SerenityBDD, Cucumber, Selenium, Browserstack
            </Typography>
          </>
        }
      />

      <ProjectItem
        title="Freelancer in fintech"
        when="~ 4 years ago"
        fullDescription={
          <>
            {/* <Typography variant="body2">
              <em>February 2018 - March 2020</em>
            </Typography> */}
            <Typography>
              This was my first paid project with Scala. The system was a hack to get ticker data out of MetaTrader
              platforms, without having to pay for it. A concoction of ZeroMQ, MQL, Scala and a bit of redis/RESP/, it
              served the data as a stream via sockets or a REST API. The system could communicate with several
              MetaTrader clones, added declaratively through configs, and later incorporated a simple ledger and user
              management.
            </Typography>
            <Typography>
              The other two projects were in Python: an asset /CLO/ scoring software and an insurance financial data
              aggregator and plotter. The former leveraged Cython for occasional performance tweaks.
            </Typography>
            <Typography>
              <strong>Tech:</strong> Scala/2/, Akka HTTP, MQL, JavaScript, Python, MariaDB
            </Typography>
          </>
        }
      />

      <ProjectItem
        title="Engineer\Entrepreneur in betting"
        when="~ 6 years ago"
        fullDescription={
          <>
            {/* <Typography variant="body2">
              <em>November 2016 - February 2018</em>
            </Typography> */}
            <Typography
              variant="body1"
              sx={{ fontStyle: 'italic', textAlign: 'right' }}
            >
              - Ոչ միայն հուզիչ էր, այլ նաև ուսուցողական։
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontStyle: 'italic', textAlign: 'right' }}
            >
              Տեր Բաղդասար
            </Typography>
            <Typography>
              First of all, I hereby coin the term <i>engipreneur</i>. Now, to the story...
            </Typography>
            <Typography>
              Me and a few friends had an idea of a social betting site with feed monetization. Mainly it was Spring
              with Java. I got carried away with a specific tool with Spark and Scala, that would split the feed into
              streams, but was not key to the operation. We managed to craft a prototype with basic social and feed
              splitting capabilities, received an offer, and turned it down.
            </Typography>
            <Typography>
              The lessons learned were more entrepreneurial than technological, however I had my fair share of setting up
              pipelines, deployments and backups, configuring queues and databases, going through logs, and a bunch of
              other cool stuff.
            </Typography>
            <Typography>
              <strong>Tech:</strong> Java, a bit of Scala and JavaScript, Spring, PostgreSQL, MongoDB, Apache Spark,
              Apache Kafka, JenkinsCI, RabbitMQ
            </Typography>
          </>
        }
      />

      <ProjectItem
        title="Software Engineer in fintech"
        when="~ 8 years ago"
        fullDescription={
          <>
            {/* <Typography variant="body2">
              <em>November 2014 - November 2016</em>
            </Typography> */}
            <Typography>
              In order to valuate securities, the system was processing data from three sources of, naturally, different
              formats, and dissipating the calculations on the aggregation of the former. It was developed and launched
              on the cloud, and was moved on premises soon after.
            </Typography>
            <Typography>
              My main contribution was inflation bonds valuation, integrating with a finmath library of a peculiar
              design. I also got to make a helpful UI tool for just asset valuation, utilizing spreadsheets.
            </Typography>
            <Typography>
              I should specifically mention the degree of our close work with the client. The domain was pretty deep and
              intricate, and frequent flights to Frankfurt were not extremely helpful in understanding and modeling the
              domain, but also rather enjoyable.
            </Typography>
            <Typography>
              <strong>Tech:</strong> Java EE, Oracle DB, JSP, AWS
            </Typography>
          </>
        }
      />

      <ProjectItem
        title="The PhD years"
        when="~ 11 years ago"
        fullDescription={
          <>
            <Typography>
              Here's where I started to use Java. Our department was researching components-based software engineering,
              and implementing such a system—JDEECo. I was responsible for the scheduler or the clock of the system, and
              got to code a vehicle routing demo later on.
            </Typography>
            <Typography>
              My main focus, however, was on an external DSL for system definition, that would translate to Java and get
              SAT checked.
            </Typography>
            <Typography>
              <strong>Tech:</strong> Java, Xtext, Xtend, EMF, Alloy /relational modeling language/
            </Typography>
          </>
        }
      />

      <ProjectItem
        title="Software Engineer in infosec"
        when="~ 14 years ago"
        fullDescription={
          <>
            {/* <Typography variant="body2">
              <em>December 2007 - September 2009</em>
            </Typography> */}
            <Typography>
              Nothing particularly interesting happened during this time. The products were infosec tools, so I got to
              code a browser watermarking extension and a file system encryption tool. I'd say I mainly got to exercise
              my C/C++ and some cryptography skills. The exercise made clear to me that I do enjoy these languages as
              much, so I used them less and less with time, and they were replaced in my toolkit.
            </Typography>
            <Typography>
              <strong>Tech:</strong> C/C++, cryptographic algorithms
            </Typography>
          </>
        }
      />

      <ProjectItem
        title="Software Engineer in horeca"
        when="more than 15 years ago"
        fullDescription={
          <>
            {/* <Typography variant="body2">
              <em>July 2007 - December 2007</em>
            </Typography> */}
            <Typography>
              The product was an ERP system for restaurants on Windows, so I also got to code some UI with Borland. From
              what's worth noting, two things come to mind. One is an ORM, which me and a senior colleague implemented
              along with some specific mappings and queries. This later became a thing of its own and was marketed as a
              separate product. The second one was a reporting library in rich text. It was a simple tool that could do
              cells and some styles, but I remember enjoying it a lot.
            </Typography>
            <Typography>
              <strong>Tech:</strong> Borland C++, MySQL
            </Typography>
          </>
        }
      />

      <ProjectItem
        title="Software Engineer in fintech"
        when="more than 15 years ago"
        fullDescription={
          <>
            {/* <Typography variant="body2">
              <em>December 2006 - June 2007</em>
            </Typography> */}
            <Typography>
              I am glad I got this as my first job. We were integrating local banks with the local v-card system,
              nothing special there, but what was special was that I got to use an interesting language and an ecosystem.
              We were coding in Erlang, running on BSDs with window managers and vims and a bunch of other cool stuff.
              That was fun, and rather fortunate for someone who was just starting their career.
            </Typography>
            <Typography>
              <strong>Tech:</strong> Erlang, Mnesia, Yaws
            </Typography>
          </>
        }
      />
    </div>
  );
}

export default Projects;
