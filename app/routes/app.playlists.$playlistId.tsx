import { useParams } from '@remix-run/react';
import { playlists } from '~/data/playlists';

// TODO do not commit this
export default function PlaylistPage() {
  const params = useParams();

  const playlist = playlists.find((playlist) => playlist.id === params.playlistId);

  if (!playlist) {
    return <h1>404</h1>;
  }

  return <h1>{playlist.title}</h1>;
}
