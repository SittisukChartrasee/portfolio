import { HighLightText, TitleSection } from "../components";

function MockImage() {
  // {/* MockImage */}
  return (
    <div className="w-[600px] h-[400px] border-1 border-bb-green" />
  )
}

export default function Portfolio() {
  return (
    <div id="portfolio" className="min-h-screen">
      <TitleSection title="Portfolio" />

      <div className="flex flex-col gap-14">
        <div className="flex gap-10">
          <div className="w-1/2 gap-10 flex flex-col">
            <MockImage />
            <span className="text-lg leading-relaxed">
              <HighLightText className="text-bb-green" text="Output from #runtime errors, console.log, console.trace, console.time and network requests# is displayed in your editor next to the relevant line of code. No more context switching to the browser dev tools console, or terminal output." />
            </span>
          </div>
          <div className="w-1/2 gap-10 flex flex-col">
            <MockImage />
            <span className="text-lg leading-relaxed">
              {`Logged values and runtime errors for a line of code are displayed in your 
          editor hover tooltip. No need to leave your editor to see formatted values, 
          full error messages, or navigable stack trace.`}
            </span>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="w-1/2 gap-10 flex flex-col">
            <MockImage />
            <span className="text-lg leading-relaxed">
              {`Logged values and runtime errors for a line of code are displayed in your 
          editor hover tooltip. No need to leave your editor to see formatted values, 
          full error messages, or navigable stack trace.`}
            </span>
          </div>
          <div className="w-1/2 gap-10 flex flex-col">
            <MockImage />
            <span className="text-lg leading-relaxed">
              <HighLightText className="text-bb-green" text="Output from #runtime errors, console.log, console.trace, console.time and network requests# is displayed in your editor next to the relevant line of code. No more context switching to the browser dev tools console, or terminal output." />
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}