import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faNewspaper,
  faPlus,
  faSearch,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon } from "@fortawesome/free-regular-svg-icons";

import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import styles from "./Cauhinhhocky.module.scss";
import ReactPaginate from "react-paginate";

const items = [
  {
    ma: "2026",
    tenkhoi: "Khối 1",
    caphoc: "Tiểu học",
    note: "",
  },
  {
    ma: "2026",
    tenkhoi: "Khối 2",
    caphoc: "Tiểu học",
    note: "",
  },
  {
    ma: "2026",
    tenkhoi: "Khối 3",
    caphoc: "Tiểu học",
    note: "",
  },
  {
    ma: "2026",
    tenkhoi: "Khối 4",
    caphoc: "Tiểu học",
    note: "",
  },
  {
    ma: "2026",
    tenkhoi: "Khối 5",
    caphoc: "Tiểu học",
    note: "",
  },
  {
    ma: "2026",
    tenkhoi: "Khối 6",
    caphoc: "Tiểu học",
    note: "",
  },
  {
    ma: "2026",
    tenkhoi: "Khối 7",
    caphoc: "Tiểu học",
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
              <td>{item.tenkhoi}</td>
              <td>{item.caphoc}</td>
              
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

const Cauhinhkhoi = ({ itemsPerPage = 5 }) => {
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
                  <p className={`${styles.col}`}>Danh sách khối </p>
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
                <select name="" id="" className={`${styles.kieu}`}>
                  <option value="">2010-2011</option>
                  <option value="">2012-2013</option>
                  <option value="">2014-2015</option>
                  <option value="">2-16-2-17</option>
                </select>
              </div>
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
                <th>Mã khối</th>
                <th>Tên khối</th>
                <th>Cấp học</th>
                <th>Mô tả</th>
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
                  Hiển thị <strong>{itemOffset}</strong> - <strong></strong> bản
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
                    pageRangeDisplayed={5}
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
            <Col>
              <Button variant="success" className={`${styles.add1}`}>
                <FontAwesomeIcon icon={faPlus} />
                Thêm mới
              </Button>
            </Col>
            <Col  xs={3} className={`${styles.row1}`}>
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

export default Cauhinhkhoi;
