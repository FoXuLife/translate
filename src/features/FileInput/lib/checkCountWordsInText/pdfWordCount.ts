import * as pdfjs from 'pdfjs-dist'
import {
  TextContent,
  TextItem,
  TextMarkedContent,
} from 'pdfjs-dist/types/src/display/api'

const countWordsInPdf = async (file: File) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  const loadPdf = async (file: File) => {
    const buffer = await file.arrayBuffer()

    const loadingTask: pdfjs.PDFDocumentLoadingTask = pdfjs.getDocument(buffer)
    const pdf: pdfjs.PDFDocumentProxy = await loadingTask.promise
    return extractText(pdf)
  }

  const extractText = async (pdf: pdfjs.PDFDocumentProxy) => {
    const textContent: pdfjs.PDFPageProxy[] = []
    for (let i = 1; i < pdf.numPages; i++) {
      const content = await pdf.getPage(i)
      textContent.push(content)
    }
    const textItems = textContent.map(async (page) => {
      const textPage: TextContent = await page.getTextContent()
      const wordsPage: string[] = textPage.items.map((item: TextItem | any) => {
        const itemText: string = item.str
        return itemText.trim()
      })
      return wordsPage.join(' ')
    })
    const result = []
    for (let j = 0; j < textItems.length; j++) {
      result.push(await textItems[j])
    }

    return countWords(result.join(' '))
  }

  const countWords = (text: string) => {
    const words = text.split(/\s+/)
    return words.length
  }
  return loadPdf(file)
}

export const pdfWordCount = async (file: File) => {
  const count = await countWordsInPdf(file)
  return count
}
