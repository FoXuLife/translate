import JSZip from 'jszip'

export const docxWordCount = async (docxFile: File) => {
  const zip = new JSZip()
  const zipFile = await zip.loadAsync(docxFile)
  const content = await zipFile.file('word/document.xml')?.async('string')
  if (content) {
    const text = content.replace(/(<([^>]+)>|[-])/gi, '') // remove HTML tags
    const words = text.trim().split(/\s+/)
    return words.length
  }
}
