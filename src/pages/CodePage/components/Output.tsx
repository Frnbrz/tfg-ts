import Button from '@/components/Button'
import { executeCode } from '@/services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface OutputProps {
  editorRef: React.MutableRefObject<IEditor | null>
  language: string
  setLanguage: (language: string) => void
}
interface IEditor {
  focus: () => void
  getValue: () => string | undefined
}

function Output({ editorRef, language }: OutputProps) {
  const [output, setOutput] = useState<string[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  async function runCode() {
    const sourceCode = editorRef.current?.getValue()
    if (!sourceCode) return

    try {
      setIsLoading(true)
      const { run: result } = await executeCode(sourceCode, language)
      setOutput(result.output.split('\n'))
      result.stderr ? setIsError(true) : setIsError(false)
    } catch (error: unknown) {
      console.error(error)
      const errorMessage =
        (error as Error)?.message ||
        'Ha ocurrido un error inesperado. Por favor, intenta de nuevo.'
      toast.error(errorMessage, {
        autoClose: 5000,
        closeOnClick: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='w-[43%]'>

      <Button onClick={runCode} isLoading={isLoading} animate white>
        Run Code
      </Button>
      <div className='mt-4 bg-n-6 border border-n-6  rounded-t-2xl
        p-2
      '>
        <span
          className='w-full h-full px-4 
          text-n-1 font-bold text-sm lg:text-base lg:px-8 lg:py-4 lg:rounded-[3.5rem] lg:font-bold  lg:leading-6 lg:tracking-[0.02em]  lg:uppercase lg:transition-colors transition ease-in-out delay-150'
        >Output</span>
      </div>
      <div className='bg-n-8 overflow-y-auto  h-1/2 lg:h-[70vh] border border-n-6
      rounded-b-2xl p-4 text-sm text-n-1 font-mono whitespace-pre-wrap
      '>
        {output
          ? output.map((line, index) => (
            <span key={index} className={isError ? 'text-red-500' : ''}>
              {line}
            </span>
          ))
          : 'Codigo sera ejecutado aqui...'}
      </div>

    </div>
  )
}

export default Output
