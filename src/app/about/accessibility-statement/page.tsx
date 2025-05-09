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
        us.
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
        </section>

        <section>
          <h2>Steps We’ve Taken Toward Digital Inclusion</h2>
          <p>
            In our effort to make our platform usable for everyone, here’s what
            we’ve done:
          </p>
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
            one-time achievement — it’s a continuous journey. We are dedicated
            to regularly testing, reviewing, and enhancing our digital
            experiences to ensure they remain inclusive, user-friendly, and
            aligned with the highest accessibility standards.
          </p>
          <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2">
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>
                Regular audits of our website and digital content to identify
                and address accessibility issues.
              </p>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>
                Ongoing training for our team on accessibility best practices
                and the latest guidelines.
              </p>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>
                Ongoing collaboration with our community to ensure that we are
                meeting their needs and addressing any accessibility concerns.
              </p>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>
                Collaboration with accessibility experts to ensure we are
                following best practices and staying up to date with the latest
                developments in the field.
              </p>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>
                Regular feedback sessions with users to understand their
                experiences and needs.
              </p>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>
                Regular updates to our website and digital content to ensure
                that we are meeting the latest accessibility standards.
              </p>
            </li>
          </ul>
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
          <ul className="gap-2 grid grid-cols-1 lg:grid-cols-2">
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</p>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>Section 508 of the Rehabilitation Act</p>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>Americans with Disabilities Act (ADA)</p>
            </li>
            <li className="flex items-start gap-x-3">
              <div className="flex-shrink-0 mt-2">
                <FaCheck className="w-4 h-4 text-primary" />
              </div>
              <p>International standards for accessibility</p>
            </li>
          </ul>
          <p>
            Our goal is to create an environment where everyone, regardless of
            ability, can easily access and navigate our digital resources. We
            continuously review and update our practices, staying aligned with
            evolving standards to guarantee that we are meeting and exceeding
            accessibility expectations.
          </p>
          <p>
            Our commitment is unwavering: we strive to foster an accessible and
            inclusive online space for all, and we will continue to improve and
            innovate toward this vision.
          </p>
        </section>
      </div>
    </div>
  );
}
