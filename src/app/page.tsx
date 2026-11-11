import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <h1>Home Page</h1>;
}
