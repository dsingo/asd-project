import React, { useState } from "react";
import "./AddCard.scss";
import img from "../../Images/Card-Icon.png";
import { addNewCard } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";

const AddCard = ({ addNewCard }) => {
  const [formData, setFormData] = useState({
    type: "",
    nickname: "",
  });

  const { type, nickname } = formData;

  const onChange = (submission) =>
    setFormData({ ...formData, type: submission });

  const onNameChange = (e) => {
    setFormData({ ...formData, nickname: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { type, nickname };
    addNewCard({ data });
  };
  //Student refers to primary school/high school card
  //Concession refers to university/TAFE card
  return (
    <div className="main">
      <div className="rect">
        <form className="base-rect" onSubmit={(e) => onSubmit(e)}>
          <div className="heading">Add a new credit/debit card</div>
          <img className="icon" src={img} alt="Outline rendering of card" />
          <div className="content">
            <div className="form">
              <div>
                <input
                  className="input"
                  type="string"
                  name="nickname"
                  placeholder="Please enter your card nickname."
                  value={nickname}
                  onChange={(e) => onNameChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Card Type
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as="button" onClick={onChange("child")}>
                      Child
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={onChange("student")}>
                      Student
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={onChange("concession")}>
                      Concession
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={onChange("adult")}>
                      Adult
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={onChange("senior")}>
                      Senior
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddCard.propTypes = {
  addNewCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addNewCard })(AddCard);
