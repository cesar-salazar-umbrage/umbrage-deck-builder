"use client";

import TableGrid from "./components/TableGrid";



export default function Home() {



  return (
    <div className="container-fluid grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <div className="row">
        <div className="card">
          <div className="jumbotron jumbotron-fluid">
            <h1 className="h1">Hi, Joshua!</h1>
            <p>What would you like to create today?</p>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <p>
              or start from a template.
            </p>
          </div>
        </div>
      </div>
      <div className="row flex justify-content-space-around">
        <div className="row">
          <h2 className="h2">Recommended</h2>
        </div>
        <div className="col-md m-8">
          <div className="card">
            <p>Umbrage Deck</p>
          </div>
        </div>
        <div className="col-md m-8">
          <div className="card">
            <p>Umbrage Deck</p>
          </div>
        </div>
        <div className="col-md m-8">
          <div className="card">
            <p>Umbrage Deck</p>
          </div>
        </div>
        <div className="col-md m-8">
          <div className="card">
            <p>Umbrage Deck</p>
          </div>
        </div>
      </div>
      <div className="row flex justify-content-space-around">
        <div className="row">
          <h2 className="h2">Frequently Used Templates</h2>
        </div>
        <div className="col-md m-8">
          <div className="card">
            <p>Umbrage Deck</p>
          </div>
        </div>
        <div className="col-md m-8">
          <div className="card">
            <p>Umbrage Deck</p>
          </div>
        </div>
        <div className="col-md m-8">
          <div className="card">
            <p>Umbrage Deck</p>
          </div>
        </div>
        <div className="col-md m-8">
          <div className="card">
            <p>Umbrage Deck</p>
          </div>
        </div>
      </div>
      <TableGrid/>
    </div>
  );
}
