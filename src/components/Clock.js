import React, { useEffect ,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment';

export default function Clock({ match }) {

    const [saat,setSaat] = useState("");
  useEffect(() => {
    //console.log(match.params);
    getTime();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTime = () => {
    axios.get(
      `http://worldtimeapi.org/api/timezone/${match.params.kita}/${match.params.city}`
    ).then(res =>{
        //console.log(res.data);
        setSaat(res.data.datetime)
    })
  };
  return (
    <div className="container">
        <div className="card">
            <Link className="btn-floating left halfway-fab waves-light waves-effect deep-orange" to={'/'}>
                <i className="material-icons">undo</i>
            </Link>
            <div className="card-content">
                <h4 className="center deep-orange-text">{match.params.city}</h4>
                <h1 className="center blue-gray-text">{moment(saat).calendar()}</h1>
            </div>
        </div>
        
    </div>
  );
}
