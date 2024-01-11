"use server";

import { revalidatePath } from "next/cache";

export const runtime = "edge";

export const revalidate = () => {
  revalidatePath("/", "page");
};
