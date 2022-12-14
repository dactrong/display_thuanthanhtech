import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faNewspaper,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon } from "@fortawesome/free-regular-svg-icons";

import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import styles from "./Cauhinhhocky.module.scss";
import ReactPaginate from "react-paginate";

const items = [
  { schoolYear: "2015-2016", yearNegins: "2015", finalYear: "2016", note: "" },
  { schoolYear: "2015-2017", yearNegins: "2015", finalYear: "2016", note: "" },
  { schoolYear: "2015-2018", yearNegins: "2015", finalYear: "2016", note: "" },
  { schoolYear: "2015-2019", yearNegins: "2015", finalYear: "2016", note: "" },
  { schoolYear: "2015-2011", yearNegins: "2015", finalYear: "2016", note: "" },
  { schoolYear: "2015-2012", yearNegins: "2015", finalYear: "2016", note: "" },
  { schoolYear: "2015-2013", yearNegins: "2015", finalYear: "2016", note: "" },
  { schoolYear: "2015-2014", yearNegins: "2015", finalYear: "2016", note: "" },
  { schoolYear: "2015-2016", yearNegins: "2015", finalYear: "2016", note: "" },
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>{item.schoolYear}</td>
              <td>2024</td>
              <td>2025</td>
              <td></td>
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

const Cauhinhnamhoc = ({ itemsPerPage = 5 }) => {
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
                  <p className={`${styles.col}`}>Danh s??ch n??m h???c </p>
                </Col>
              </Row>
            </Col>
            <Col className={`${styles.row}`}>
              <div>
                <button className={`${styles.search}`}>
                  <FontAwesomeIcon icon={faSearch}  />
                </button>

                <input
                  className={`${styles.col1}`}
                  type="text"
                  placeholder="T??m ki???m n??m h???c"
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className={`${styles.table}`}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>N??m h???c</th>
                <th>N??m b???t ?????u</th>
                <th>N??m k???t th??c</th>
                <th>Ghi ch?? </th>
                <th>Tr???ng th??i</th>
                <th>Ho???t ?????ng</th>
              </tr>
            </thead>
            <Items currentItems={currentItems} />
          </Table>
          <div>
            <Row>
              <Col>
                <p>
                  Hi???n th??? <strong>{itemOffset}</strong> - <strong></strong> b???n
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
                Th??m m???i
              </Button>
            </Col>
            <Col  xs={3} className={`${styles.row1}`}>
              <Row>
                <Col>
                  <p className={`${styles.add2}`}>Hi???n th??? :</p>
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

export default Cauhinhnamhoc;
