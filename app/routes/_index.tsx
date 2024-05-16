import { Pause, Play } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { tracks } from '~/data/tracks';

export default function Page() {
  const [currentTrackId, setCurrentTrackId] = useState<null | string>(null);

  return (
    <main className="min-h-screen p-10 track-list">
      {tracks.map((track) => (
        <TackCard
          key={track.id}
          title={track.title}
          artist={track.artist}
          imageUrl={track.imageUrl}
          isPlaying={currentTrackId === track.id}
          onPlayButtonClicked={() => {
            if (track.id === currentTrackId) {
              setCurrentTrackId(null);
            } else {
              setCurrentTrackId(track.id);
            }
          }}
        ></TackCard>
      ))}
    </main>
  );
}

type TrackCardProps = { title: string; artist: string; isPlaying: boolean; imageUrl?: string; onPlayButtonClicked: () => void };

function TackCard(props: TrackCardProps) {
  return (
    <section className="track-card">
      <div className="track-card_cover">
        <img alt="Cover art for song" src={props.imageUrl ?? 'https://picsum.photos/id/11/240/320'} className="track-card_cover-img" />
      </div>

      <div className="track-card_body flex">
        <div className="flex-none">
          <IconButton onClick={props.onPlayButtonClicked}>{props.isPlaying ? <Pause /> : <Play />}</IconButton>
        </div>
        <div className="flex-auto">
          <h3 className="track-card_title">{props.title}</h3>
          <div>{props.artist}</div>
        </div>
      </div>
    </section>
  );
}

type IconButtonProps = { children?: ReactNode; onClick: () => void };

function IconButton(props: IconButtonProps) {
  return (
    <button className="icon-button" type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
