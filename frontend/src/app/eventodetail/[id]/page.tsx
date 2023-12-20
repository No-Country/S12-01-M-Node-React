import { revalidatePath } from "next/cache";
import { EventDetailContainer } from "@/components/eventos/eventosDetail/EventDetailContainer";

async function getData() {
  const res = await fetch(
    "https://s12-01-m-node-react.onrender.com/api/v1/events/"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  revalidatePath("/", "layout");
  return res.json();
}

async function getSingleEvent(id: string) {
  const res = await fetch(
    `https://s12-01-m-node-react.onrender.com/api/v1/events/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  revalidatePath("/", "layout");

  return res.json();
}

const EventDetail = async ({ params }: { params: { id: string } }) => {
  const events = await getData();
  const { id } = params;
  const singleEvent = await getSingleEvent(id);

  return (
    <main>
      <EventDetailContainer
        singleEvent={singleEvent}
        events={events}
      />
    </main>
  );
};

export default EventDetail;
