import { useRef, useState, useEffect } from 'react';
import styles from "./VideoPlayer.module.css";

type VideoPlayerProps = {
  title: string;
  src: string;
  onClose: () => void;
};

export default function VideoPlayer(props: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [volumeSliderValue, setVolumeSlider] = useState(1);
  const [isClosing, setIsClosing] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const autoPlay = video.play();
      if (autoPlay !== undefined) {
        autoPlay
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.warn("Autoplay bloqueado por el navegador:", error);
          });
      }
    }
  }, []);

  const { title, src, onClose } = props;

  //const handlePlay = () => videoRef.current?.play();
  //const handlePause = () => videoRef.current?.pause();

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };
  const handleReset = () => { if (videoRef.current) videoRef.current.currentTime = 0; };
  const handleFullScreen = () => videoRef.current?.requestFullscreen();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setSliderValue(newValue);
    if (videoRef.current) videoRef.current.currentTime = newValue;
  };

  const progressPercent = duration ? (sliderValue / duration) * 100 : 0;

  const handleVolumeSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolumeSlider(newVolume);
    if (videoRef.current) videoRef.current.volume = newVolume;
  };

  /* const handleTimeUpdate = () => {
    if (videoRef.current) setSliderValue(videoRef.current.currentTime);
  }; */

  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const paddedHrs = hrs.toString().padStart(2, '0');
    const paddedMins = mins.toString().padStart(2, '0');
    const paddedSecs = secs.toString().padStart(2, '0');

    return hrs > 0
      ? `${paddedHrs}:${paddedMins}:${paddedSecs}`
      : `${paddedMins}:${paddedSecs}`;
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div className={`${styles.videoPlayer} ${isClosing ? styles.closing : ''}`}>
      <h2 className={styles.videoTitle}>{title}</h2>
      <video
        ref={videoRef}
        src={src}
        onTimeUpdate={() => {
          if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setSliderValue(videoRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (videoRef.current) {
            setDuration(videoRef.current.duration);
          }
        }}
        className={styles.video}
      >
      </video>

      <div className={styles.controls}>
        <div className={styles.timeRow}>
          <input
            min={0}
            max={videoRef.current?.duration || 0}
            type="range"
            value={sliderValue}
            onChange={handleSliderChange}
            className={styles.slider}
            style={{
              background: `linear-gradient(to right, #f10e0e 0%, #f10e0e ${progressPercent}%,
              #444 ${progressPercent}%, #444 100%)`
            }}
          />
          <div className={styles.timeDisplay}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
          <button className={styles.buttonsItem} onClick={handleReset} title="Reiniciar">⟲</button>
          <button 
            className={styles.buttonsItem} 
            title={isPlaying ? 'Pausar' : 'Reproducir'}
            onClick={handlePlayPause}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <input
            min={0}
            max={1}
            step={0.1}
            type="range"
            title="Volumen"
            value={volumeSliderValue}
            onChange={handleVolumeSliderChange}
            className={styles.sliderVolume}
          />
          <button className={styles.buttonsItem} onClick={handleFullScreen} title="Pantalla Completa">🖵</button>
          <button className={styles.buttonsClose} onClick={handleClose} title="Cerrar">✕</button>
        </div>
    </div>
  );
}