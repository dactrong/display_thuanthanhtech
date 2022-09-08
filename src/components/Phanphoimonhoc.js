import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faNewspaper,
  faPlus,
  faSearch,
  faFilter,
  faCloud,
  faDownload,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon } from "@fortawesome/free-regular-svg-icons";

import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import styles from "./Cauhinhhocky.module.scss";
import ReactPaginate from "react-paginate";
import Select from "react-select";
const options = [
  { value: '2011-2012', label: '2011-2012' },
  { value: '2012-2013', label: '2012-2013' },
  { value: '2013-2014', label: '2013-2014' }
]
const options1 = [
  { value: '2011-2012', label: 'Tiểu học' },
  { value: '2012-2013', label: 'Trung học cơ sở' },
  { value: '2013-2014', label: 'Trung học phổ thông' }
]
const items = [
  {
    ma: "2026",
    tentiethoc: "Tiết 1",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 2",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 3",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 4",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 5",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 1",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 2",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 3",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 3",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 3",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 3",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
  {
    ma: "2026",
    tentiethoc: "Tiết 3",
    thoigianbatdau: "6:30",
    thoigianketthuc: "7:10",
    ngaybatdau: "05/06/2019",
    ngayketthuc: "10/06/2020",
    note: "",
  },
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>{item.ma}</td>
              <td>{item.tentiethoc}</td>
              <td>{item.thoigianbatdau}</td>
              <td>{item.thoigianketthuc}</td>
              <td>{item.ngaybatdau}</td>
              <td>{item.ngayketthuc}</td>
              <td>{item.note}</td>

              <td>
                {" "}
                <input type="checkbox" />
              </td>
              <td colSpan={2}>
                <Row>
                  <Col>
                    <i className={`${styles.color1}`}>
                      <FontAwesomeIcon icon={faPen} />
                    </i>
                  </Col>
                  <Col>
                    <i className={`${styles.color}`}>
                      <FontAwesomeIcon icon={faTrash} />
                    </i>
                  </Col>
                </Row>
              </td>
            </tr>
          </tbody>
        ))}
    </>
  );
}

const Phanphoimonhoc = ({ itemsPerPage = null }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
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
                  <p className={`${styles.col}`}>Phân phối môn học </p>
                </Col>
              </Row>
            </Col>
            <Col className={`${styles.row}`}>
              <div>
                <button className={`${styles.search}`}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>

                <input
                  className={`${styles.col1}`}
                  type="text"
                  placeholder="Tên học kỳ"
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className={`${styles.table}`}>
          <Row>
            <Col xs={1} className={`${styles.left}`}>
              <p> Năm hoc :</p>
            </Col>
            <Col xs={1}>
              <div className={`${styles.trong}`}>
              <Select options={options} className={`${styles.kieu}`} placeholder="Chọn năm học"/>

              </div>
            </Col>
            <Col>
              <Select options={options1} className={`${styles.khoi}`} placeholder="Chọn Khối"/>
            </Col>
            <Col>
              <div className={`${styles.check}`}>
                <input type="checkbox" className={`${styles.check2}`} />
                <span className={`${styles.check1}`}>Hoạt động</span>
              </div>
            </Col>
            <Col className={`${styles.filter}`}>
              <button className={`${styles.filter1}`}>
                <FontAwesomeIcon icon={faFilter} />
              </button>
            </Col>
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên tiết hoc</th>
                <th>Thời gian bắt đầu</th>
                <th>Thời gian kết thúc</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Ghi chú</th>
                <th>Trạng thái</th>
                <th>Hoạt động</th>
              </tr>
            </thead>
            <Items currentItems={currentItems} />
          </Table>
          <div>
            <Row>
              <Col>
                <p>
                  Hiển thị <strong>{`${itemOffset}`}</strong> - <strong>/{}</strong> bản
                  ghi
                </p>
              </Col>
              <Col>
                <div className={`${styles.panigate}`}>
                  <ReactPaginate
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    // pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    activeClassName="active"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={`${styles.add}`}>
          <Row>
            <Col >
              <Button variant="success" className={`${styles.add1}`}>
                <FontAwesomeIcon icon={faPlus} />
                <span>Thêm mới</span>
              </Button>
              <Button variant="primary" className={`${styles.add1}`}>
                <FontAwesomeIcon icon={faCloud} />
                <span>Tải tệp mẫu</span>
              </Button>
              <Button variant="primary" className={`${styles.add1}`}>
                <FontAwesomeIcon icon={faDownload} />

                <span>Xuất ra tệp </span>
              </Button>
              <Button variant="primary" className={`${styles.add1}`}>
                <FontAwesomeIcon icon={faUpload} />

                <span>Nhập từ tệp</span>
              </Button>
              
                <button type="button" className={`${styles.add4}`}>
                  <span className={`${styles.button1}`}>Chọn tệp</span>
                  <input type="file" className={`${styles.input}`} />
                  <span>Vui lòng chọn tệp</span>
                </button>
             
            </Col>
            <Col xs={3} className={`${styles.row1}`}>
              <Row>
                <Col>
                  <p className={`${styles.add2}`}>Hiển thị :</p>
                </Col>
                <Col>
                  <select name="" id="" className={`${styles.add3}`}>
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">30</option>
                    <option value="">40</option>
                  </select>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Phanphoimonhoc;
