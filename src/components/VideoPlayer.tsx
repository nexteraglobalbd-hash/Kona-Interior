/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { VideoProject } from '../types/index.ts';
import { Play, Pause, Volume2, VolumeX, Maximize2, Settings, Film, Check } from 'lucide-react';

interface VideoPlayerProps {
  videos: VideoProject[];
  defaultIndex?: number;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videos,
  defaultIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoList, setVideoList] = useState<VideoProject[]>(videos);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [editUrl, setEditUrl] = useState('');
  const [saveMessage, setSaveMessage] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentVideo = videoList[currentIndex] || videoList[0];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleSelectVideo = (idx: number) => {
    setCurrentIndex(idx);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleSaveCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editUrl.trim()) return;
    const updated = [...videoList];
    updated[currentIndex] = {
      ...updated[currentIndex],
      videoUrl: editUrl.trim(),
    };
    setVideoList(updated);
    setSaveMessage(true);
    setTimeout(() => {
      setSaveMessage(false);
      setIsConfigOpen(false);
    }, 1500);
  };

  return (
    <div className="bg-[#222222] text-[#F7F6F2] rounded-xs overflow-hidden shadow-xl border border-[#333333]">
      {/* Video Viewport Container */}
      <div className="relative aspect-video w-full bg-black group">
        <video
          ref={videoRef}
          src={currentVideo.videoUrl}
          poster={currentVideo.thumbnail}
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />

        {/* Central Play/Pause Watermark Overlay */}
        <div
          onClick={handleTogglePlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
        >
          {!isPlaying && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F58220] text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 ml-1 fill-white" />
            </div>
          )}
        </div>

        {/* Top Video Indicator */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="bg-black/70 backdrop-blur-xs px-3 py-1.5 rounded-xs text-xs font-medium text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
            <span>KONA INTERIOR · Project Video {currentIndex + 1} of 2</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditUrl(currentVideo.videoUrl);
              setIsConfigOpen(!isConfigOpen);
            }}
            className="pointer-events-auto bg-black/70 hover:bg-black/90 text-xs px-2.5 py-1.5 rounded-xs text-[#cccccc] hover:text-white flex items-center gap-1.5 transition-colors border border-white/10"
            title="Configure Video URL"
          >
            <Settings className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Replace Video URL</span>
          </button>
        </div>

        {/* Bottom Control Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleTogglePlay}
              className="p-1.5 text-white hover:text-[#F58220] transition-colors focus-visible:outline-2 focus-visible:outline-[#F58220] rounded-xs"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
            </button>
            <button
              onClick={handleToggleMute}
              className="p-1.5 text-white hover:text-[#F58220] transition-colors focus-visible:outline-2 focus-visible:outline-[#F58220] rounded-xs"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <span className="text-xs text-[#cccccc] font-medium hidden sm:inline">
              {currentVideo.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#aaaaaa] font-mono hidden md:inline">
              1080p HD Video
            </span>
            <button
              onClick={handleFullscreen}
              className="p-1.5 text-white hover:text-[#F58220] transition-colors focus-visible:outline-2 focus-visible:outline-[#F58220] rounded-xs"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Source Configuration Panel (Owner editable helper as requested in PDF) */}
      {isConfigOpen && (
        <div className="p-4 bg-[#1a1a1a] border-t border-[#333333] animate-fadeIn text-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-[#F58220] uppercase tracking-wider text-[11px]">
              KONA INTERIOR · Client Video Configuration
            </span>
            <button
              onClick={() => setIsConfigOpen(false)}
              className="text-[#999999] hover:text-white"
            >
              Close
            </button>
          </div>
          <p className="text-[#aaaaaa] mb-3">
            Paste the direct URL to your hosted project video file (MP4/WebM) or local video file for{' '}
            <strong className="text-white">Video {currentIndex + 1}</strong>.
          </p>
          <form onSubmit={handleSaveCustomUrl} className="flex gap-2">
            <input
              type="url"
              value={editUrl}
              onChange={(e) => setEditUrl(e.target.value)}
              placeholder="https://example.com/project-walkthrough.mp4"
              className="flex-1 px-3 py-2 bg-black border border-[#444444] rounded-xs text-white text-xs focus:outline-hidden focus:border-[#F58220]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#F58220] text-white font-medium rounded-xs hover:bg-[#e07416] transition-colors flex items-center gap-1"
            >
              {saveMessage ? <Check className="w-3.5 h-3.5" /> : null}
              <span>{saveMessage ? 'Updated' : 'Apply Video'}</span>
            </button>
          </form>
        </div>
      )}

      {/* Video Selector Tabs */}
      <div className="p-4 sm:p-5 bg-[#2a2a2a] border-t border-[#3a3a3a]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#F58220] flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5" />
            <span>Select Project Walkthrough Video</span>
          </span>
          <span className="text-[11px] text-[#888888]">2 Videos Available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {videoList.map((vid, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={vid.id}
                onClick={() => handleSelectVideo(idx)}
                className={`p-3 text-left rounded-xs border transition-all ${
                  isSelected
                    ? 'border-[#F58220] bg-[#333333] shadow-xs'
                    : 'border-[#444444] bg-[#222222] hover:bg-[#2e2e2e] opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-medium text-xs text-white">
                    {idx === 0 ? 'Video 1: Completed Project' : 'Video 2: Ongoing Site Execution'}
                  </div>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-xs font-medium uppercase ${
                      isSelected ? 'bg-[#F58220] text-white' : 'bg-[#444444] text-[#cccccc]'
                    }`}
                  >
                    {isSelected ? 'Now Playing' : 'Watch'}
                  </span>
                </div>
                <p className="text-[11px] text-[#999999] mt-1 line-clamp-1">{vid.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
