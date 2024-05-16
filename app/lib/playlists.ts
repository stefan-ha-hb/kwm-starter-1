import { storage } from './db';
import { prefixStorage } from 'unstorage';
import { v4 as uuidv4 } from 'uuid';

export type Playlist = {
  title: string;
  id: string;
  createdAt: string;
};

const playlistStorage = prefixStorage<Playlist[]>(storage, 'playlists');

export const getAllPlaylists = async () => {
  return (await playlistStorage.getItem('data')) ?? [];
};

export const getPlaylistById = async (id: string) => {
  const playlists = await getAllPlaylists();
  return playlists.find((x) => x.id === id);
};

export const createPlaylist = async (title: string) => {
  const playlists = await getAllPlaylists();
  const id = uuidv4();
  const date = new Date().toISOString();
  const newPlayList = { id, title, createdAt: date };
  console.log(playlists);
  console.log(playlists);
  playlistStorage.setItem('data', [...playlists, newPlayList]);
  return newPlayList;
};
