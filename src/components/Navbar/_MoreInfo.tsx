import styled from "styled-components";

const Container = styled.li``;

const InfoWrap = styled.div`
  padding: 0px 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 11px;

    img {
      width: 15px;
      height: 15px;
    }
  }
  span {
    font-size: 12px;
  }
`;

const ProgressBar = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0px 16px;
  width: 220px;
  height: 6px;
  background-color: #eeeeee;
  border-radius: 18px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 75%;
    height: 6px;
    border-radius: 18px;
    background: linear-gradient(90deg, #ffa26d 50%, #ffdf6d 102.88%);
  }
`;

const MoreInfo = () => {
  return (
    <Container>
      <h2>More informations</h2>
      <InfoWrap>
        <div>
          <img src="/assets/Icon/star.svg" alt="star-icon" />
          <span>Task Progress</span>
        </div>
        <span>33/45</span>
      </InfoWrap>
      <ProgressBar />
    </Container>
  );
};

export default MoreInfo;
