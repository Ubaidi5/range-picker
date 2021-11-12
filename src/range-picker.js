import React, { useState } from "react";
import { DatePicker, Row, Col, ConfigProvider } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import nl_NL from "antd/lib/locale-provider/nl_NL";
import "moment/locale/en-gb";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCalendar = styled.div`
  background: #ffffff;
  border: 1px solid #dbdce1;
  box-shadow: 0px 0px 16px rgba(219, 220, 225, 0.4), 0px 8px 16px #dbdce1;
  border-radius: 8px;
  width: 564px;
  height: 352px;

  cursor: pointer;
  user-select: none;

  .date-row {
    height: 80px !important;
    border-bottom: 1px solid #dbdce1;
    padding: 24px;
    height: 32px;
    flex: 100%;
  }

  .date-input {
    height: 32px;
    line-height: 32px;
    width: 120px;
    outline: none;
    border: 1px solid #dbdce1;
    border-radius: 6px;
    padding-left: 8px;
    color: #9496a1;
    font-size: 12px;
  }

  .reset-button {
    padding: 4px 8px;
    color: #3d3aa6;
    background-color: #f0f0fa;
    border-radius: 4px;
  }
`;

const Calendar = (props) => {
  const [datePicker, setDatepicker] = useState(false);

  const handleOpen = () => setDatepicker(!datePicker);

  return (
    <StyledCalendar>
      <Row style={{ position: "absolute" }}>
        <Col style={{ position: "absolute", left: 0 }}>{myDatePicker}</Col>
        <Col style={{ position: "absolute", left: 280 }}>{myDatePicker}</Col>
      </Row>

      <Row
        className="date-row"
        align="middle"
        justify="space-between"
        onClick={handleOpen}
      >
        <Col>
          <Row justify="space-around" align="middle">
            <Col>
              <input className="date-input" placeholder="From" />
            </Col>

            <Col>
              <ArrowRightOutlined
                style={{ margin: "0 24px", color: "#9496A1" }}
              />
            </Col>

            <Col>
              <input className="date-input" placeholder="To" />
            </Col>
          </Row>
        </Col>
        <Col>
          <div className="reset-button">Reset</div>
        </Col>
      </Row>
    </StyledCalendar>
  );
};

Calendar.defaultProps = {
  isArrow: true,
  isDisabled: false,
  cursor: "pointer",
};

Calendar.propTypes = {
  isArrow: PropTypes.bool,
  isDisabled: PropTypes.bool,
  cursor: PropTypes.string,
};

export default Calendar;

const myDatePicker = (
  <ConfigProvider locale={nl_NL}>
    <DatePicker
      style={{ visibility: "hidden" }}
      suffixIcon={null}
      open={true}
      allowClear={false}
      inputReadOnly={true}
      format={"YYYY-MM-DD"}
    />
  </ConfigProvider>
);
