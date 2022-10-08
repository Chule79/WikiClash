export const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/items')
    const transformData = await response.json()
    return transformData
  } catch (error) {
    console.log(error)
  }
}
