function Projects() {
  return (
    <div>
      <h2>Software Engineer in travel</h2>

      <p><em>April 2022 - July 2024</em></p>

      <p>Overall I've spent about two years in two teams on a project in the travel industry, automating cruise
        reservation flows across multiple agents and elements.</p>

      <p>My main contribution to the project was a module to search plane tickets. I've managed to maintain a well-tested
        and coherent codebase and a structured repository, and learned that frequent demos calm the worried mind and help
        avoiding <em>dirty</em> estimates. Our team was able to experiment and agree on what's good or bad, so we were
        able to affect our modules of the project both technically <em>/code style and structure, tooling, practices/</em>
        and process-wise <em>/CI\CD, branching strategy, code review, .../</em>.</p>

      <p>Soon after, I took up the role of the team lead of a team of five <em>/team 1/</em> and led it for three months.
        The team was in charge of several modules central to the operation, both semantically and topologically. In order
        to address the system correctness issues, I tried to achieve better code reviews via pair programming and a
        clearer information flow via more inclusive requirement gathering. These, along with a few other ideas, did not
        work out as planned due to different socioeconomic reasons. Nevertheless, the team was able to maintain a
        deliverable flow suiting the needs at the moment.</p>

      <p>For the last two months, I've been primarily engaged in maintenance tasks, frequently collaborating with a
        colleague.</p>

      <p><strong>Tech:</strong> Scala/2/, Akka, Play, tapir, AWS SQS, IBM MQ, Cats</p>

      <h2>Helping hands at a testing company</h2>

      <p><em>February 2020 - June 2022</em></p>

      <p>
        My main responsibility, along with my junior colleague, was automating e2e tests for a number of online shops
        dealing in all sorts of goods from wines to car parts. I started with simple Selenium tests and gradually moved to
        SerenityBDD. In 2 major rehauls along the way, the layers settled and the system developed a comfortable library
        of steps, which led to tickets in Jira becoming either 1 or 2 <a
          href="https://estimation.lunarlogic.io/">points</a>. The latter case was due to us not feeling like splitting it
        further. Tests would run on different platform and browsers with the help of Browserstack.</p>

      <p>I was also actively involved in training of employees by running a course, occasional tech discussions and
        closely working with two of of our juniors.</p>

      <p><strong>Tech:</strong> Java/8/, Gherkin, SerenityBDD, Cucumber, Selenium, Browserstack</p>

      <h2>Freelancer in fintech</h2>

      <p><em>February 2018 - March 2020</em></p>

      <p>This was my first paid project with Scala. The system was a hack to get ticker data out of MetaTrader platforms,
        without having to pay for it. A concoction of ZeroMQ, MQL, Scala and a bit of redis/RESP/, it served the data as a
        stream via sockets or a REST API. The system could communicate with several MetaTrader clones, added declaratively
        through configs, and later incorporated a simple ledger and user management.</p>

      <p>The other two projects were in Python: an asset /CLO/ scoring software and an insurance financial data aggregator
        and plotter. The former leveraged Cython for occasional performance tweaks.</p>

      <p><strong>Tech:</strong> Scala/2/, Akka HTTP, MQL, JavaScript, Python, MariaDB</p>

      <h2>Engineer\Entrepreneur in betting</h2>

      <p><em>November 2016 - February 2018</em></p>

      <p class="citation">- Ոչ միայն հուզիչ էր, այլ նաև ուսուցողական։</p>
      <p class="ter-baghdasar">Տեր Բաղդասար</p>

      <p>First of all, I hereby coin the term <i>engipreneur</i>. Now, to the story... </p>

      <p>Me and a few friends had an idea of a social betting site with feed monetization. Mainly it was Spring with Java.
        I got carried away with a specific tool with Spark and Scala, that would split the feed into streams, but was not
        key to the operation. We managed to craft a prototype with basic social and feed splitting capabilities, received
        an offer, and turned it down.</p>

      <p>The lessons learned were more entrepreneurial than technological, however I had my
        fair share of setting up pipelines, deployments and backups, configuring queues and databases, going through logs
        and a bunch of other cool stuff.</p>

      <p><strong>Tech:</strong> Java, a bit of Scala and JavaScript, Spring, PostgreSQL,
        MongoDB, Apache Spark, Apache Kafka, JenkinsCI, RabbitMQ</p>

      <h2>Software Engineer in fintech</h2>

      <p><em>November 2014 - November 2016</em></p>

      <p>In order to valuate securities, the system was processing data from three sources of, naturally, different
        formats, and dissipating the calculations on the aggregation of the former. It was developed and launched on the
        cloud, and was moved on premises soon after.

        My main contribution was inflation bonds valuation, integrating with a finmath library of a peculiar design. I
        also got to make a helpful UI tool for just asset valuation, utilizing spreadsheets.

        I should specifically mention the degree of our close work with the client. The domain was pretty deep and
        intricate, and frequent flights to Frankfurt were not extremely helpful in understanding and modeling the domain,
        but also rather enjoyable.</p>

      <p><strong>Tech:</strong> Java EE, Oracle DB, JSP, AWS</p>

      <h2>The PhD years</h2>

      <p>
        Here's where I started to use Java. Our department was researching components-based software engineering, and
        implementing such a system - JDEECo. I was responsible for the scheduler or the clock of the system, and got to
        code a vehicle routing demo later on.

        My main focus, however, was on an external DSL for system definition, that would translate to java and get SAT
        checked.
      </p>

      <p><strong>Tech used:</strong> Java, Xtext, Xtend, EMF, Alloy /relational modeling language/</p>


      <h2>Software Engineer in infosec</h2>

      <p><em>December 2007 - September 2009</em></p>

      <p>
        Nothing particularly interesting happened during this time. The products were infosec tools, so I got to code a
        browser watermarking extension and a file system encryption tool. I'd say I mainly got to exercise my C\C++ and
        some cryptography skills. The exercise made clear to me that I do enjoy these languages as much, so I used them
        less and less and with time and they were replaced in my toolkit.</p>

      <p><strong>Tech:</strong> C\C++, cryptographic algorithms</p>

      <h2>Software Engineer in horeca</h2>

      <p><em>July 2007 - December 2007</em></p>

      <p>The product was an ERP system for restaurants on Windows, so I also got to code some UI with Borland. From what's
        worth noting, two things come to mind. One is an ORM, which me and a senior colleague implemented along with some
        specific mappings and queries. This later became a thing of its own and was marketed as a separate product. The
        second one was a reporting library in rich text. It was a simple tool that could do cells and some styles, but I
        remember enjoying it a lot.
      </p>

      <p><strong>Tech:</strong> Borland C++, MySQL</p>

      <h2>Software Engineer in fintech</h2>

      <p><em>December 2006 - June 2007</em></p>

      <p>I am glad I got this as my first job. We were integrating local banks with the local v-card system, nothing
        special there, but what was special was that I got to use an interesting language and an ecosystem. We were
        coding in Erlang, running on BSDs with windowmakers and vims and a bunch of other cool stuff. That was fun, and
        rather fortunate for someone who was just starting their career.</p>

      <p><strong>Tech:</strong> Erlang, Mnesia, Yaws</p>
    </div>
  );
}

export default Projects;
