// api.ts
import { revalidatePath } from 'next/cache';

export async function getData() {
  try {
    const res = await fetch("https://s12-01-m-node-react.onrender.com/api/v1/events/");
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    revalidatePath("/", "layout");
    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
}
