import { Button } from "@/components/ui/button";
import { accessibilityStatement } from "@/lib/constants/about/about";
import { FaCheck } from "react-icons/fa";
export default function Page() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Removing Barriers, Creating Possibility</h1>
      <h5>Because Everyone Deserves to Feel Seen, Supported, and Empowered</h5>

      <p>
        At Harmona Health, accessibility is not just a promise — it’s a
        fundamental expression of our values and vision for a more inclusive
        world. We believe that wellness should meet every individual exactly
        where they are, honoring their unique journey, needs, and aspirations.
        Every service, program, and experience we create is intentionally
        designed to remove barriers and open pathways to healing, growth, and
        thriving. Our mission is to ensure that everyone has the opportunity to
        live a vibrant, empowered life — because true wellness belongs to all of
        us. We are committed to creating a space where every person feels seen,
        supported, and empowered to thrive. We are dedicated to fostering a
        culture of inclusivity, where every individual can access the resources
        and support they need to flourish. We believe that everyone deserves to
        feel valued and respected, regardless of their background or
        circumstances. Our commitment to accessibility is not just a checkbox —
        it’s a core part of who we are. We are constantly striving to improve
        our services and programs to ensure that they are accessible to all. We
        are committed to listening to our community and making changes based on
        their feedback. We believe that by working together, we can create a
        more inclusive and equitable world for everyone.
      </p>
      <p>
        We are dedicated to creating a culture of accessibility and inclusivity,
        where everyone has the opportunity to thrive. We are committed to
        removing barriers and creating pathways to healing, growth, and
        thriving. We believe that everyone deserves to feel seen, supported, and
        empowered. We are dedicated to creating a space where every individual
        can access the resources and support they need to flourish. We are
        committed to fostering a culture of inclusivity, where every person
        feels valued and respected. We believe that true wellness belongs to all
        of us, and we are dedicated to making that a reality. We are committed
        to creating a culture of accessibility and inclusivity, where everyone
        has the opportunity to thrive. We are dedicated to removing barriers and
        creating pathways to healing, growth, and thriving. We believe that
        everyone deserves to feel seen, supported, and empowered. We are
        committed to creating a space where every individual can access the
        resources and support they need to flourish. We are dedicated to
        fostering a culture of inclusivity, where every person feels valued and
        respected. We believe that true wellness belongs to all of us, and we
        are dedicated to making that a reality. We are committed to creating a
        culture of accessibility and inclusivity, where everyone has the
        opportunity to thrive. We are dedicated to removing barriers and
        creating pathways to healing, growth, and thriving. We believe that
        everyone deserves to feel seen, supported, and empowered. We are
        committed to creating a space where every individual can access the
        resources and support they need to flourish.
      </p>

      <div className="flex flex-col gap-10 py-5">
        <section>
          <h2>How We Champion Accessibility</h2>
          <p>
            Accessibility is an essential part of how we bring our mission to
            life. We are dedicated to making our website, content, and services
            welcoming and usable for everyone, including individuals with
            disabilities. We aim to meet or exceed the standards outlined in the
            Web Content Accessibility Guidelines (WCAG) 2.2 Level AA wherever
            possible, ensuring that every experience we offer reflects our
            belief in equity, dignity, and belonging. Our commitment to
            accessibility is a reflection of our deeper promise: to create a
            space where every individual feels seen, supported, and empowered to
            thrive.
          </p>

          <div className="mt-4">
            <h3 className="mb-3 font-semibold text-xl">
              Our Implementation Approach
            </h3>
            <p>
              We've integrated accessibility considerations throughout our
              design and development process. From initial wireframing to final
              implementation, our team conducts regular accessibility reviews to
              ensure we're creating an inclusive experience.
            </p>

            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Inclusive Design Process</strong>: Accessibility is
                  considered from the earliest stages of product development,
                  with designers utilizing accessible design systems and
                  inclusive patterns
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>User Testing</strong>: We test with diverse users,
                  including those using assistive technologies such as screen
                  readers, voice recognition software, and alternative input
                  devices
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Accessibility Specialists</strong>: Our team includes
                  experts dedicated to ensuring compliance with WCAG guidelines
                  and identifying opportunities for enhanced accessibility
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Automated Testing</strong>: We employ tools to
                  identify and address accessibility issues proactively,
                  including contrast checkers, HTML validators, and automated
                  accessibility scanners
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 font-semibold text-xl">
              Key Accessibility Features
            </h3>
            <p>
              Our platform incorporates numerous features designed to enhance
              accessibility:
            </p>

            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Screen Reader Compatibility</strong>: Properly
                  structured content with ARIA attributes, semantic HTML, and
                  logical reading order to ensure smooth navigation
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Keyboard Navigation</strong>: All functions accessible
                  without a mouse, with visible focus indicators and logical tab
                  order throughout the entire site
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Text Alternatives</strong>: All images include
                  descriptive alt text, and videos feature captions and audio
                  descriptions where appropriate
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Color Contrast</strong>: High contrast between text
                  and backgrounds for legibility, with additional visual cues
                  beyond color alone for colorblind users
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Resizable Text</strong>: Content remains fully
                  functional when text is enlarged up to 200%, ensuring
                  readability for users with visual impairments
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Clear Language</strong>: Content written in plain,
                  straightforward language with defined terms for specialized
                  health terminology
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 font-semibold text-xl">
              User-Centered Accessibility Design
            </h3>
            <p>
              We believe that true accessibility comes from understanding real
              user needs and experiences. Our approach centers the voices of
              people with disabilities:
            </p>

            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Diverse Feedback Panels</strong>: Regular
                  consultations with users who have various disabilities to
                  guide our design decisions
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Accessibility-Focused Usability Testing</strong>:
                  Testing sessions with assistive technology users throughout
                  our development process
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Continuous Learning</strong>: Our team regularly
                  participates in disability awareness training and
                  accessibility workshops
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Accessibility Champions</strong>: Internal advocates
                  who ensure accessibility remains a priority across all
                  departments
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 font-semibold text-xl">
              Accessibility Tools & Resources
            </h3>
            <p>
              We provide various tools and resources to enhance your experience
              on our platform:
            </p>

            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Accessibility Preferences</strong>: Personalized
                  settings to adjust text size, contrast, and other display
                  features
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Alternative Formats</strong>: Important documents and
                  resources available in multiple accessible formats upon
                  request
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Skip Navigation Links</strong>: Allows keyboard users
                  to bypass repetitive navigation and access main content
                  quickly
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Accessibility Help Guide</strong>: Documentation to
                  help users navigate our site with various assistive
                  technologies
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Steps We’ve Taken Toward Digital Inclusion</h2>
          <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2">
            {accessibilityStatement.map((item, index) => (
              <li key={index} className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>{item.title}</strong>: {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Ongoing Commitment to Accessibility</h2>
          <p>
            At Harmona Health, we understand that accessibility is not a
            one-time achievement — it's a continuous journey. We are dedicated
            to regularly testing, reviewing, and enhancing our digital
            experiences to ensure they remain inclusive, user-friendly, and
            aligned with the highest accessibility standards. Our commitment
            extends beyond mere compliance to creating truly inclusive
            experiences that evolve with changing technologies and user needs.
          </p>

          <div className="mt-4">
            <h3 className="mb-3 font-semibold text-xl">
              Continuous Improvement Process
            </h3>
            <p>
              Our approach to accessibility is systematic and ongoing, with
              established processes to ensure we continue to meet and exceed
              standards:
            </p>
            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Scheduled Accessibility Audits</strong>: Quarterly
                  comprehensive evaluations of our website and digital content
                  using both automated tools and manual testing to identify and
                  address accessibility issues
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Team Training Program</strong>: Ongoing education for
                  our entire team on accessibility best practices, with
                  specialized training for designers, developers, and content
                  creators
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Community Advisory Panel</strong>: Regular meetings
                  with users of diverse abilities to gather feedback, identify
                  challenges, and co-create solutions that address real-world
                  accessibility needs
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Expert Partnerships</strong>: Ongoing collaboration
                  with accessibility specialists and organizations to ensure
                  we're implementing current best practices and anticipating
                  future developments
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 font-semibold text-xl">
              Measuring Our Progress
            </h3>
            <p>
              We believe in accountability and transparency in our accessibility
              efforts:
            </p>
            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Accessibility Scorecards</strong>: Regular internal
                  assessments measuring our progress against established
                  accessibility benchmarks and goals
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Public Accessibility Roadmap</strong>: Transparency
                  about our current accessibility status and planned
                  improvements, published and updated regularly
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>User Satisfaction Surveys</strong>: Regular feedback
                  collection specifically focusing on the accessibility
                  experience of our users across different abilities
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Accessibility Incident Response</strong>: Documented
                  process for addressing reported accessibility issues with
                  clear resolution timelines and accountability
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 font-semibold text-xl">
              Evolving with Technology
            </h3>
            <p>
              As technology advances, we remain committed to leveraging
              innovations that enhance accessibility:
            </p>
            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Emerging Technology Assessment</strong>: Evaluating
                  new technologies and platforms for their accessibility
                  potential and integration possibilities
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Adaptive Technology Compatibility</strong>: Ongoing
                  testing with the latest assistive technologies to ensure our
                  platform works seamlessly with tools that users depend on
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Progressive Enhancement</strong>: Implementing new
                  features in ways that ensure core functionality remains
                  accessible to all users, regardless of their technology or
                  abilities
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Innovation Grants</strong>: Supporting research and
                  development of new accessibility tools and approaches that
                  could benefit our users and the wider community
                </p>
              </li>
            </ul>
          </div>

          <p className="mt-5">
            Our commitment to accessibility is unwavering and evolving. We
            recognize that creating truly inclusive digital experiences requires
            constant vigilance, humility, and a willingness to learn and adapt.
            As technologies change and standards evolve, we pledge to remain at
            the forefront of accessibility innovation, always guided by our core
            belief that everyone deserves equal access to health resources,
            information, and support.
          </p>
        </section>

        <section>
          <h2>Collaborating for Comprehensive Accessibility</h2>
          <p>
            At Harmona Health, we are committed to ensuring accessibility across
            our entire platform. However, we recognize that third-party content,
            integrations, and services may occasionally fall outside our direct
            control. While we strive for consistency, we understand that not all
            external elements may fully align with the high accessibility
            standards we set for ourselves. These instances can present barriers
            that may impact user experience, but we approach these challenges
            with the same commitment to inclusivity and openness that guides our
            internal efforts. We work proactively to identify and address these
            issues as quickly and effectively as possible.
          </p>
          <p>
            To uphold our accessibility standards, we actively engage with our
            third-party vendors and partners, encouraging them to prioritize
            accessibility in their offerings. We collaborate closely with them,
            providing guidance and support to ensure they meet the accessibility
            standards that align with our mission. By fostering strong
            partnerships, we can minimize any barriers created by third-party
            content or services, working together to create a more inclusive
            environment for all users.
          </p>
          <p>
            Our unwavering dedication to inclusivity drives us to continually
            evaluate and address any potential challenges. We believe that every
            user deserves an experience that is accessible, welcoming, and
            empowering. That’s why, both internally and in partnership with our
            external collaborators, we remain committed to ensuring that
            accessibility is seamlessly integrated across every aspect of
            Harmona Health.
          </p>
        </section>

        <section>
          <h2>Your Voice Matters – Let Us Know How We Can Improve</h2>
          <p>
            We deeply value your feedback and are always striving to enhance the
            accessibility of our services and website. If you come across any
            challenges or barriers while navigating our site, accessing content,
            or using our services, we encourage you to reach out. Your
            experience matters, and we are here to ensure that everyone has the
            support they need.
          </p>
          <p>
            We are fully committed to promptly addressing any accessibility
            concerns and finding effective, lasting solutions to make our
            platform more inclusive. Our goal is to resolve any reported issues
            quickly and efficiently, ensuring that your experience is seamless
            and empowering. We prioritize accessibility, and as such, we aim to
            respond to all feedback within 2 business days. We take your
            concerns seriously and work diligently to resolve any issues as
            quickly as possible, continuously improving our platform to ensure
            that it remains accessible to all.
          </p>

          <Button className="cursor-pointer">Contact Us</Button>
        </section>

        <section>
          <h2>Standards and Guidelines Followed</h2>
          <p>
            At Harmona Health, we believe that accessibility is not an option —
            it is a fundamental part of building a more inclusive, compassionate
            world. We are committed to removing barriers and ensuring that every
            person, regardless of ability, has the opportunity to thrive. To
            ensure our website and services are accessible to all users, we
            align with the following key accessibility standards:
          </p>

          <div className="mt-4">
            <h3 className="mb-3 font-semibold text-xl">
              Core Accessibility Standards
            </h3>
            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-2">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>
                    Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
                  </strong>
                  : The internationally recognized standard that defines
                  requirements for making web content more accessible to people
                  with disabilities
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Section 508 of the Rehabilitation Act</strong>:
                  Federal requirements for ensuring electronic and information
                  technology is accessible to people with disabilities
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Americans with Disabilities Act (ADA)</strong>:
                  Federal civil rights law prohibiting discrimination against
                  individuals with disabilities in all areas of public life
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>EN 301 549</strong>: European accessibility
                  requirements for ICT products and services, ensuring digital
                  accessibility across European nations
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 font-semibold text-xl">
              WCAG 2.2 Principles Implementation
            </h3>
            <p>
              We structure our accessibility work around the four core
              principles of WCAG:
            </p>
            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Perceivable</strong>: Information and user interface
                  components must be presentable to users in ways they can
                  perceive. We implement this through text alternatives,
                  time-based media alternatives, adaptable content, and
                  distinguishable content
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Operable</strong>: User interface components and
                  navigation must be operable by all users. We ensure keyboard
                  accessibility, provide adequate time, avoid content that could
                  cause seizures, and implement navigable interfaces
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Understandable</strong>: Information and operation of
                  the interface must be understandable. Our content is readable,
                  predictable, and provides input assistance to help users avoid
                  and correct mistakes
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Robust</strong>: Content must be robust enough to be
                  interpreted reliably by a wide variety of user agents,
                  including assistive technologies. We maximize compatibility
                  with current and future tools
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 font-semibold text-xl">
              Conformance Assessment Process
            </h3>
            <p>
              We maintain stringent processes to ensure our services meet these
              standards:
            </p>
            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Automated Testing</strong>: Regular scans using
                  industry-leading tools like Axe, WAVE, and Lighthouse to
                  identify technical compliance issues
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Manual Testing</strong>: Expert evaluation following
                  the WCAG-EM methodology to assess aspects that automated
                  testing cannot verify
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Assistive Technology Testing</strong>: Comprehensive
                  evaluations using screen readers (JAWS, NVDA, VoiceOver),
                  voice recognition tools, and alternative input devices
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Remediation Workflow</strong>: Structured approach to
                  addressing identified issues, with prioritization based on
                  impact severity and user needs
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 font-semibold text-xl">
              Documentation and Transparency
            </h3>
            <p>
              We maintain clear records of our accessibility compliance efforts:
            </p>
            <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2 mt-4">
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Accessibility Policy</strong>: Comprehensive
                  documentation of our commitments, reviewed and updated
                  annually
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>
                    VPAT (Voluntary Product Accessibility Template)
                  </strong>
                  : Detailed reports of our conformance to accessibility
                  standards, available upon request
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Public Feedback Mechanism</strong>: Clear process for
                  users to report accessibility barriers and track resolution
                  progress
                </p>
              </li>
              <li className="flex items-start gap-x-3">
                <div className="flex-shrink-0 mt-2">
                  <FaCheck className="w-4 h-4 text-primary" />
                </div>
                <p>
                  <strong>Conformance Claims</strong>: Transparent communication
                  about our current level of conformance and any known
                  limitations
                </p>
              </li>
            </ul>
          </div>

          <p className="mt-5">
            Our goal is to create an environment where everyone, regardless of
            ability, can easily access and navigate our digital resources. We
            continuously review and update our practices, staying aligned with
            evolving standards to guarantee that we are meeting and exceeding
            accessibility expectations.
          </p>

          <p className="mt-3">
            Our commitment is unwavering: we strive to foster an accessible and
            inclusive online space for all, and we will continue to improve and
            innovate toward this vision. We view accessibility not as a
            compliance checkbox but as a fundamental part of our mission to
            create health solutions that truly serve everyone in our community.
          </p>
        </section>
      </div>
    </div>
  );
}
