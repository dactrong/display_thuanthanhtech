import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faNewspaper,faPrint,faBan} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Col, Form,  Row,  } from "react-bootstrap";
import styles from "./Cauhinhhocky.module.scss";

const Cauhinhtruonghoc = () => {
  
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
          <Form >
            <div className={`${styles.form}`}>
            <Row className={`${styles.rowForm}`}>
              <Col xs={9}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Tên trường</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Vui lòng nhập tên trường"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Mã số thuế</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Vui lòng nhập mã số thuế"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group placeholder="Vui lòng nhập mã số thuế">
                      <Form.Label>Cấp</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Vui lòng chọn cấp</option>
                        <option value="1">Tiểu học</option>
                        <option value="2">Trung học cơ sơ</option>
                        <option value="3">Trung học phổ thông</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Email </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Vui lòng nhập email"
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
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Fax</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Vui lòng nhập số Fax"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col >
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
                  <Form.Select aria-label="Default select example">
                    <option value="1">Hà nội</option>
                    <option value="2">Bắc Ninh</option>
                    <option value="3">Quảng ninh</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Quận huyện</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Lương Tài</option>
                    <option value="2">Quế Võ</option>
                    <option value="3">Từ Sơn</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Phường/xã</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Phú Hòa</option>
                    <option value="2">An Thịnh</option>
                    <option value="3">Trung kênh</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control type="text" placeholder="Địa chỉ" />
            </Form.Group>
            </div>
            <div>
              <div className={`${styles.button5}`}>
                <Button variant="success" className={`${styles.button6}`}>   <FontAwesomeIcon icon={faPrint} />Cập nhật</Button>
                <Button variant="danger"><FontAwesomeIcon icon={faBan} />Hủy</Button>
              </div>
            </div>
          </Form>
          
        </div>
      </div>
    </>
  );
};

export default Cauhinhtruonghoc;
