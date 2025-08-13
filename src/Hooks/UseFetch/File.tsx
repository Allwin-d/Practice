import UseFetch from "./UseFetch";

export default function File() {
  const [data, loading, error] = UseFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red", backgroundColor: "gray" }}>{error}</p>;
  }

  return (
    <ul>
      {data.map((item: any) => (
        <li key={item.id}>
          <strong>{item.title}</strong>
        </li>
      ))}
    </ul>
  );
}
