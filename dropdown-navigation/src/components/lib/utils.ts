
export async function fetchData() {
  const response = await fetch(`https://dropdown-navigation-data.s3.ap-south-1.amazonaws.com/page.json`);
  const data = await response.json();
  return data;
}