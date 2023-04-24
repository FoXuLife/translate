import { useState, useEffect } from 'react'
import Inputs from 'shared/Inputs/ui/Inputs'
import { CheckEextensions } from '../lib/checkExtensions'

interface FileInputProps {
  onChangeCount: (count: number) => void
  disabled: boolean
}
const FileInput: React.FC<FileInputProps> = ({ onChangeCount, disabled }) => {
  const [fileValue, setFileValue] = useState<File>()
  useEffect(() => {
    if (fileValue) {
      CheckEextensions(fileValue).then((num: any) => {
        onChangeCount(num)
      })
    }
  }, [fileValue])

  const onChangeFileValue = (file: React.ChangeEvent<HTMLInputElement>) => {
    if (file) {
      setFileValue(file.target?.files?.[0])
    }
  }
  return (
    <Inputs
      type="file"
      name={'document'}
      onChange={onChangeFileValue}
      label="Или приложите файл"
      value={fileValue}
      accept=".pdf, .doc,.docx,.txt"
      disabled={disabled}
    />
  )
}

export default FileInput
