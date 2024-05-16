export const tabs = [
  { id: 'song', title: 'Music' },
  { id: 'podcast', title: 'Podcasts' },
  { id: 'audiobooks', title: 'Audiobooks', disabled: true },
];

export default function LibraryPage() {
  return (
    <>
      <h1>Library</h1>
      <p className="text-muted-foreground text-sm">Your home. Your music.</p>
    </>
  );
}
