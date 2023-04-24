import { docxWordCount } from './checkCountWordsInText/docxWordCount'
import { pdfWordCount } from './checkCountWordsInText/pdfWordCount'
import { txtWordCount } from './checkCountWordsInText/txtWordCount'

export const CheckEextensions = async (file: File) => {
  const type = file.type
  if (
    type === '.doc' ||
    type === '.docx' ||
    type === '.xml' ||
    type === 'application/msword' ||
    type ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    return await docxWordCount(file)
  } else if (type === 'application/pdf') {
    return await pdfWordCount(file)
  } else if (type === 'text/plain') {
    return (await txtWordCount(file))
  } else {
    return 'Выберете файл в одном из данных форматов:".pdf",".txt",".doc*"'
  }
}
