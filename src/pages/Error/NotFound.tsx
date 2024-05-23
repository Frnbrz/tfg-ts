import Section from "@/components/Section"

function NotFound() {
  return (
    <Section
      className="overflow-hidden flex justify-center items-center h-[90%]"
      id="notfound" crosses
      crossesOffset='lg:translate-y-[5.25rem]'
    >
      <div className="flex justify-center items-center">
        <h1 className="text-3xl">404 | Not Found</h1>
      </div>
    </Section>

  )
}
export default NotFound