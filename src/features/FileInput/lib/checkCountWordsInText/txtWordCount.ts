export const txtWordCount = async (txtFile: File) => {
  const text = await txtFile?.text()
  return text.split(/\s+/).length
}
