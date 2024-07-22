export default function HeadlinesPage({ params }) {
  const countyCode = params.country;
  return <p>Country Code: { countyCode }</p>
}
