export const generateStaticParams = async () => [
  {
    slug: "test",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
