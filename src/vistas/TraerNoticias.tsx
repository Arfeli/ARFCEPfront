import React, { useEffect, useState } from "react";
import CreateNote from "./editor/CreateNote";
import { Noticias } from "../service/Notices";
import * as videoServices from "../service/NoticeServices";

const NoticeList = () => {
  const [videos, setVideos] = useState<Noticias[]>([]);
  const loadVideo = async () => {
    const res = await videoServices.getVideos();
    const formatedVideos = res.data.map((video) => {
        return {
            ...video,
            createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
            updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
        }
    })
    .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());
    setVideos(formatedVideos);
  }
  useEffect(() => {
    loadVideo();
  }, []);
  return (
    <div className="container content-justify-between">
      <div className="row">
      {videos.map((video) => {
        return <CreateNote video={video} key={video._id} loadVideo={loadVideo}/>;
      })}
    </div>
    </div>
    
  );
};

export default NoticeList;