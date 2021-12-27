import React from "react";
import Calender from "./Calender";
import { FaEdit, FaBeer, FaTrashAlt } from "react-icons/fa";

function ExpenseItem(props) {
  return (
    <div
      className="
          expense-item
              row row-col-3
              border border-dark
              bg-secondary
              mx-2
              mb-3
              rounded-3
            "
    >
      {/* <!--      calender    --> */}
      <Calender day={props.day} month={props.month} year={props.year} />
      {/* <!--      items name    --> */}
      <div className="fw-bold col m-auto text-capitalize"> {props.name}</div>
      {/* <!--    item price      --> */}

      <div className=" col my-auto position-relative">
        <div className="ms-auto my-auto ">
          <div
            className="
                  fw-bold
                  py-2
                  d-flex
                  justify-content-center
                  px-auto
                  border border-2 border-light
                  rounded-pill
                  expense-price
                  ms-auto
                  me-1
                "
          >
            {"$" + props.price}
          </div>
          <div
            class="position-absolute d-flex  icons-box"
            style={{ top: "3.5rem", right: "1.5rem" }}
          >
            <div className="w-50">
              <FaEdit className="expense-item-icon edit-icon" />
            </div>
            <div className=" w-50">
              <FaTrashAlt className="expense-item-icon trash-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
