import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid my-5">
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#009688" }}
        >
          <div className="container">
            <section className="mt-5">
              <div className="row text-center d-flex justify-content-center pt-5"></div>
            </section>
            <hr className="my-5" />
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "#009688" }}
          >
            © 2020 Copyright:
            <Link className="text-white" to="/">
              Avi Aman LTD
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
