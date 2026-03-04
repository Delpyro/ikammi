import { useState, useRef, useEffect } from 'react';
import { ActionIcon, Tooltip, Transition } from '@mantine/core';
import { IconMusic, IconMusicOff } from '@tabler/icons-react';
import classes from './AudioPlayer.module.css';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);

// Efek muncul perlahan saat web pertama dibuka
  useEffect(() => {
    // Gunakan setTimeout agar tidak trigger cascading renders
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen dihancurkan
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Elemen Audio (Disembunyikan) - Pastikan src mengarah ke file kamu */}
      <audio ref={audioRef} loop src="/asset/audio.mp3" preload="auto" />

      {/* Tombol Melayang di Pojok Kanan Bawah */}
      <Transition transition="pop" duration={500} mounted={mounted}>
        {(styles) => (
          <div style={styles} className={classes.floatingWrapper}>
            <Tooltip 
              label={isPlaying ? "Matikan Musik" : "Putar Musik"} 
              position="left" 
              withArrow
              radius="md"
            >
              <ActionIcon
                className={`${classes.floatingBtn} ${isPlaying ? classes.playing : ''}`}
                onClick={togglePlay}
                size={55} /* Ukuran tombol lumayan besar agar mudah diklik di HP */
                radius="100%"
                color={isPlaying ? "red.7" : "dark.4"}
                variant="filled"
              >
                {isPlaying ? <IconMusic size={26} /> : <IconMusicOff size={26} />}
              </ActionIcon>
            </Tooltip>
          </div>
        )}
      </Transition>
    </>
  );
}