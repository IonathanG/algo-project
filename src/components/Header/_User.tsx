import styled from "styled-components";

const Container = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color_Font_Secondary};

  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  cursor: pointer;
  position: relative;
  margin-right: 32px;
  width: 44px;
  height: 44px;
  border: 1px solid #c3d4e9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    position: absolute;
    right: 0;
    top: 0;
    content: "";
    width: 11px;
    height: 11px;
    background-color: #ff4423;
    border-radius: 50%;
  }
`;

const BellIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const ProfilePicture = styled.img`
  cursor: pointer;
  margin-right: 12px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

const ArrowIcon = styled.img`
  cursor: pointer;
  margin-left: 29px;
  width: 14px;
  height: 6px;
`;

const User = () => {
  return (
    <Container>
      <IconContainer>
        <BellIcon src="src/assets/Icon/Cloche.svg" alt="bell-icon" />
      </IconContainer>
      <ProfilePicture
        src="src/assets/Image/Profil-picture/Profile-picture.jpg"
        alt="profile-picture"
      />
      <span>Alexis Audouin</span>
      <ArrowIcon src="src/assets/Icon/ArrowDown.svg" alt="arrow-icon" />
    </Container>
  );
};

export default User;
