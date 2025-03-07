import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export const metadata: Metadata = {
  title: "U-Pitch",
  description: "an internal umbrage tool used to create easy and sleek sales pitch slides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container container-fluid flex">
          <div className="row flex-row">
            <div className="col-lg">
                <div className="nav p-3 bg-light sidenav">
                      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                      <img style={{width: "100px"}} src="./U-Pitch-Logo.png"/>
                      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <hr/>
                    <ul className="nav nav-pills flex-column">
                      <li className="nav-item">
                        <a href="#" className="nav-link active flex p-2" aria-current="page">
                          <div className="svg">
                            <Image src="home.svg" width={30} height={22} alt={""} />
                          </div>
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                          <div className="svg">
                            <Image src="workspaces.svg" width={30} height={22} alt={""} />
                          </div>
                          <span>Workspace</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                          <div className="svg">
                            <Image src="templates.svg" width={30} height={22} alt={""} />
                          </div>
                          <span> All Templates</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                          <div className="svg">
                            <Image src="integration.svg" width={30} height={22} alt={""} />
                          </div>
                          <span>Integrations</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                          <div className="svg">
                            <Image src="repositories.svg" width={30} height={22} alt={""} />
                          </div>
                          <span>Repositories</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2">
                          <div className="svg">
                            <Image src="archive.svg" width={30} height={22} alt={""} />
                          </div>
                          <span>Archive</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark flex p-2 mt-80">
                          <div className="svg">
                            <Image src="support.svg" width={30} height={22} alt={""} />
                          </div>
                          <span>Support</span>
                        </a>
                      </li>
                    </ul>
                    <hr/>
                    <a href="#" className="nav-link link-dark flex p-2">
                      <div className="svg">
                        <Image src="logout.svg" width={30} height={22} alt={""} />
                      </div>
                      <span>Logout</span>
                    </a>
                </div>
            </div>
          </div>
          <div className="col-lg">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
