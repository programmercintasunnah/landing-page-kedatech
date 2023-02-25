import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PricingComponent = () => {
  return (
    <div id="pricing" className="pricing min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold" data-aos="fade-out">
              Pricing
            </h1>
            <p className="text-center" data-aos="fade-out" data-aos-delay="200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              assumenda.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div
                  className="card h-100 shadow card-pricing"
                  data-aos="zoom-out"
                >
                  <div className="card-body text-center p-5">
                    <h5 className="mt-3 fw-bold card-title">Tier 1 / Basic</h5>
                    <p className="mb-4 text-black-50 card-text">
                      Best Settings for Startups.
                    </p>
                    <h6 className="fw-bold FS-10 text-primary card-text">
                      IDR 1.000.000,00
                      <small className="text-muted">/ Month</small>
                    </h6>
                    <div className="text-start">
                      <div className="d-flex align-items-center justify-content-between mt-5 mb-3 text-black-50">
                        <span>Mencatat barang masuk</span>
                        <span>
                          <i className="fa fa-check-circle text-success"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3 text-black-50">
                        <span>Mencatat barang keluar</span>
                        <span>
                          <i className="fa fa-check-circle text-success"></i>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 text-black-50">
                      <span>Mencatat hasil keuntungan</span>
                      <span>
                        <i className="fa fa-check-circle text-success"></i>
                      </span>
                    </div>
                    <button className="mb-3 btn btn-info text-light mt-5">
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card h-100 bg-info shadow card-pricing"
                  data-aos="zoom-out"
                  data-aos-delay="200"
                >
                  <div className="card-body text-center p-5">
                    <h5 className="mt-3 text-light fw-bold card-title">
                      Tier 2 / Business
                    </h5>
                    <p className="mb-4 text-white card-text">
                      Best Settings for Business.
                    </p>
                    <h6 className="fw-bold text-light card-text">
                      IDR 3.000.000,00
                      <small className="text-muted">/ Month</small>
                    </h6>
                    <div className="text-start">
                      <div className="d-flex align-items-center justify-content-between mt-5 text-light">
                        <span>Mencatat barang masuk dan keluar</span>
                        <span>
                          <i className="fa fa-check-circle text-white"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-5 text-light">
                        <span>Mencatat Keuntungan</span>
                        <span>
                          <i className="fa fa-check-circle text-white"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-5 text-light">
                        <span>
                          Dapat menganalisa hasil penjualan dengan CHART
                        </span>
                        <span>
                          <i className="fa fa-check-circle text-white"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-5 text-light">
                        <span>Support 7x24 Jam</span>
                        <span>
                          <i className="fa fa-check-circle text-white"></i>
                        </span>
                      </div>
                    </div>
                    <button className="mb-3 btn btn-light mt-5">Select</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card h-100 shadow card-pricing"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <div className="card-body text-center p-5">
                    <h5 className="mt-3 fw-bold card-title">
                      Tier 3 / Entrepreneur
                    </h5>
                    <p className="mb-4 text-black-50 card-text">
                      Best Settings for Enterprenuer.
                    </p>
                    <h6 className="fw-bold fs-10 text-primary card-text">
                      IDR 5.000.000,00
                      <small className="text-muted">/ Month</small>
                    </h6>
                    <div className="text-start">
                      <div className="d-flex align-items-center justify-content-between mt-5 mb-3 text-black-50">
                        <span>Mencatat barang masuk dan keluar</span>
                        <span>
                          <i className="fa fa-check-circle text-success"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3 text-black-50">
                        <span>Mencatat Keuntungan</span>
                        <span>
                          <i className="fa fa-check-circle text-success"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3 text-black-50">
                        <span>
                          Dapat menganalisa hasil penjualan dengan CHART
                        </span>
                        <span>
                          <i className="fa fa-check-circle text-success"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3 text-black-50">
                        <span>Support 7x24 Jam</span>
                        <span>
                          <i className="fa fa-check-circle text-success"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3 text-black-50">
                        <span>Export data ke Excel</span>
                        <span>
                          <i className="fa fa-check-circle text-success"></i>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3 text-black-50">
                        <span>AI Prediksi penghasilan</span>
                        <span>
                          <i className="fa fa-check-circle text-success"></i>
                        </span>
                      </div>
                    </div>
                    <button className="mb-3 btn btn-info btn-block mt-5 text-light">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingComponent;
