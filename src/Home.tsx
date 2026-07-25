import React from "react";
import "./App.css";

const Home: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <img src="/images/logo.png" className="logo" alt="Logo" />
        <div className="nav-container">
          <ul className="nav-links">
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            {/* <li>
              <a href="#types">Entity & Relations</a>
            </li> */}
            <li>
              <a href="#ClimatePub4KG">ClimatePub4KG</a>
            </li>
            {/* <li>
              <a href="#overview">Overview</a>
            </li> */}
            {/* <li>
              <a href="#ontology-graph">Ontology Graph</a>
            </li> */}
            <li>
              <a href="#team">Team</a>
            </li>
            <li className="highlight-nav-container">
              <a
                href="https://kgchatbot.templeuni.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chatbot
              </a>
            </li>
            <li>
              <a
                href="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffrink.apps.renci.org%2F%3Fquery%3DPREFIX%2Brdf%3A%2B%253Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%2523%253E%250APREFIX%2Brdfs%3A%2B%253Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%2523%253E%250ASELECT%2B*%2BWHERE%2B%257b%250A%2B%2B%3Fsub%2B%3Fpred%2B%3Fobj%2B.%250A%257d%2BLIMIT%2B10%26sources%3Dclimatepub4kg&data=05%7C02%7Ccaleb.hageman%40temple.edu%7Cde51bfa2d9234bb62eb208dd33f99f8f%7C716e81efb52244738e3110bd02ccf6e5%7C0%7C0%7C638723869405502070%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=SFBfRLqlaBZ5RasGSN0oXv1FcI5rPy6A5OESOUU6Ly8%3D&reserved=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                KG on Frink
              </a>
            </li>
            <li>
              <a href="/ontology" target="_blank">
                Ontology
              </a>
            </li>
          </ul>
        </div>
        <h1>ClimatePub4KG</h1>
        <p>
          Knowledge Graph to Support Evaluation and Development of Climate
          Models
        </p>
      </header>

      <main className="body">
        {/* Introduction Section */}
        <section id="introduction" className="section">
          <h2>Introduction</h2>
          <p className="mb-4">
            Climate science publications have grown exponentially, exceeding 1.3
            million since 2020. While these studies contain valuable
            insights—such as model predictions, observational data, and impact
            assessments—relevant information often remains buried within
            unstructured text. This situation poses a challenge for researchers,
            policymakers, and anyone needing systematic, up-to-date knowledge.
          </p>
          <p className="mb-4">
            Recent advances in Large Language Models (LLMs) promise a way
            forward, offering powerful text processing and generalization
            abilities. However, LLMs often struggle with specialized domains
            like climate science, where rare or evolving terminology (e.g.,
            “teleconnections” or “Arctic amplification”) can lead to missed
            concepts or incorrect associations. In other words, while LLMs excel
            at broad knowledge, they require domain-specific grounding to truly
            handle the complexity and precision demanded by climate research.
          </p>
          <p className="mb-4">
            <strong>ClimatePub4KG</strong> bridges this gap by:
          </p>
          <ul className="list-decimal list-inside mb-4 space-y-2">
            <li>
              <strong>Aggregating Climate Publications:</strong> We curate a
              large repository of climate-related texts, ensuring coverage of a
              wide range of topics, from Earth system modeling to policy-driven
              studies.
            </li>
            <li>
              <strong>Taxonomy-Guided Annotation:</strong> We employ a
              climate-specific taxonomy (e.g., GCMD+) to anchor entity and
              relationship extraction, improving both accuracy and consistency
              of the extracted knowledge.
            </li>
            <li>
              <strong>Weak Supervision + Expert Validation:</strong> We leverage
              LLMs for initial annotations and refine them through a
              human-in-the-loop process, ensuring high-quality results while
              reducing manual workload.
            </li>
          </ul>
          <p className="mb-4">
            By transforming unstructured publications into machine-readable
            knowledge, ClimatePub4KG accelerates literature reviews, supports
            data-driven policymaking, and enriches climate modeling with
            actionable insights. Our open-access approach invites collaboration,
            fostering continued enhancements in both AI methodologies and
            climate science applications.
          </p>
          <hr />
        </section>

        {/* Types and Definitions Section */}
        {/* <section id="types" className="section">
          <h2>Entity Types and Definitions</h2>
          <p>The definitions of the entity types are given below:</p>

          <p>Activity: A coordinated modeling effort or scientific campaign.</p>
          <p>
            ExperimentFamily: A group of related experiments sharing a common
            scientific goal.
          </p>
          <p>
            Experiment: A specific simulation scenario (e.g., historical,
            ssp585).
          </p>
          <p>
            SubExperiment: A variant or subset of an experiment, usually with
            specific configurations.
          </p>
          <p>
            Source: A climate model or system used to generate data (e.g.,
            GFDL-ESM4).
          </p>
          <p>SourceType: The classification of the model</p>
          <p>SourceComponent: A component of a climate model.</p>
          <p>
            PhysicalScheme: A physical process representation used in a model
            (e.g., cloud scheme).
          </p>
          <p>
            PhysicalFeature: Unique physical characteristics of a model (e.g.,
            terrain-following grid).
          </p>
          <p>
            SimulationType: Type of simulation performed (e.g., transient,
            equilibrium).
          </p>
          <p>
            Metric: Quantitative measure of model performance (e.g., climate
            sensitivity).
          </p>
          <p>
            Project: A broader initiative under which models/experiments are
            conducted (e.g., CMIP6).
          </p>
          <p>
            Institute: Organization responsible for developing models or running
            simulations.
          </p>
          <p>
            Variable: Scientific quantities output by models (e.g., temperature,
            precipitation).
          </p>
          <p>Realm: Component of the Earth system (e.g., atmosphere, ocean).</p>
          <p>
            Frequency: Temporal resolution of model output (e.g., daily,
            monthly).
          </p>
          <p>Resolution: Spatial resolution or grid size of the data.</p>
          <p>
            Ensemble: A collection of model runs differing in initial conditions
            or configurations.
          </p>
          <p>Member: An individual member of an ensemble.</p>
          <p>
            MIPEra: A major generation or version of coordinated experiments
            (e.g., CMIP5, CMIP6).
          </p>
          <p>
            RCM (Regional Climate Model): A model used for fine-resolution
            regional simulations.
          </p>
          <p>Domain: Geographical coverage of a model.</p>
          <p>Continent: A large continuous landmass (e.g., Asia, Africa).</p>
          <p>Country: A sovereign state or territory (e.g., India, USA).</p>
          <p>
            Country Subdivision: Administrative units within countries (e.g.,
            California).
          </p>
          <p>City: Urban locality (e.g., Paris).</p>
          <p>
            No Country Region: Areas not under country jurisdiction (e.g., open
            ocean).
          </p>
          <p>Water Bodies: Oceans, seas, and lakes (e.g., Pacific Ocean).</p>
          <p>
            Instrument: Device used to observe environmental variables (e.g.,
            radiometer).
          </p>
          <p>Platform: Physical carrier for an instrument (e.g., satellite).</p>
          <p>Weather event: Specific events like storms, droughts.</p>
          <p>Teleconnection: Large-scale climate patterns (e.g., ENSO, NAO).</p>
          <p>Ocean circulation: Movements of ocean waters (e.g., AMOC).</p>
          <p>
            Natural hazard: Geophysical events impacting systems (e.g., tsunami,
            earthquake).
          </p>

          {/* <h2>Relationship Types and Definitions</h2>
          <p>ComparedTo: The source_entity is compared to the target_entity.</p>
          <p>
            Outputs: A climate model, experiment, or project (source_entity)
            outputs data (target_entity).
          </p>
          <p>
            RunBy: Experiments or scenarios (source_entity) are run by a climate
            model (target_entity).
          </p>
          <p>
            ProvidedBy: A dataset, instrument, or model (source_entity) is
            created or managed by an organization (target_entity).
          </p>
          <p>
            ValidatedBy: The accuracy or reliability of model simulations
            (source_entity) is confirmed by datasets or analyses
            (target_entity).
          </p>
          <p>
            UsedIn: An entity, such as a model, simulation tool, experiment, or
            instrument (source_entity), is utilized within a project
            (target_entity).
          </p>
          <p>
            MeasuredAt: A variable or parameter (source_entity) is quantified or
            recorded at a geographic location (target_entity).
          </p>
          <p>
            MountedOn: An instrument or measurement device (source_entity) is
            physically attached or installed on a platform (target_entity).
          </p>
          <p>
            TargetsLocation: An experiment, project, model, weather event,
            natural hazard, teleconnection, or ocean circulation (source_entity)
            is designed to study, simulate, or focus on a specific geographic
            location (target_entity).
          </p> *
          <hr />
        </section> */}

        {/* GCMD+ Taxonomy Section */}
        <section id="ClimatePub4KG" className="section">
          <h2>What is ClimatePub4KG?</h2>
          <p>
            GCMD+ taxonomy is an extension of the most recent version of the
            Global Change Master Directory (GCMD) from NASA. To enhance the
            taxonomy's breadth and depth, we incorporated additional resources,
            specifically the CMIP6 Controlled Vocabularies (CMIP6CV),
            observations for the Model Intercomparison Project (obs4MIPs), and
            the vocabulary listing from the CMIP Publication Hub, all accessed
            as of May 2024. Each of the entities in the GCMD+ taxonomy was
            assigned tags based on their hierarchical paths, focusing
            specifically on main and sub-categories identified as non-leaf
            nodes. The GCMD+ taxonomy provides a comprehensive set of terms that
            are essential for categorizing and accessing climate science
            literature, particularly for climate modeling research.
          </p>
          <p>
            Building upon the GCMD+ taxonomy, we now utilize ESGF dataset
            metadata to construct a structured knowledge graph that captures key
            relationships across climate data. This includes integrating ESGF
            entities such as source_id, experiment_id, variable_id, and
            activity_id to represent climate models, experiments, and simulation
            variables. To enrich the semantic structure, we also incorporate
            selected entity types from GCMD allowing for a more expressive and
            interconnected ontology. This combined schema results in a much
            richer knowledge graph that enables finer-grained reasoning over
            climate datasets, improves dataset discoverability, and supports
            automated alignment between models, experiments, and observational
            references.
          </p>
          <hr />
        </section>

        {/* Ontology Graph Section */}
        <section id="ontology-graph" className="section">
          <h2>Ontology Graph</h2>
          <p>
            The Ontology Graph below illustrates the structure and semantic
            relationships extracted and defined in ClimatePub4KG. It serves as a
            foundation for entity linking and inference within the knowledge
            graph.
          </p>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <img
              // src="/images/paper_combined_ontology.png"
              src="/images/climatepub4kg_ontology.svg"
              alt="Ontology Graph"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <p>
            The figure shows a combined ontology graph linking two domains:
            Combined GCMD and ESGF Ontology (left): This graph integrates
            entities from the Global Change Master Directory (GCMD) and Earth
            System Grid Federation (ESGF) metadata. Nodes are color-coded: green
            (GCMD-only), blue (ESGF-only), yellow (shared by both). It models
            relationships between climate modeling concepts such as Source,
            Experiment, Variable, Instrument, Platform, and Region. Paper
            Ontology (right): This represents metadata and conceptual
            information from academic papers. Central node is Title, connected
            to entities like Author, Institution, Field, Method, Model, Dataset,
            etc. It captures important information and metrics from the
            scientific literature/papers and is linked to the entities of
            Climate ontology. The black arrow labeled “Mentions” shows the
            linkage between paper content and climate model entities, enabling
            knowledge graph integration across literature and model metadata.
          </p>
          <hr />
        </section>

        {/* Method Overview Section */}
        <section id="overview" className="section">
          <h2>Who uses it?</h2>
          <p>
            This project involves constructing a comprehensive Knowledge Graph
            by leveraging existing taxonomies, advanced language models, and
            post-processing techniques to organize climate science data and
            relationships. It begins with aggregating existing taxonomies
            mentioned in GCMD+. Climate publications are then analyzed to create
            structured prompts that guide a large language model to extract key
            entities (e.g., precipitation, regions) and their relationships
            (e.g., "precipitation measured at North America"). Post-processing
            methods are applied to minimize errors or hallucinations introduced
            by the model, ensuring accuracy and relevance. The extracted and
            refined entities and relationships are integrated into a Knowledge
            Graph, providing a structured and interconnected representation of
            climate science data. This Knowledge Graph enables more efficient
            discovery, categorization, and use of climate modeling resources,
            fostering collaboration and innovation in climate research.
          </p>
          <hr />
        </section>

        {/* Team Section */}
        <section id="team" className="team-section">
          <h2>Team </h2>
          <p>
            Team Email:{" "}
            <a href="mailto:climatepub4kg@gmail.com">climatepub4kg@gmail.com</a>
          </p>
          {/* Investigators */}
          <h2>Investigators</h2>
          <div className="team-group">
            <div className="team-member">
              <img src="/images/Dragut.jpg" alt="Eduard Dragut" />
              <div className="team-info">
                <h3>Eduard Dragut</h3>
              </div>
            </div>
            <div className="team-member">
              <img src="/images/Latecki.jpg" alt="Longin Jan Latecki" />
              <div className="team-info">
                <h3>Longin Jan Latecki</h3>
              </div>
            </div>
          </div>

          {/* Postdoctoral Fellows */}
          <h2>Postdoctoral Fellows</h2>
          <div className="team-group">
            <div className="team-member">
              <img src="/images/Mustapha.jpg" alt="Adamu Mustapha" />
              <div className="team-info">
                <h3>Adamu Mustapha</h3>
              </div>
            </div>
          </div>

          <h2>Graduate Students</h2>
          <div className="team-group">
            <div className="team-member">
              <img src="/images/Pan.jpg" alt="Jo Pan" />
              <div className="team-info">
                <h3>Jo Pan</h3>
              </div>
            </div>
            <div className="team-member">
              <img src="/images/Zhang.jpg" alt="Qi Zhang" />
              <div className="team-info">
                <h3>Qi Zhang</h3>
              </div>
            </div>
            <div className="team-member">
              <img src="/images/Acharya.jpg" alt="Aayush Acharya" />
              <div className="team-info">
                <h3>Aayush Acharya</h3>
              </div>
            </div>
          </div>

          <h2>Undergraduate Students</h2>
          <div className="team-group">
            <div className="team-member">
              <img src="/images/Reizas.jpg" alt="Eric Reizas" />
              <div className="team-info">
                <h3>Eric Reizas</h3>
              </div>
            </div>
            <div className="team-member">
              <img
                src="/images/placeholder-image-person.webp"
                alt="Vinh Nguyen"
              />
              <div className="team-info">
                <h3>Vinh Nguyen</h3>
              </div>
            </div>
          </div>

          <h2>Collaborators </h2>
          <div className="team-group">
            <div className="team-member">
              <img src="/images/Dunne.jpg" alt="John Dunne" />
              <div className="team-info">
                <h3>John Dunne</h3>
              </div>
            </div>
            <div className="team-member">
              <img src="/images/Berkheimer.jpg" alt="Ryan Berkheimer" />
              <div className="team-info">
                <h3>Ryan Berkheimer</h3>
              </div>
            </div>
          </div>

          <hr />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <img src="/images/NSFLogo.png" alt="Logo" />
        <p>
          This project is supported by the NSF under the grant{" "}
          <a
            href="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.nsf.gov%2Fawardsearch%2FshowAward%3FAWD_ID%3D2333789%26HistoricalAwards%3Dfalse&data=05%7C02%7Ccaleb.hageman%40temple.edu%7Ca440add2049c4257e94f08dd26bb629e%7C716e81efb52244738e3110bd02ccf6e5%7C0%7C0%7C638709308437444392%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=2mAxObLe4uZvMxd0MNsUD4x54NqSXIinPt6a%2Bd%2FoBRQ%3D&reserved=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            ITE-2333789
          </a>{" "}
          in the Proto-OKN program.
        </p>
      </footer>
    </div>
  );
};

export default Home;
