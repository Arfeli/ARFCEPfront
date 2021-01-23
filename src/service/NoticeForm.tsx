import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { Noticias } from "./Notices";
import * as videoServices from "./NoticeServices";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Params {
  id: string;
}

const NoticeForm = () => {
  const history = useHistory();
  const params = useParams<Params>();
  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = React.useState<Noticias>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await videoServices.createVideo(video);
      toast.success("nuevo video agregado");
    } else {
        await videoServices.updateVideo(params.id, video);
    }
    
    history.push("/");
    setVideo(initialState);
  };
  const getVideo = async (id: string) => {
    const res = await videoServices.getVideo(id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };
  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, []);
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New video</h3>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="escribe el titulo del video"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                  value={video.title}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="escribe una descripcion"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
                {params.id ? (
                  <button className="btn btn-info mt-1">Editar Video</button>
                ) : (
                  <button className="btn btn-primary mt-1">Crear Video</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeForm;