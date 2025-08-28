export default function ComparisonTable() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0D2D63] text-center mb-12">
          What Sets Empowering Legal Solutions Apart
          <br />
          From Other Law Firms?
        </h2>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-10">
          {/* Traditional Law Firms */}
          <div className="border rounded-xl border-gray-200 overflow-hidden shadow p-4">
            <div className="p-4 text-lg font-semibold text-[#0D2D63] text-center">
              TRADITIONAL LAW FIRMS
            </div>
            <div className="divide-y divide-gray-200">
              {[
                {
                  title: "OUTDATED BILLING",
                  description:
                    "Unpredictable hourly rates lead to surprise bills and budget overruns.",
                },
                {
                  title: "DISCONNECTED ADVICE",
                  description:
                    "One-size-fits-all counsel, often lacking a deep understanding of your business operations.",
                },
                {
                  title: "FIXED OVERHEAD",
                  description:
                    "Paying for permanent staff or expensive office space, regardless of your immediate needs.",
                },
                {
                  title: "RISK-AVERSE COUNSEL",
                  description:
                    "Advice that prioritizes caution, potentially slowing innovation and growth.",
                },
                {
                  title: "GATEKEEPERS OF LEGAL KNOWLEDGE",
                  description:
                    "Lawyers hold the power, and clients often feel lost in the process.",
                },
                {
                  title: "TECH-RESISTANT PRACTICES",
                  description:
                    "Slow, manual processes and legacy systems that are slow to learn about and adopt new technology, delays transactions and inflates costs.",
                },
              ].map((item, idx) => (
                <div key={idx} className="px-6 py-5 bg-gray-50 text-left mt-4">
                  <p className="font-semibold text-[#0D2D63]">{item.title}</p>
                  <p className="mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Empowering Legal Solutions */}
            <div className="border border-[#56B3B1] rounded-xl shadow-2xl overflow-hidden">
              <div className="p-4 text-lg font-semibold text-[#0D2D63] text-center border-b border-[#56B3B1]">
                EMPOWERING LEGAL SOLUTIONS
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  {
                    title: "TRANSPARENT VALUE",
                    description:
                      "Know your costs upfront with flexible pricing that aligns with your business goals. That’s refreshing.",
                  },
                  {
                    title: "STRATEGIC PARTNERSHIP",
                    description:
                      "Beyond counsel, we integrate as part of your team, understanding your business objectives. We safeguard your operations by anticipating legal risks and ensuring adherence to evolving regulations.",
                  },
                  {
                    title: "ELITE LEGAL TALENT, ON-DEMAND",
                    description:
                      "Access top-tier legal talent and specialists precisely when and where your projects demand it.",
                  },
                  {
                    title: "CONFIDENT ADVANCEMENT",
                    description:
                      "Our counsel empowers you to navigate challenges, seize opportunities, and move forward with confidence and compliance.",
                  },
                  {
                    title: "EMPOWERED CLIENTS",
                    description:
                      "We demystify the law. Through automation, plain language, and education, we help clients make confident, informed decisions.",
                  },
                  {
                    title: "SMART USE OF TECHNOLOGY",
                    description:
                      "We leverage a proprietary tech stack and premium legal tools to execute transactions efficiently and accurately raising the bar for modern legal services.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-5 bg-gray-50 text-left mt-4 border-b border-[#56B3B1]"
                  >
                    <p className="font-semibold text-[#0D2D63]">{item.title}</p>
                    <p className="mt-1 font-sans leading-[28px]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden p-8">
          {/* Left column - Traditional */}
          <div>
            <div className="py-4 px-6 text-lg font-semibold text-[#0D2D63] text-center">
              TRADITIONAL LAW FIRMS
              <hr className="border-gray-200 mt-8" />
            </div>
            <div className="space-y-4 mt-4 pr-4">
              {/* List each point */}
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-gray-200">
                <p className="font-semibold text-[#0D2D63]">OUTDATED BILLING</p>
                <p className="mt-1 font-sans leading-[28px]">
                  Unpredictable hourly rates lead to surprise bills and budget
                  overruns.
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-gray-200">
                <p className="font-semibold text-[#0D2D63]">
                  DISCONNECTED ADVICE
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  One-size-fits-all counsel, often lacking a deep understanding
                  of your business operations.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-gray-200">
                <p className="font-semibold text-[#0D2D63]">FIXED OVERHEAD</p>
                <p className="mt-1 font-sans leading-[28px]">
                  Paying for permanent staff or expensive office space,
                  regardless of your immediate needs.
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-gray-200">
                <p className="font-semibold text-[#0D2D63]">
                  RISK-AVERSE COUNSEL
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  Advice that prioritizes caution, potentially slowing
                  innovation and growth.
                  <br />
                  <br />
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-gray-200">
                <p className="font-semibold text-[#0D2D63]">
                  GATEKEEPERS OF LEGAL KNOWLEDGE
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  Lawyers hold the power, and clients often feel lost in the
                  process.
                  <br />
                  <br />
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-gray-200">
                <p className="font-semibold text-[#0D2D63]">
                  TECH-RESISTANT PRACTICES
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  Slow, manual processes and legacy systems that are slow to
                  learn about and adopt new technology, delays transactions and
                  inflates costs
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Empowering Legal Solutions */}
          <div className="border border-[#56B3B1] rounded-xl shadow-2xl">
            <div className="py-4 text-lg font-semibold text-[#0D2D63] text-center">
              EMPOWERING LEGAL SOLUTIONS
              <hr className="border-[#56B3B1] mt-8" />
            </div>
            <div className="space-y-4 mt-4">
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-[#56B3B1]">
                <p className="font-semibold text-[#0D2D63]">
                  TRANSPARENT VALUE
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  Know your costs upfront with flexible pricing that aligns with
                  your business goals. That&apos;s refreshing.
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-[#56B3B1]">
                <p className="font-semibold text-[#0D2D63]">
                  STRATEGIC PARTNERSHIP
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  Beyond counsel, we integrate as part of your team,
                  understanding your business objectives. We safeguard your
                  operations by anticipating legal risks and ensuring adherence
                  to evolving regulations.
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-[#56B3B1]">
                <p className="font-semibold text-[#0D2D63]">
                  ELITE LEGAL TALENT, ON-DEMAND
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  Access top-tier legal talent and specialists precisely when
                  and where your projects demand it.
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-[#56B3B1]">
                <p className="font-semibold text-[#0D2D63]">
                  CONFIDENT ADVANCEMENT
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  Our counsel empowers you to navigate challenges, seize
                  opportunities, and move forward with confidence and
                  compliance.
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left border-b border-[#56B3B1]">
                <p className="font-semibold text-[#0D2D63]">
                  EMPOWERED CLIENTS
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  We demystify the law. Through automation, plain language, and
                  education, we help clients make confident, informed decisions.
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-5 text-left rounded-b-xl">
                <p className="font-semibold text-[#0D2D63]">
                  SMART USE OF TECHNOLOGY
                </p>
                <p className="mt-1 font-sans leading-[28px]">
                  We leverage a proprietary tech stack and premium legal tools
                  to execute transactions efficiently and accurately raising the
                  bar for modern legal services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
