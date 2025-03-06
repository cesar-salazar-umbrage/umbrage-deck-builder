"use client";

import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef, ClientSideRowModelModule } from "ag-grid-community";
import { ValidationModule } from "ag-grid-enterprise";

interface RowData {
  dateLastOpened: string;
  title: string;
  comment: string;
}

export default function TableGrid() {
  const [columnDefs] = useState<ColDef<RowData>[]>([
    {
      headerName: "",
      pinned: "left",
      width: 50,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      cellRenderer: "agCheckboxCellRenderer",
    },
    { headerName: "Date Last Opened", field: "dateLastOpened", flex: 1 },
    { headerName: "Title", field: "title", flex: 1 },
    { headerName: "Comment", field: "comment", flex: 1 },
  ]);

  const [rowData] = useState<RowData[]>([
    {
      dateLastOpened: "2/25/25",
      title: "Umbrage & Bain RFP for Coca Cola",
      comment: "WP - waiting on Brian",
    },
    {
      dateLastOpened: "2/25/25",
      title: "Umbrage & Bain RFP for Coca Cola",
      comment: "Pending: Ronak",
    },
    {
      dateLastOpened: "2/23/25",
      title: "Umbrage & Bain RFP for USPS",
      comment: "WP - waiting on Brian",
    },
    {
      dateLastOpened: "2/22/25",
      title: "Umbrage & Bain RFP for USPS",
      comment: "Pending: Ronak",
    },
  ]);

  return (
    <div>
      <div className="container-fluid p-3 bg-light rounded shadow-sm">
        <div className="table-buttons-container">
          <ul className="tabs">
            <li className="tab active">Recently viewed</li>
            <li className="tab">Shared with me</li>
            <li className="tab">Pinned</li>
          </ul>

          <div className="controls">
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Search keywords, brands, and clients"
              />
              <span className="search-icon">🔍</span>
            </div>

            <div className="buttons">
              <button className="date-picker">
                <span style={{ marginRight: "12px" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="calendar">
                      <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.79961 1.59998C4.58744 1.59998 4.38395 1.68426 4.23392 1.83429C4.08389 1.98432 3.99961 2.1878 3.99961 2.39998V3.19998H3.19961C2.77526 3.19998 2.3683 3.36855 2.06824 3.6686C1.76818 3.96866 1.59961 4.37563 1.59961 4.79998V12.8C1.59961 13.2243 1.76818 13.6313 2.06824 13.9313C2.3683 14.2314 2.77526 14.4 3.19961 14.4H12.7996C13.224 14.4 13.6309 14.2314 13.931 13.9313C14.231 13.6313 14.3996 13.2243 14.3996 12.8V4.79998C14.3996 4.37563 14.231 3.96866 13.931 3.6686C13.6309 3.36855 13.224 3.19998 12.7996 3.19998H11.9996V2.39998C11.9996 2.1878 11.9153 1.98432 11.7653 1.83429C11.6153 1.68426 11.4118 1.59998 11.1996 1.59998C10.9874 1.59998 10.784 1.68426 10.6339 1.83429C10.4839 1.98432 10.3996 2.1878 10.3996 2.39998V3.19998H5.59961V2.39998C5.59961 2.1878 5.51532 1.98432 5.36529 1.83429C5.21527 1.68426 5.01178 1.59998 4.79961 1.59998ZM4.79961 5.59998C4.58744 5.59998 4.38395 5.68426 4.23392 5.83429C4.08389 5.98432 3.99961 6.1878 3.99961 6.39998C3.99961 6.61215 4.08389 6.81563 4.23392 6.96566C4.38395 7.11569 4.58744 7.19998 4.79961 7.19998H11.1996C11.4118 7.19998 11.6153 7.11569 11.7653 6.96566C11.9153 6.81563 11.9996 6.61215 11.9996 6.39998C11.9996 6.1878 11.9153 5.98432 11.7653 5.83429C11.6153 5.68426 11.4118 5.59998 11.1996 5.59998H4.79961Z"
                        fill="#1D3DB0"
                      />
                    </g>
                  </svg>
                </span>
                Jan 1 - Feb 28
              </button>
              <button className="export-btn">
                <span style={{ marginRight: "12px" }}>
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Intersect"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.26119 0H5.33268H11.9993C12.7357 0 13.3327 0.596954 13.3327 1.33333V6.33333C13.3327 6.60948 13.1088 6.83333 12.8327 6.83333C12.5565 6.83333 12.3327 6.60948 12.3327 6.33333V1.33333C12.3327 1.14924 12.1834 1 11.9993 1H5.83268V3.83333C5.83268 4.56971 5.23573 5.16667 4.49935 5.16667H1.66602V14.6667C1.66602 14.8508 1.81525 15 1.99935 15H11.9993C12.1834 15 12.3327 14.8508 12.3327 14.6667V13C12.3327 12.7239 12.5565 12.5 12.8327 12.5C13.1088 12.5 13.3327 12.7239 13.3327 13V14.6667C13.3327 15.403 12.7357 16 11.9993 16H1.99935C1.26297 16 0.666016 15.403 0.666016 14.6667V4.66667V4.59518C0.666016 4.24155 0.806492 3.90242 1.05654 3.65237L1.41009 4.00592L1.05654 3.65237L4.31838 0.390524C4.56843 0.140475 4.90757 0 5.26119 0ZM4.49935 4.16667H1.95646L4.83268 1.29044V3.83333C4.83268 4.01743 4.68344 4.16667 4.49935 4.16667ZM11.5196 7.64645C11.3243 7.45118 11.0077 7.45118 10.8125 7.64645C10.6172 7.84171 10.6172 8.15829 10.8125 8.35355L11.6256 9.16667H5.33268C5.05654 9.16667 4.83268 9.39052 4.83268 9.66667C4.83268 9.94281 5.05654 10.1667 5.33268 10.1667H11.6256L10.8125 10.9798C10.6172 11.175 10.6172 11.4916 10.8125 11.6869C11.0077 11.8821 11.3243 11.8821 11.5196 11.6869L13.1862 10.0202C13.28 9.92645 13.3327 9.79927 13.3327 9.66667C13.3327 9.53406 13.28 9.40688 13.1862 9.31311L11.5196 7.64645Z"
                      fill="#284AB4"
                    />
                  </svg>
                </span>
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: 220, width: 1200, margin: "0 auto" }}
      >
        <AgGridReact<RowData>
          // rowSelection="multiple"
          modules={[ClientSideRowModelModule, ValidationModule]}
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
    </div>
  );
}
