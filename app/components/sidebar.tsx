import { Home, LayoutGrid, ListMusic, ListPlus } from 'lucide-react';
import { Link } from '@remix-run/react';
import { Playlist } from '~/lib/playlists';
import { playlists } from '~/data/playlists';

type SidebarProps = {
  playlists?: Playlist[];
};

export function Sidebar({ playlists = fallbackPlaylists }: SidebarProps) {
  const showPlaylists = true;

  return (
    <div className="sidebar">
      <section>
        <h2 className="mb-2">Discover</h2>

        <div className="space-y-1">
          <a href="/app" className="sidebar_link">
            <Home />
            Home
          </a>

          <a href="/app/library" className="sidebar_link">
            <LayoutGrid />
            Library
          </a>

          <a href="/app/playlists" className="sidebar_link">
            <ListMusic />
            Your Playlists
          </a>
        </div>
      </section>

      {showPlaylists ? (
        <section>
          <h2 className="mb-2">Playlists</h2>

          <div className="space-y-1">
            {playlists?.map((playlist) => (
              <Link key={playlist.id} className="sidebar_link" to={`/app/playlists/${playlist.id}`}>
                <ListMusic />
                {playlist.title}
              </Link>
            ))}

            <Link className="sidebar_link" to="/app/playlists/new">
              <ListPlus /> Create new playlist
            </Link>
          </div>
        </section>
      ) : null}
    </div>
  );
}
const fallbackPlaylists = playlists;
