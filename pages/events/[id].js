import { useRouter } from "next/router";
function EventDetailPage() {
  const router = useRouter();
  return (
    <section>
      <div>This is event detail page</div>
      <p>Router query consists of</p>
      <ul>
        {Object.keys(router.query).map((key) => (
          <li>router.query[key]</li>
        ))}
      </ul>
    </section>
  );
}

export default EventDetailPage;
