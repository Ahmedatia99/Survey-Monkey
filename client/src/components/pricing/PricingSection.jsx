const PricingSection = () => {
  return (
    <div className="bg-white py-10  flex flex-col items-center my-10">
      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 w-full max-w-6xl">
        {/* Basic Plan */}
        <div className="border border-[#7716ec] rounded-xl px-4 py-5 w-full max-w-sm text-purple-800 flex flex-col justify-between text-[#490f8f]">
          <div>
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-3xl font-bold mb-2">
              $15<span className="text-base font-medium">/month</span>
            </p>
            <p className="mb-4 leading-relaxed">
              Perfect for individuals and<br />small teams just getting<br />started.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Up to 10 surveys per month</li>
              <li>100 responses per survey</li>
              <li>Basic survey templates</li>
              <li>Email support</li>
              <li>Export to PDF & CSV</li>
              <li>Basic analytics</li>
            </ul>
          </div>
          <button className="mt-6 mx-auto bg-[#7616ec]  rounded-md py-1.5 px-4 text-sm hover:bg-purple-700 transition text-white">
            Start free trial
          </button>
        </div>

        {/* Professional Plan */}
        <div className="bg-[#7616ec] text-white rounded-xl px-4 py-5 w-full max-w-sm flex flex-col justify-between relative -translate-y-5">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0abd85] text-white text-m font-semibold px-6 py-2 rounded-full shadow">
            Most popular
          </span>
          <div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="text-3xl font-bold mb-2">
              $39<span className="text-base font-medium">/month</span>
            </p>
            <p className="mb-4 leading-relaxed">
              Ideal for growing businesses that<br />need more power and features.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Unlimited surveys</li>
              <li>1000 responses per survey</li>
              <li>Advanced survey templates</li>
              <li>Priority email support</li>
              <li>Advanced analytics</li>
              <li>Custom branding</li>
              <li>Team collaboration</li>
              <li>API access</li>
            </ul>
          </div>
          <button className="mt-6 mx-auto bg-white text-[#490f8f] font-medium rounded-md py-1.5 px-4 text-sm hover:bg-purple-100 transition">
            Start free trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="border border-[#7716ec]  rounded-xl px-4 py-5 w-full max-w-sm text-purple-800 flex flex-col justify-between text-[#490f8f] ">
          <div>
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-3xl font-bold mb-2">
              $99<span className="text-base font-medium">/month</span>
            </p>
            <p className="mb-4 leading-relaxed">
              For large organizations requiring<br />advanced features and support.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Unlimited everything</li>
              <li>Dedicated account manager</li>
              <li>Custom integration support</li>
              <li>Advanced security features</li>
              <li>SLA guarantees</li>
              <li>Training sessions</li>
              <li>Custom contract terms</li>
              <li>Phone support</li>
            </ul>
          </div>
          <button className="mt-6 mx-auto bg-[#7716ec] rounded-md py-1.5 px-4 text-sm hover:bg-purple-700 text-white
 transition">
            Contact sales
          </button>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="mt-10 bg-[#eee5ef] text-[#490f8f] px-6 py-4 rounded-full flex items-center gap-3 text-sm font-medium shadow-sm">
        <svg
          className="w-5 h-5 text-purple-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1-4h-2V7h2v4z" />
        </svg>
        30-day money-back guarantee
      </div>
    </div>
  );
};

export default PricingSection;

