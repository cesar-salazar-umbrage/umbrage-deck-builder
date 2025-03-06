"use client";

import TableGrid from "./components/TableGrid";
import TemplateCard from "./components/TemplateCard";

export default function Home() {
  return (
    <div className="container-fluid grid items-center justify-items-center min-h-screen p-8 pb-20 gap-2">
      <div className="jumbotron justify-items-center">
        <div className="search-card m-8">
          <h1 className="h1 text-center"><b>Hi, Joshua!</b></h1>
          <p className="text-center">What would you like to create today?</p>
          <form className="form-inline my-2 my-lg-0 form justify-items-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z" stroke="#696F79" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50533 18.2589 8.71454Z" stroke="#696F79" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z" stroke="#696F79" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="paper-airplane">
                <path id="Vector" d="M4.75086 8.99984L2.81641 2.71338C7.44385 4.05921 11.8076 6.18524 15.7194 8.99984C11.8078 11.8144 7.44432 13.9404 2.81711 15.2863L4.75086 8.99984ZM4.75086 8.99984H10.0634" stroke="#B4B7BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
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
