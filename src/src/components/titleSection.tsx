export default function TitleSection({ title }: { title: string }) {
  return (
    <h1 className="text-bb-green text-4xl font-bold text-center py-40">
      {title.toUpperCase()}
    </h1>
  )
}