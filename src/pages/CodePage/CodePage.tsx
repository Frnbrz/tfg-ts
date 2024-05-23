
import Section from "@/components/Section"
import { useRef, useState } from "react"
import EditorComponent from "./components/EditorComponent"
import Output from "./components/Output"

interface IEditor {
  focus: () => void
}



interface IEditor {
  focus: () => void
  getValue: () => string | undefined
}

function CodePage() {
  const [language, setLanguage] = useState('javascript')
  const editorRef = useRef<IEditor | null>(null)
  return (

    <Section id="code"
      className='pt-[12rem] -mt-[5.25rem] '
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings='pt-[12rem] -mt-[5.25rem]' >


      {/* flex col desktop no flex mobile */}
      <div className="flex flex-col lg:flex-row justify-center  gap-5">

        <EditorComponent
          editorRef={editorRef}
          language={language}
          setLanguage={setLanguage}
        />
        <Output
          editorRef={editorRef}
          language={language}
          setLanguage={setLanguage}
        />
      </div>
    </Section >
  )
}
export default CodePage