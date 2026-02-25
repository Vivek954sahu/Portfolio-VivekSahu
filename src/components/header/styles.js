import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;

  background: rgba(33, 33, 33, 0.7);
  backdrop-filter: blur(10px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  /* ===== LOGO ===== */
  .logo {
    font-size: 3rem;
    color: #ffffff;
    background: none;
    border: none;
  }

  /* ===== NAV ===== */
  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  nav button {
    background: none;
    border: none;
    color: #ffffff;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.6rem;
    cursor: pointer;
    transition: opacity 0.25s;
  }

  nav button:hover {
    opacity: 0.7;
  }

  nav .button {
    padding: 0.6rem 2rem;
  }

  /* ===== HAMBURGER ===== */
  .menu {
    width: 3rem;
    height: 0.2rem;
    background: #ffffff;
    position: relative;
    border-radius: 2px;
    display: none;
  }

  .menu::before,
  .menu::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 0.2rem;
    background: #ffffff;
    left: 0;
    transition: transform 0.3s, top 0.3s;
  }

  .menu::before {
    top: -0.8rem;
  }

  .menu::after {
    top: 0.8rem;
  }

  .menu.active {
    background: transparent;
  }

  .menu.active::before {
    top: 0;
    transform: rotate(45deg);
  }

  .menu.active::after {
    top: 0;
    transform: rotate(-45deg);
  }

  /* ===== MOBILE ===== */
  @media (max-width: 960px) {
    padding: 1.8rem 3rem;

    .menu {
      display: block;
    }

    nav {
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;

      background: var(--green);

      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;

      transform: translateX(100%);
      transition: transform 0.3s ease;
    }

    nav.active {
      transform: translateX(0);
    }

    nav .button {
      background: var(--pink);
    }
  }
`;