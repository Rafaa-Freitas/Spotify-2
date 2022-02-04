import Song from './Song';
import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';

function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="p-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks.items.map((track, index) => (
        <Song key={track.track.id} order={index} track={track} />
      ))}
    </div>
  );
}

export default Songs;
