export async function fetchData(): Promise<any> {
  const response = await fetch('/src/data/page.json');
  const data = await response.json();
  return data;
}
