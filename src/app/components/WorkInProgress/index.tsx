import { useState } from 'react';
import styles from './WorkInProgress.module.scss';

export function WorkInProgress() {
  const [audio] = useState(
    new Audio('/audio/Jamie Berry ft. Octavia Rose - Lost In The Rhythm (128 kbps).mp3')
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudio = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    } else {
      setIsPlaying(true);
      audio.play();
    }
  };
  return (
    <div className={styles.Container}>
      <div>Nothing here yet :)</div>
      <div>Have a dancing squirrel while you wait</div>
      <div className={styles.Squirrel}>
        {isPlaying ? (
          <img
            onClick={handleAudio}
            className={styles.ImagePlaying}
            alt="Dancing Squirrel"
            src="https://cdn.discordapp.com/attachments/248430185463021569/917123652200321034/dancing_squirrel.gif"
          />
        ) : (
          <img
            onClick={handleAudio}
            className={styles.ImageDisabled}
            alt="Dancing Squirrel"
            src="https://cdn.discordapp.com/attachments/248430185463021569/917137831716085780/dancing_squirrel_still.png"
          />
        )}
      </div>
    </div>
  );
}
