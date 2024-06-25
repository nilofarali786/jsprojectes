import { Link, useNavigate } from "react-router-dom";
import style from "./header.module.css";
import { items } from "./Data";
import { useState } from "react";
export default function Header({ setdata,cards }) {


     const navigate=useNavigate()
  const [search, setsearch] = useState("");
  var Change = (caty) => {
    const element = items.filter((ca) => ca.category === caty);
    setdata(element);
  };
  var  submithandler=(event)=>{
    event.preventDefault()
       navigate(`/serach/${search}`)
  }

    var funPice=(price)=>{
     var newPrice=items.filter((item)=>item.price>=price)
            setdata(newPrice)
    }
  return (
    <>
      <header className={style.h}>
        <nav className={style.Header}>
          <div className={style.brand}> E-commerce</div>
          <form   onSubmit={submithandler} className={style.search}>
            <input
              type="text"
              value={search}
              placeholder="searchproduct"
              onChange={(e)=>setsearch(e.target.value)}
            ></input>
          </form>
          <Link to="/card">
            <div className={style.card}>Card({cards.length})</div>
          </Link>
        </nav>
        <nav className={style.navbar2}>
          <div className={style.item}>Filterby{"-->"}</div>
          <div className={style.item} onClick={() => setdata(items)}>
            NOFilter
          </div>
          <div className={style.item} onClick={() => Change("mobiles")}>
            Mobile
          </div>
          <div className={style.item} onClick={() => Change("laptops")}>
            Laptop
          </div>
          <div className={style.item} onClick={() => Change("tablets")}>
            Tablets
          </div>
          <div className={style.item} onClick={() => funPice(29999)}>
            {">="}29999
          </div>
          <div className={style.item} onClick={() => funPice(49999)}>{">="}49999</div>
          <div className={style.item} onClick={() => funPice(69999)}>{">="}69999</div>
          <div className={style.item} onClick={() => funPice(89999)}>{">="}89999</div>
        </nav>
      </header>
    </>
  );
}
