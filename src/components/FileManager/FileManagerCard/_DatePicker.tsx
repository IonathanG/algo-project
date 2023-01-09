import React, { useState } from "react";
import styled from "styled-components";
import Calendar, { CalendarProps } from "react-calendar";

const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  width: 150px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.color_Border};
  border-radius: 6px;
  cursor: pointer;

  img {
    margin-left: 12px;
    height: 14px;
    width: 14px;
  }

  span {
    font-size: 12px;
  }
`;

function DatePicker() {
  return (
    <CalendarContainer>
      <img src="/assets/Icon/calendar.svg" alt="calendar-icon" />
      <span>1 Jan - 1 Sep 2022</span>
    </CalendarContainer>
  );
}

export default DatePicker;
