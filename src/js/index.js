const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}
console.log('test1')
const url = 'https://jsonplaceholder.typicode.com/todos'
async function fetchAsyncToDos() {
  console.log('fetching toDos')
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('data:', data)
  } catch (e) {
    console.error(e)
  } finally {
    console.log('операция прошла успешно')
  }
}
fetchAsyncToDos()