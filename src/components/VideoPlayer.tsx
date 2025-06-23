import { useRef, useState } from 'react';
import styles from "./VideoPlayer.module.css"

type VideoPlayerProps = {
  onClose: () => void;
};

export default function VideoPlayer(props: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [volumeSliderValue, setVolumeSlider] = useState(1);
  const { onClose } = props

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleReset = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  }

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
    if (videoRef.current) {
      videoRef.current.currentTime = newValue;
    }
  };

  const handleVolumeSliderChange = (event) => {
    const newVolume = event.target.value;
    setVolumeSlider(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setSliderValue(videoRef.current.currentTime);
    }
  };

  return (
    <div className={styles.videoPlayer}>
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        className={styles.video}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

    <div className={styles.controls}>
      <input
        min={0}
        max={videoRef.current?.duration}
        type="range"
        value={sliderValue}
        onChange={handleSliderChange}
        className={styles.slider}
      />

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonsItem} onClick={handleReset} title="Reiniciar">⟲</button>
        <button className={styles.buttonsItem} onClick={handlePlay} title="Reproducir">▶</button>
        <button className={styles.buttonsItem} onClick={handlePause} title="Pausar">⏸</button>
        <input
          min={0}
          max={1}
          step={0.1}
          type="range"
          title='Volumen'
          value={volumeSliderValue}
          onChange={handleVolumeSliderChange}
          className={styles.sliderVolume}
        />
        <button 
          className={styles.buttonsItem} 
          onClick={handleFullScreen} 
          title="Pantalla Completa">🖵
        </button>
        <button className={styles.buttonsClose} onClick={onClose} title='Cerrar'>✕</button>
      </div>

        <div className={styles.timeDisplay}>
          {videoRef.current?.currentTime.toFixed(2)} /{' '}
          {videoRef.current?.duration.toFixed(2)}
        </div>
      </div>
    </div>
  );
}