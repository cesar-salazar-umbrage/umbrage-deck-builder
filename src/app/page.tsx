"use client";

import TableGrid from "./components/TableGrid";
import TemplateCard from "./components/TemplateCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container-fluid grid items-center justify-items-center min-h-screen p-8 pb-20 gap-2">
      <div className="jumbotron justify-items-center">
        <div className="search-card m-8">
          <h1 className="h1 text-center"><b>Hi, Joshua!</b></h1>
          <p className="text-center">What would you like to create today?</p>
          <form className="form-inline my-2 my-lg-0 form justify-items-center items-center">
            <Image src="sparkle.svg" width={30} height={22} alt={""} />
            <input
              className="form-control mr-sm-2 flex-grow-1"
              type="search"
              placeholder="Try asking me to create a slide deck for a client in client branding"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <Image src="search-arrow.svg" width={30} height={22} alt={""} />
            </button>
          </form>
          <p className="text-center">or <a className="link">start from a template.</a></p>
        </div>
      </div>
      <div className="row flex justify-content-space-around">
        <div className="container">
          <h2><b>Recommended</b></h2>
          <div className="template-grid">
            <TemplateCard imageSrc="/Rectangle3107.png" footer="Umbrage Deck" />
            <TemplateCard
              imageSrc="/Rectangle3107.png"
              footer="Umbrage Deck"
            />
            <TemplateCard imageSrc="/Rectangle3107.png" footer="Umbrage Deck" />
            <TemplateCard imageSrc="/Rectangle3107.png" footer="Umbrage Deck" />

          </div>
        </div>
      </div>
      <div className="row flex justify-content-space-around">
        <div className="container">
          <h2><b>Frequently Used Templates</b></h2>
          <div className="template-grid">
            <TemplateCard imageSrc="/Rectangle5.png" footer="Umbraticus Dark" />
            <TemplateCard
              imageSrc="/Rectangle1.png"
              footer="Umbraticus Light"
            />
            <TemplateCard imageSrc="/Rectangle2.png" footer="Vision Teal" />
            <TemplateCard imageSrc="/Rectangle3.png" footer="Flux" />

          </div>
        </div>
      </div>
      <TableGrid />
    </div>
  );
}
