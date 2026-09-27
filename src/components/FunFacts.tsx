import React, { useState } from 'react';
import { Smile, Heart, Bike, Image as ImageIcon, Video as VideoIcon, Copy, Check, Play, Upload } from 'lucide-react';

export const FunFacts: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'image' | 'video' | null>(null);
  const [testImage, setTestImage] = useState<string | null>(null);
  const [testVideo, setTestVideo] = useState<string | null>(null);

  // Exact placeholders as specified in prompt
  const funFacts = [
    { id: 1, text: '[Write a fun fact about yourself]' },
    { id: 2, text: '[Write a fun fact about yourself]' },
    { id: 3, text: '[Write a fun fact about yourself]' },
  ];

  const favoriteThings = [
    { id: 1, text: '[Something you enjoy]' },
    { id: 2, text: '[Something you enjoy]' },
    { id: 3, text: '[Something you enjoy]' },
  ];

  const imageCommentSnippet = `<!-- REPLACE WITH YOUR PERSONAL IMAGE: -->
<img 
  src="/your-media-image.jpg" 
  alt="Personal Photo" 
  className="w-full h-full object-cover rounded-xl" 
/>`;

  const videoCommentSnippet = `<!-- REPLACE WITH YOUR VIDEO: -->
<!-- For self-hosted video: -->
<video controls className="w-full h-full rounded-xl object-cover">
  <source src="/your-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<!-- OR For YouTube embed: -->
<!-- <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="w-full h-full rounded-xl" allowFullScreen></iframe> -->`;

  const handleCopyCode = (type: 'image' | 'video') => {
    const snippet = type === 'image' ? imageCommentSnippet : videoCommentSnippet;
    navigator.clipboard.writeText(snippet);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTestImage(URL.createObjectURL(file));
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTestVideo(URL.createObjectURL(file));
    }
  };

  return (
    <section id="fun-facts" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
          Personality &amp; Life
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Fun &amp; Creative Side
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          A glimpse into trivia, everyday interests, hobbies, and personal media highlights.
        </p>
      </div>

      {/* Row 1: Fun Facts Grid (3 Fun Facts) */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-6">
          <Smile className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-bold text-white tracking-tight">
            Three Fun Facts
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {funFacts.map((fact, index) => (
            <div
              key={fact.id}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-indigo-400 font-mono mb-4">
                  <span className="font-semibold">FUN FACT #{index + 1}</span>
                  <span className="text-slate-400">0{index + 1}</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-dashed border-slate-700/80 text-slate-300 text-sm leading-relaxed">
                  {fact.text}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
                Replace placeholder with your unique trivia or anecdote.
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Hobbies & Favorite Things */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* My Hobbies Section */}
        <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                My Hobbies
              </h3>
              <p className="text-xs text-slate-400">Activities, creative pursuits, and weekend passions</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/90 border border-dashed border-slate-700/80 text-slate-300 text-base leading-relaxed">
            [Your Hobbies]
          </div>

          <div className="mt-4 text-xs text-slate-400">
            Customize with outdoor activities, music, writing, gaming, or crafts.
          </div>
        </div>

        {/* My Favorite Things Section (Three Items) */}
        <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                My Favorite Things
              </h3>
              <p className="text-xs text-slate-400">Top three things that bring joy, inspiration, or focus</p>
            </div>
          </div>

          <div className="space-y-3">
            {favoriteThings.map((fav, i) => (
              <div
                key={fav.id}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-dashed border-slate-700/80 text-slate-300 text-sm"
              >
                <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 font-mono text-xs flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="font-medium text-slate-200">{fav.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-slate-400">
            Share favorite books, food, tools, destinations, or music genres.
          </div>
        </div>

      </div>

      {/* Row 3: Media Section (Personal Image & Video Placeholders with HTML comments) */}
      <div className="bg-[#0d121f] rounded-3xl border border-slate-800 p-8 sm:p-10 shadow-lg">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            Visual &amp; Motion Assets
          </span>
          <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Media Section
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Dedicated placeholders for personal photography and video recordings, with commented integration instructions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. Personal Image Placeholder */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-indigo-400" />
                <span>Personal Photo Placeholder</span>
              </div>
              <button
                onClick={() => handleCopyCode('image')}
                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-mono"
              >
                {copiedType === 'image' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'image' ? 'Copied' : 'Copy HTML'}</span>
              </button>
            </div>

            {/* HTML Comment explicitly present in the source */}
            {/* <!-- REPLACE WITH YOUR PERSONAL IMAGE: <img src="your-media-image.jpg" alt="Personal photo" class="w-full h-full object-cover rounded-xl" /> --> */}
            
            <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl bg-[#0f172a] border-2 border-dashed border-indigo-500/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              {testImage ? (
                <div className="relative w-full h-full">
                  <img src={testImage} alt="Test Personal Upload" className="w-full h-full object-cover rounded-xl" />
                  <button
                    onClick={() => setTestImage(null)}
                    className="absolute bottom-2 right-2 px-2.5 py-1 text-xs bg-slate-900/90 text-white rounded hover:bg-slate-800"
                  >
                    Reset
                  </button>
                </div>
              ) : (
                <div className="space-y-3 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-300 px-3 py-1 bg-indigo-950/70 border border-indigo-800/60 rounded">
                    [INSERT IMAGE HERE]
                  </span>
                  <p className="text-xs text-slate-400 max-w-xs">
                    Place your personal or travel photo here.
                  </p>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700">
                    <Upload className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Test Local Image</span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>
                </div>
              )}
            </div>

            <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400">
              &lt;!-- REPLACE WITH YOUR PERSONAL IMAGE: &lt;img src="..." alt="Personal photo" /&gt; --&gt;
            </div>
          </div>

          {/* 2. Video Placeholder */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <VideoIcon className="w-4 h-4 text-purple-400" />
                <span>Personal Video Placeholder</span>
              </div>
              <button
                onClick={() => handleCopyCode('video')}
                className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-mono"
              >
                {copiedType === 'video' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'video' ? 'Copied' : 'Copy HTML'}</span>
              </button>
            </div>

            {/* HTML Comment explicitly present in the source */}
            {/* <!-- REPLACE WITH YOUR VIDEO: <video controls class="w-full h-full rounded-xl"><source src="your-video.mp4" type="video/mp4" /></video> OR <iframe src="https://www.youtube.com/embed/VIDEO_ID" class="w-full h-full rounded-xl" allowfullscreen></iframe> --> */}

            <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl bg-[#0f172a] border-2 border-dashed border-purple-500/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              {testVideo ? (
                <div className="relative w-full h-full">
                  <video src={testVideo} controls className="w-full h-full object-cover rounded-xl" />
                  <button
                    onClick={() => setTestVideo(null)}
                    className="absolute top-2 right-2 px-2.5 py-1 text-xs bg-slate-900/90 text-white rounded hover:bg-slate-800"
                  >
                    Reset
                  </button>
                </div>
              ) : (
                <div className="space-y-3 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 relative group cursor-pointer">
                    <Play className="w-7 h-7 ml-0.5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-300 px-3 py-1 bg-purple-950/70 border border-purple-800/60 rounded">
                    [INSERT VIDEO HERE]
                  </span>
                  <p className="text-xs text-slate-400 max-w-xs">
                    Embed an MP4 file, YouTube video, Vimeo link, or recorded demo clip.
                  </p>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700">
                    <Upload className="w-3.5 h-3.5 text-purple-400" />
                    <span>Test Local Video</span>
                    <input type="file" accept="video/*" className="hidden" onChange={handleVideoUpload} />
                  </label>
                </div>
              )}
            </div>

            <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400 truncate">
              &lt;!-- REPLACE WITH YOUR VIDEO: &lt;video controls src="..." /&gt; or &lt;iframe ... /&gt; --&gt;
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
