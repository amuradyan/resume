import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import Divider from '@mui/material/Divider';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Chip from '@mui/material/Chip';
import { Typography, Link, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ProjectItem({ title, when, fullDescription }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} sx={{ marginBottom: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ width: '80%', flexShrink: 0 }}>{title}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{when}</Typography>
      </AccordionSummary>
      <AccordionDetails>{fullDescription}</AccordionDetails>
    </Accordion>
  );
}

function Tech({ tech }) {
  const toolTags =
    tech.toolList.map((tool) => <Chip color="info" variant="outlined" size="small" label={tool} />)

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {toolTags}
    </Box>
  )
}

function Summary({ expanded, onClick, title, when }) {
  return (
    <Box onClick={onClick}
      sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', paddingBottom: 1 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography sx={{ color: 'text.secondary' }}>{when}</Typography>
    </Box >
  );
}

function Story({ expanded, story }) {
  return (
    expanded ?
      <Box sx={{ marginBottom: 1 }}>
        <Typography>{story}</Typography>
      </Box> :
      <Box sx={{
        overflow: 'hidden',
        height: '120px',
        marginBottom: 1,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '120px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), white)',
        }
      }}>
        <Typography>{story}</Typography>
      </Box >
  );
}


function Project({ title, when, story, tools }) {
  const [expanded, setExpanded] = React.useState(false);

  const toolList = tools.split(',').map(t => t.trim());

  const toggleSize = () => {
    setExpanded(!expanded);
  }

  return (
    <Box sx={{ border: '1px solid #ddd', marginBottom: 2, padding: 2 }}>
      <Summary expanded={expanded} onClick={toggleSize} title={title} when={when} />
      <Divider sx={{ marginBottom: 2 }} />
      <Story expanded={expanded} story={story} />
      <Tech tech={{ toolList }} />
    </Box>
  );
}

function Projects() {
  return (
    <div>
      <Project
        title="Software Engineer in travel"
        when="half a year ago"
        tools="Scala/2/, Akka, Play, tapir, AWS SQS, IBM MQ, Cats"
        story={
          <>
            <Typography>
              Overall I've spent about two years in two teams on a project in the travel industry, automating cruise
              reservation flows across multiple agents and elements.
            </Typography>
            <br />
            <Typography>
              My main contribution to the project was a module to search plane tickets. I've managed to maintain a
              well-tested and coherent codebase and a structured repository, and learned that frequent demos calm the
              worried mind and help avoiding <em>dirty</em> estimates. Our team was able to experiment and agree on
              what's good or bad, so we were able to affect our modules of the project both technically <em>/code style
                and structure, tooling, practices/</em> and process-wise <em>/CI\CD, branching strategy, code review, .../</em>.
            </Typography>
            <br />
            <Typography>
              Soon after, I took up the role of the team lead of a team of five <em>/team 1/</em> and led it for three
              months. The team was in charge of several modules central to the operation, both semantically and
              topologically. In order to address the system correctness issues, I tried to achieve better code reviews
              via pair programming and a clearer information flow via more inclusive requirement gathering. These, along
              with a few other ideas, did not work out as planned due to different socioeconomic reasons. Nevertheless,
              the team was able to maintain a deliverable flow suiting the needs at the moment. Closer to the end, I've
              been primarily engaged in maintenance tasks, mentoring a junior colleague.
            </Typography>
            <br />
          </>
        }
      />

      <ProjectItem
        title="Helping hands at a testing company"
        when="~ 2 years ago"
        fullDescription={
          <>
            <Typography>
              My main responsibility, along with my junior colleague, was automating e2e tests for a number of online
              shops dealing in all sorts of goods from wines to car parts. I started with simple Selenium tests and
              gradually moved to SerenityBDD. In 2 major rehauls along the way, the layers settled and the system
              developed a comfortable library of steps, which led to tickets in Jira becoming either 1 or 2
              <Link href="https://estimation.lunarlogic.io/">points</Link>. The latter case was due to us not feeling
              like splitting it further. Tests would run on different platforms and browsers with the help of
              Browserstack.
            </Typography>
            <br />
            <Typography>
              I was also actively involved in training of employees by running a course, occasional tech discussions, and
              closely working with two of our juniors.
            </Typography>
            <br />

            <Chip color="info" variant="outlined" size="small" label="Java/8/" />
            <Chip color="info" variant="outlined" size="small" label="Gherkin" />
            <Chip color="info" variant="outlined" size="small" label="SerenityBDD" />
            <Chip color="info" variant="outlined" size="small" label="Cucumber" />
            <Chip color="info" variant="outlined" size="small" label="Selenium" />
            <Chip color="info" variant="outlined" size="small" label="Browserstack" />
          </>
        }
      />

      <ProjectItem
        title="Software engineer in fintech"
        when="~ 4 years ago"
        fullDescription={
          <>
            <Typography>
              This was my first paid project with Scala. The system was a hack to get ticker data out of MetaTrader
              platforms, without having to pay for it. A concoction of ZeroMQ, MQL, Scala and a bit of redis/RESP/, it
              served the data as a stream via sockets or a REST API. The system could communicate with several
              MetaTrader clones, added declaratively through configs, and later incorporated a simple ledger and user
              management.
            </Typography>
            <br />
            <Typography>
              The other two projects were in Python: an asset /CLO/ scoring software and an insurance financial data
              aggregator and plotter. The former leveraged Cython for occasional performance tweaks.
            </Typography>
            <br />
            <Chip color="info" variant="outlined" size="small" label="Scala/2/" />
            <Chip color="info" variant="outlined" size="small" label="Akka HTTP" />
            <Chip color="info" variant="outlined" size="small" label="MQL" />
            <Chip color="info" variant="outlined" size="small" label="JavaScript" />
            <Chip color="info" variant="outlined" size="small" label="Python" />
            <Chip color="info" variant="outlined" size="small" label="MariaDB" />
          </>
        }
      />

      <ProjectItem
        title="Engineer\Entrepreneur in betting"
        when="~ 6 years ago"
        fullDescription={
          <>
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
            <br />
            <Typography>
              First of all, I hereby coin the term <i>engipreneur</i>. Now, to the story...
            </Typography>
            <br />
            <Typography>
              Me and a few friends had an idea of a social betting site with feed monetization. Mainly it was Spring
              with Java. I got carried away with a specific tool with Spark and Scala, that would split the feed into
              streams, but was not key to the operation. We managed to craft a prototype with basic social and feed
              splitting capabilities, received an offer, and turned it down.
            </Typography>
            <br />
            <Typography>
              The lessons learned were more entrepreneurial than technological, however I had my fair share of setting up
              pipelines, deployments and backups, configuring queues and databases, going through logs, and a bunch of
              other cool stuff.
            </Typography>
            <br />

            <Chip color="info" variant="outlined" size="small" label="Java" />
            <Chip color="info" variant="outlined" size="small" label="Scala" />
            <Chip color="info" variant="outlined" size="small" label="JavaScript" />
            <Chip color="info" variant="outlined" size="small" label="Spring" />
            <Chip color="info" variant="outlined" size="small" label="PostgreSQL" />
            <Chip color="info" variant="outlined" size="small" label="MongoDB" />
            <Chip color="info" variant="outlined" size="small" label="Apache Spark" />
            <Chip color="info" variant="outlined" size="small" label="Apache Kafka" />
            <Chip color="info" variant="outlined" size="small" label="JenkinsCI" />
            <Chip color="info" variant="outlined" size="small" label="RabbitMQ" />
          </>
        }
      />

      <ProjectItem
        title="Software Engineer in fintech"
        when="~ 8 years ago"
        fullDescription={
          <>
            <Typography>
              In order to valuate securities, the system was processing data from three sources of, naturally, different
              formats, and dissipating the calculations on the aggregation of the former. It was developed and launched
              on the cloud, and was moved on premises soon after.
            </Typography>
            <br />
            <Typography>
              My main contribution was inflation bonds valuation, integrating with a finmath library of a peculiar
              design. I also got to make a helpful UI tool for just asset valuation, utilizing spreadsheets.
            </Typography>
            <br />
            <Typography>
              I should specifically mention the degree of our close work with the client. The domain was pretty deep and
              intricate, and frequent flights to Frankfurt were not only extremely helpful in understanding and modeling
              the domain, but also rather enjoyable.
            </Typography>
            <br />

            <Chip color="info" variant="outlined" size="small" label="Java EE" />
            <Chip color="info" variant="outlined" size="small" label="Oracle DB" />
            <Chip color="info" variant="outlined" size="small" label="JSP" />
            <Chip color="info" variant="outlined" size="small" label="AWS" />
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
            <br />
            <Typography>
              My main focus, however, was on an external DSL for system definition, that would translate to Java and get
              SAT checked.
            </Typography>
            <br />

            <Chip color="info" variant="outlined" size="small" label="Java" />
            <Chip color="info" variant="outlined" size="small" label="Xtext" />
            <Chip color="info" variant="outlined" size="small" label="Xtend" />
            <Chip color="info" variant="outlined" size="small" label="EMF" />
            <Chip color="info" variant="outlined" size="small" label="Alloy" />
          </>
        }
      />

      <ProjectItem
        title="Software Engineer in infosec"
        when="~ 14 years ago"
        fullDescription={
          <>
            <Typography>
              Nothing particularly interesting happened during this time. The products were infosec tools, so I got to
              code a browser watermarking extension and a file system encryption tool. I'd say I mainly got to exercise
              my C/C++ and some cryptography skills. The exercise made clear to me that I do enjoy these languages as
              much, so I used them less and less with time, and they were replaced in my toolkit.
            </Typography>
            <br />

            <Chip color="info" variant="outlined" size="small" label="C/C++" />
            <Chip color="info" variant="outlined" size="small" label="cryptographic algorithms" />
          </>
        }
      />

      <ProjectItem
        title="Software Engineer in horeca"
        when="more than 15 years ago"
        fullDescription={
          <>
            <Typography>
              The product was an ERP system for restaurants on Windows, so I also got to code some UI with Borland. From
              what's worth noting, two things come to mind. One is an ORM, which me and a senior colleague implemented
              along with some specific mappings and queries. This later became a thing of its own and was marketed as a
              separate product. The second one was a reporting library in rich text. It was a simple tool that could do
              cells and some styles, but I remember enjoying it a lot.
            </Typography>
            <br />

            <Chip color="info" variant="outlined" size="small" label="Borland C++" />
            <Chip color="info" variant="outlined" size="small" label="MySQL" />
          </>
        }
      />

      <ProjectItem
        title="Software Engineer in fintech"
        when="more than 15 years ago"
        fullDescription={
          <>
            <Typography>
              I am glad I got this as my first job. We were integrating local banks with the local v-card system,
              nothing special there, but what was special was that I got to use an interesting language and an ecosystem.
              We were coding in Erlang, running on BSDs with window managers and vims and a bunch of other cool stuff.
              That was fun, and rather fortunate for someone who was just starting their career.
            </Typography>
            <br />

            <Chip color="info" variant="outlined" size="small" label="Erlang" />
            <Chip color="info" variant="outlined" size="small" label="Mnesia" />
            <Chip color="info" variant="outlined" size="small" label="Yaws" />
          </>
        }
      />
    </div>
  );
}

export default Projects;
