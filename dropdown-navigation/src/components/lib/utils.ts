
export async function fetchData() {
  const response = await fetch('http://localhost:3000/data/page.json');
  const data = await response.json();
  return data;
}
