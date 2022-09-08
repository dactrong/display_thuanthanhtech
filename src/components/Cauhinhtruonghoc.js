import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faPrint, faBan } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./Cauhinhhocky.module.scss";
import Select from "react-select";

const options = [
  { value: "2011-2012", label: "Bắc Ninh" },
  { value: "2012-2013", label: "Nghệ An " },
  { value: "2013-2014", label: "Thanh Hóa" },
  { value: "2013-2014", label: "Tp Hồ Chí Minh" },
  { value: "2013-2014", label: "Hà Nội" },
  { value: "2013-2014", label: "Phú Thọ" },
  
];
const options1 = [
    { value: "2011-2012", label: "Tiểu học" },
    { value: "2012-2013", label: "Trung học cơ sở " },
    { value: "2013-2014", label: "Trung học phổ thông" },
    
  ];
const Cauhinhtruonghoc = () => {
  const [color, setColor] = useState({
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
  });

  const { isClearable, isSearchable, isDisabled, isLoading, isRtl } = color;

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.navbar}`}>
          <Row>
            <Col>
              <Row>
                <Col xs={1}>
                  <p className={`${styles.col}`}>
                    <FontAwesomeIcon icon={faNewspaper} />
                  </p>
                </Col>
                <Col variant="primary">
                  <p className={`${styles.col}`}>Cấu hình trường học </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div>
          <Form>
            <div className={`${styles.form}`}>
              <Row >
                <Col xs={9}>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Tên trường</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Vui lòng nhập tên trường"
                          className={`${styles.abc}`}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Mã số thuế</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Vui lòng nhập mã số thuế"
                          className={`${styles.abc}`}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group placeholder="Vui lòng nhập mã số thuế">
                        <Form.Label>Cấp</Form.Label>
                        <Fragment>
                          <Select
                            isDisabled={isDisabled}
                            isLoading={isLoading}
                            isClearable={isClearable}
                            isSearchable={isSearchable}
                            options={options1}
                            placeholder="Vui lòng chọn cấp"
                          />
                        </Fragment>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Vui lòng nhập email"
                          className={`${styles.abc}`}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Vui lòng nhập số điện thoại"
                          className={`${styles.abc}`}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Fax</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Vui lòng nhập số Fax"
                          className={`${styles.abc}`}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Col>
                    <Form.Group className={`${styles.image}`}>
                      <div>
                        <img
                          src="https://th.bing.com/th/id/R.fec83b4a81f24b6167687c4f87507a18?rik=J0gBQVOjZHcQrw&pid=ImgRaw&r=0"
                          alt="..."
                          className={`${styles.image1}`}
                        />
                      </div>
                      <div>
                        <button className={`${styles.image2}`}>
                          <span className={`${styles.image4}`}>Chọn ảnh</span>
                          <Form.Control
                            type="file"
                            className={`${styles.image3}`}
                          />
                        </button>
                      </div>
                    </Form.Group>
                  </Col>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Tỉnh/Thành phố</Form.Label>
                    <Fragment>
                      <Select
                        isDisabled={isDisabled}
                        isLoading={isLoading}
                        isClearable={isClearable}
                        isSearchable={isSearchable}
                        options={options}
                        placeholder="Chọn tỉnh thành phố"
                      />
                    </Fragment>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Quận huyện</Form.Label>
                    <Fragment>
                      <Select
                        isDisabled={isDisabled}
                        isLoading={isLoading}
                        isClearable={isClearable}
                        isSearchable={isSearchable}
                        options={options}
                        placeholder="Chọn quận huy"
                      />
                    </Fragment>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Phường/xã</Form.Label>
                    <Fragment>
                      <Select
                        isDisabled={isDisabled}
                        isLoading={isLoading}
                        isClearable={isClearable}
                        isSearchable={isSearchable}
                        options={options}
                        placeholder="Chọn phường xã"
                      
                      />
                    </Fragment>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control type="text" placeholder="Địa chỉ" className={`${styles.abc}`} />
              </Form.Group>
            </div>
            <div>
              <div className={`${styles.button5}`}>
                <Button variant="success" className={`${styles.button6}`}>
                  {" "}
                  <FontAwesomeIcon icon={faPrint} />
                  Cập nhật
                </Button>
                <Button variant="danger">
                  <FontAwesomeIcon icon={faBan} />
                  Hủy
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Cauhinhtruonghoc;
