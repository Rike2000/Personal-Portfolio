import HoverVideoPlayer from 'react-hover-video-player';

interface PhoneFrameProps {
  videoSrc: string;
  title: string;
  thumbnail: any;
}
export function PhoneFrame({
  videoSrc,
  thumbnail
}: PhoneFrameProps) {
  return <div className="relative w-full max-w-[280px] mx-auto">
      {/* Phone frame */}
      <div className="relative z-10 pt-1 pb-1 px-1 bg-gray-900 rounded-[40px] shadow-lg border-4 border-gray-700">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-20 flex items-center justify-center">
          <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
        </div>
        {/* Screen */}
        <div className="relative bg-white rounded-[30px] overflow-hidden aspect-[9/19.5]">
          <HoverVideoPlayer
            videoSrc={videoSrc}
            restartOnPaused
            pausedOverlay={
              <img
                src= {thumbnail}
                alt=''
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            }
          />
       </div>
      </div>
    </div>;
}