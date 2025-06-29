import SectionTitle from "@/components/comman/SectionTitle"
const PricingHeroSection = () => {
  return (
    <>
      <div className="place-items-center">
        <SectionTitle
          classname="text-purple"
          leftTitle="choose"
          subTitle="your plan "
          description={
            <p style={{ textAlign: "center" }}>
              <span>Choose your perfect plan</span>
              <br />
              <span>Choose your perfect plan for your needs. Whether you're just starting out or running a large organization</span>
              <br />
              <span>you covered</span>
            </p>
          }
        />
        <div className="flex justify-center items-center flex-col sm:flex-row gap-2 mt-4">
          <button className="capitalize text-[#646464] border border-gray-400 py-1.5 px-14 text-sm rounded-md bg-transparent">Monthly</button>

          <button
            className="capitalize text-white py-1.5 px-4 text-sm rounded-md"
            style={{
              background: "linear-gradient(320.2deg, #490F8F -0.43%, #7616EC 58.46%)"
            }}
          >
            Annual (save 20%)
          </button>
        </div>

      
      </div>
    </>
  )
}

export default PricingHeroSection

