import { useState, useEffect } from 'react'
import Inputs from 'shared/Inputs/ui/Inputs'
import { CheckEextensions } from '../lib/checkExtensions'

import { MdLayersClear } from 'react-icons/md'

interface FileInputProps {
  onChangeCount: (count: number | string | null | undefined) => void
  disabled: boolean
}
const FileInput: React.FC<FileInputProps> = ({ onChangeCount, disabled }) => {
  const [fileValue, setFileValue] = useState<File | undefined>()
  useEffect(() => {
    if (fileValue) {
      CheckEextensions(fileValue).then((num: number | string | undefined) => {
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
    <>
      {fileValue && (
        <MdLayersClear
          onClick={() => {
            onChangeCount(null)
            setFileValue(undefined)
          }}
        />
      )}
      <Inputs
        type="file"
        name={'document'}
        onChange={onChangeFileValue}
        label="Или приложите файл"
        value={fileValue}
        accept=".pdf, .doc,.docx,.txt"
        disabled={disabled}
      />
    </>
  )
}

export default FileInput
