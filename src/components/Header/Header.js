import React from "react";
import { Route, Routes } from "react-router-dom";
import Breadcrumbs from "../../UI/Breadcrumbs";
import Home from "../Home/Home";
import Level1 from "../Level1/Level";
import NotFound from "../../pages/NotFound";

const Header = () => {
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden">
        {/* <!-- Navbar --> */}
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          navbar-scroll="true"
        >
          <div className="container-fluid py-1 px-3">
            <div>{/* <Header /> */}</div>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 px-0"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group input-group-outline">
                  <label className="form-label">أكتب هنا...</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <ul className="navbar-nav me-auto ms-0 justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="#"
                    className="nav-link text-body font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1"></i>
                    <span className="d-sm-inline d-none">يسجل دخول</span>
                  </a>
                </li>
                <li className="nav-item d-xl-none pe-3 d-flex align-items-center">
                  <a
                    href="#"
                    className="nav-link text-body p-0"
                    id="iconNavbarSidenav"
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                    </div>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="#" className="nav-link text-body p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                  </a>
                </li>
                <li className="nav-item dropdown ps-2 d-flex align-items-center">
                  <a
                    href="#"
                    className="nav-link text-body p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell cursor-pointer"></i>
                  </a>
                  <ul
                    className="dropdown-menu  px-2 py-3 me-sm-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href="#">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/team-2.jpg"
                              className="avatar avatar-sm  ms-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New message
                              </span>{" "}
                              from Laur
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1"></i>
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href="#">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/small-logos/logo-spotify.svg"
                              className="avatar avatar-sm bg-gradient-dark  ms-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New album
                              </span>{" "}
                              by Travis Scott
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1"></i>1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item border-radius-md" href="#">
                        <div className="d-flex py-1">
                          <div className="avatar avatar-sm bg-gradient-secondary  ms-3  my-auto">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xlinkHref="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      ></path>
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1"></i>2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}
        <div className="container-fluid py-4">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search-results/:productId" element={<Level1 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {/* <div className="row">
            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">weekend</i>
                  </div>
                  <div className="text-start pt-1">
                    <p className="text-sm mb-0 text-capitalize">أموال اليوم</p>
                    <h4 className="mb-0">$53k</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0 text-start">
                    <span className="text-success text-sm font-weight-bolder ms-1">
                      +55%{" "}
                    </span>
                    من الأسبوع الماضي
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">leaderboard</i>
                  </div>
                  <div className="text-start pt-1">
                    <p className="text-sm mb-0 text-capitalize">
                      مستخدمو اليوم
                    </p>
                    <h4 className="mb-0">2,300</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0 text-start">
                    <span className="text-success text-sm font-weight-bolder ms-1">
                      +33%{" "}
                    </span>
                    من الأسبوع الماضي
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">store</i>
                  </div>
                  <div className="text-start pt-1">
                    <p className="text-sm mb-0 text-capitalize">عملاء جدد</p>
                    <h4 className="mb-0">
                      <span className="text-danger text-sm font-weight-bolder ms-1">
                        -2%
                      </span>
                      +3,462
                    </h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0 text-start">
                    <span className="text-success text-sm font-weight-bolder ms-1">
                      +5%{" "}
                    </span>
                    من الشهر الماضي
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">person_add</i>
                  </div>
                  <div className="text-start pt-1">
                    <p className="text-sm mb-0 text-capitalize">مبيعات</p>
                    <h4 className="mb-0">$103,430</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0 text-start">
                    <span className="text-success text-sm font-weight-bolder ms-1">
                      +7%{" "}
                    </span>
                    مقارنة بيوم أمس
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="card z-index-2 ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas
                        id="chart-bars"
                        className="chart-canvas"
                        height="170"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 ">مشاهدات الموقع</h6>
                  <p className="text-sm ">آخر أداء للحملة</p>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto ms-1">
                      schedule
                    </i>
                    <p className="mb-0 text-sm"> الحملة أرسلت قبل يومين </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="card z-index-2  ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas
                        id="chart-line"
                        className="chart-canvas"
                        height="170"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 "> المبيعات اليومية </h6>
                  <p className="text-sm ">
                    {" "}
                    (<span className="font-weight-bolder">+15%</span>) زيادة في
                    مبيعات اليوم.{" "}
                  </p>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto ms-1">
                      schedule
                    </i>
                    <p className="mb-0 text-sm"> تم التحديث منذ 4 دقائق </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mb-3">
              <div className="card z-index-2 ">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas
                        id="chart-line-tasks"
                        className="chart-canvas"
                        height="170"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 ">المهام المكتملة</h6>
                  <p className="text-sm ">آخر أداء للحملة</p>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">
                      schedule
                    </i>
                    <p className="mb-0 text-sm">تم تحديثه للتو</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
              <div className="card">
                <div className="card-header pb-0">
                  <div className="row mb-3">
                    <div className="col-6">
                      <h6>المشاريع</h6>
                      <p className="text-sm">
                        <i
                          className="fa fa-check text-info"
                          aria-hidden="true"
                        ></i>
                        <span className="font-weight-bold ms-1">30 انتهى</span>{" "}
                        هذا الشهر
                      </p>
                    </div>
                    <div className="col-6 my-auto text-start">
                      <div className="dropdown float-start ps-4">
                        <a
                          className="cursor-pointer"
                          id="dropdownTable"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-secondary"></i>
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end px-2 py-3 me-n4"
                          aria-labelledby="dropdownTable"
                        >
                          <li>
                            <a
                              className="dropdown-item border-radius-md"
                              href="#"
                            >
                              عمل
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item border-radius-md"
                              href="#"
                            >
                              عمل آخر
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item border-radius-md"
                              href="#"
                            >
                              شيء آخر هنا
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 pb-2">
                  <div className="table-responsive">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            المشروع
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            أعضاء
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            ميزانية
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            إكمال
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-xd.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  Material XD الإصدار
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-1.jpg"
                                />
                              </a>
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-2.jpg"
                                />
                              </a>
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Alexander Smith"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-3.jpg"
                                />
                              </a>
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $14,000{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    60%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-60"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-atlassian.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  أضف مسار التقدم إلى التطبيق الداخلي
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-2.jpg"
                                />
                              </a>
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $3,000{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    10%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-slack.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  إصلاح أخطاء النظام الأساسي
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-3.jpg"
                                />
                              </a>
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-1.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              غير مضبوط{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-success w-100"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-spotify.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  إطلاق تطبيق الهاتف المحمول الخاص بنا
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-3.jpg"
                                />
                              </a>
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Alexander Smith"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-1.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $20,500{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-success w-100"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-jira.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  أضف صفحة التسعير الجديدة
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $500{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    25%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-25"
                                  role="progressbar"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="25"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-invision.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  إعادة تصميم متجر جديد على الإنترنت
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-1.jpg"
                                />
                              </a>
                              <a
                                href="#"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $2,000{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    40%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-40"
                                  role="progressbar"
                                  aria-valuenow="40"
                                  aria-valuemin="0"
                                  aria-valuemax="40"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-header pb-0">
                  <h6>نظرة عامة على الطلبات</h6>
                  <p className="text-sm">
                    <i
                      className="fa fa-arrow-up text-success"
                      aria-hidden="true"
                    ></i>
                    <span className="font-weight-bold">24%</span> هذا الشهر
                  </p>
                </div>
                <div className="card-body p-3">
                  <div className="timeline timeline-one-side">
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="material-icons text-success text-gradient">
                          notifications
                        </i>
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          $2400, تغييرات في التصميم
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          22 DEC 7:20 PM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="material-icons text-danger text-gradient">
                          code
                        </i>
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          طلب جديد #1832412
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          21 DEC 11 PM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="material-icons text-info text-gradient">
                          shopping_cart
                        </i>
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          مدفوعات الخادم لشهر أبريل
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          21 DEC 9:34 PM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="material-icons text-warning text-gradient">
                          credit_card
                        </i>
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          تمت إضافة بطاقة جديدة للطلب #4395133
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          20 DEC 2:20 AM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="material-icons text-primary text-gradient">
                          key
                        </i>
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          فتح الحزم من أجل التطوير
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          18 DEC 4:54 AM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block">
                      <span className="timeline-step">
                        <i className="material-icons text-dark text-gradient">
                          payments
                        </i>
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          طلب جديد #9583120
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          17 DEC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <footer className="footer py-4  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-end">
                    © <script>document.write(new Date().getFullYear())</script>,
                    made with <i className="fa fa-heart"></i> by
                    <a
                      href="https://www.creative-tim.com"
                      className="font-weight-bold"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        className="nav-link pe-0 text-muted"
                        target="_blank"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <Breadcrumbs />
    </>
  );
};

export default Header;
