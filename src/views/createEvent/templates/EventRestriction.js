import React, { useState } from "react";
import PropTypes from "prop-types";
import RadioInput from "../../../components/radioInput/RadioInput";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/button/Button";
import Toggle from "../../../components/Toggle/Toggle";
import EventCollaborators from "./EventCollaborators";

const EventRestriction = (props) => {
  const { eventRestrictionsHandler, notificationHandler } = props;
  const [label, setLabel] = useState(false);
  const [womenOnly, setWomenOnly] = useState(false);
  const [childrenOnly, setChildrenOnly] = useState(false);
  const [adult, setAdult] = useState(false);
  const [seniorCitizen, setSeniorCitizen] = useState(false);
  const [none, setNone] = useState(false);
  const [noChildren, setNoChildren] = useState(false);

  const handlelabelClick = (e) => {
    console.log(89, e);
    setLabel(!label);
  };

  const selectOptionHandler = (e, name, id) => {
    e.preventDefault();
    console.log(99, name);
    console.log(9, e.target.id);

    eventRestrictionsHandler(id);

    switch (name) {
      case "womenOnly":
        setWomenOnly(!womenOnly);
        return;
      case "childrenOnly":
        setChildrenOnly(!childrenOnly);
        return;
      case "adult":
        setAdult(!adult);
        return;
      case "seniorCitizen":
        setSeniorCitizen(!seniorCitizen);
        return;
      case "none":
        setNone(!none);
        return;
      case "noChildren":
        setNoChildren(!noChildren);
        return;

      default:
        return;
    }
  };
  return (
    <div className="row">
      <div>
        <div>
          <h5>Any restriction to the event?</h5>
          <small>Set conditions to be met before attending the event</small>
        </div>
        <div className="row restrict-options">
          <RadioInput
            radioName="Women Only"
            customClass="form-check-input"
            name="womenOnly"
            labelName="womenOnly"
            id="women Only"
            selectedClass={womenOnly}
            onSelectOption={selectOptionHandler}
          />
          <RadioInput
            radioName="None"
            customClass="form-check-input"
            name="none"
            labelName="none"
            id="none"
            selectedClass={none}
            onSelectOption={selectOptionHandler}
          />
          <RadioInput
            radioName="Senior Citizen"
            customClass="form-check-input"
            name="seniorCitizen"
            labelName="seniorCitizen"
            id="senior Citizen"
            selectedClass={seniorCitizen}
            onSelectOption={selectOptionHandler}
          />
          <RadioInput
            radioName="Children Only"
            customClass="form-check-input"
            name="childrenOnly"
            labelName="childrenOnly"
            id="children Only"
            selectedClass={childrenOnly}
            onSelectOption={selectOptionHandler}
          />
          <RadioInput
            radioName="No Children"
            customClass="form-check-input"
            name="noChildren"
            labelName="noChildren"
            id="no Children"
            selectedClass={noChildren}
            onSelectOption={selectOptionHandler}
          />
          <RadioInput
            radioName="Event 18+"
            customClass="form-check-input"
            name="adult"
            labelName="adult"
            id="adult"
            selectedClass={adult}
            onSelectOption={selectOptionHandler}
            // onSelectOption={selectOptionHandler}
            // checkedClass={state.adult ? "restrict-selected" : ""}
          />
        </div>
        <div className="gift-wishlist mt-3">
          <FontAwesomeIcon className="" icon="gift" />
          <Button
            customClassName="wishlist-button bold-600"
            onClick={() => {}}
            btndisabled={false}
          >
            Add Gift Wishlist
          </Button>
        </div>
        <div className="gift-wishlist mt-3">
          <FontAwesomeIcon className="" icon="gift" />
          <Button
            customClassName=" wishlist-button bold-600"
            onClick={() => {}}
            btndisabled={false}
          >
            Add Events to "FUND ME"
          </Button>
        </div>
        <div>
          <p className="private-toggle">Notify me when people join </p>
          <Toggle handleClick={notificationHandler} />
        </div>
      </div>
      <div>
        <EventCollaborators />
      </div>
    </div>
  );
};

EventRestriction.propTypes = {
  eventRestrictionsHandler: PropTypes.func.isRequired,
  notificationHandler: PropTypes.func.isRequired,
};

export default EventRestriction;
