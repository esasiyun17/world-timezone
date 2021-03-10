import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Citys() {
  const [citys, setCitys] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [citysTampon, setCitysTampon] = useState([null]);

  useEffect(() => {
    getCitys();
  }, []);

  // const getCitys = async ()=>{
  //     const response = await fetch('http://worldtimeapi.org/api/timezone');
  //     const data = await response.json();
  //     console.log(data);
  // }

  const getCitys = () => {
    axios.get("http://worldtimeapi.org/api/timezone").then((res) => {
      //console.log(res.data);
      setCitys(res.data);
    });
  };

  const filterCity = (e) => {
    var input = e.target.value;
    //console.log(input);

    setCitys((onceCity) => {
      return citys.filter((c) => {
        return c.toLowerCase().includes(input.toLowerCase());
      });
    });
  };

  return (
    <div>
      <div className="row container">
        <form className="col s12 l12 m12">
          <div className="input-field col s12">
            <input
              type="text"
              id="city"
              className="input-field"
              onChange={filterCity}
            />
            <label htmlFor="city" className="deep-orange-text">
              City Name
            </label>
          </div>
        </form>
      </div>
      <div className="row">
        {citysTampon != null
          ? citys.map((c) => (
              <Link key={c} to={`/${c}`}>
                <div className="col l3 m4 s6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <p>{c}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : citysTampon.map((c) => (
              <Link key={c} to={`/${c}`}>
                <div className="col l3 m4 s6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <p>{c}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
