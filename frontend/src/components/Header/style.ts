import { styled } from 'styled-components';

interface IStyledHeaderProps {
  showProfileMenu: boolean;
}

export const StyledHeader = styled.header<IStyledHeaderProps>`
  padding: 1.5rem 1rem;
  box-shadow: 0px 1px 3px var(--grey-5);
  position: fixed;
  z-index: 12;
  background-color: var(--color-grey-10);
  width: 100%;
  box-shadow: 0 -0.2rem 0.4rem var(--color-grey-1);

  display: flex;
  justify-content: center;

  .menuContainer {
    box-sizing: border-box;
    width: 100%;
    max-width: var(--content-container-limit);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      width: 46px;
      height: 100%;
      font-size: 16px;
    }
  }

  .brandAndButton {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brandContainer {
    cursor: pointer;
  }

  nav {
    width: 100%;
    padding: 24px 0 0;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white-fixed);
  }

  .active {
    display: block;
  }

  .hidden {
    display: none;
  }

  .profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8rem;

    & > p {
      font-size: var(--font-size-16);
      font-family: var(--font-family-lexend);
      font-weight: var(--font-weight-500);
    }
  }

  .profile > .initials {
    padding: 0.5rem;
    border-radius: 50%;
    color: var(--color-white-fixed);
    background-color: var(--color-random-2);
    font-size: 0.6rem;
    width: max-content;
  }

  .profileFeatures {
    padding: 1rem 0.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    p {
      font-size: var(--font-size-14);
      font-family: var(--font-family-inter);
      font-weight: var(--font-weight-400);
      line-height: 28px;

      color: var(--color-grey-2);
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: var(--color-brand-1);
      }
    }

    .logout {
      color: var(--color-alert-1);
      &:hover {
        color: var(--color-alert-1);
        opacity: 0.65;
      }
    }
  }

  @media (min-width: 640px) {
    padding: 1.5rem 2rem;
    .menuContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      nav {
        position: relative;
        padding: 0;
        width: max-content;
        display: flex;
        flex-direction: row;
        gap: 32px;
        justify-content: flex-end;
        .loginBtn {
          justify-content: center;
        }
      }
      button {
        display: none;
      }
    }

    .brandAndButton {
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .profile {
      padding: 0 0.4rem 0 0.2rem;

      & > p {
        font-size: var(--font-size-14);
      }
    }

    .openProfileButton {
      display: block;
    }

    .profileFeatures {
      padding: 1rem 1.5rem 0.8rem;
      gap: 0.2rem;
      background-color: var(--color-white-fixed);

      position: absolute;
      bottom: -1;
      right: 0;
      left: 0;

      display: ${(props) => (props.showProfileMenu ? 'flex' : 'none')};
    }
  }
`;
