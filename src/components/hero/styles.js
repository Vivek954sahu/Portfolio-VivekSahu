import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8rem;

    min-height:100vh;
    padding: 12rem 10rem 6rem;

    background: transparent;

    /* ===== Text =======*/
    .hero-text > p {
       font-size: 1.8rem;
    }

    .hero-text h1 {
       font-size: 7rem;
       line-height: 1.1;
    }

    .hero-text h3 {
       color: var(--green);
       margin: 1rem 0;
    }

    .hero-text .small-resume {
       margin-bottom: 4rem;
       max-width: 48rem;
    }
    
    /* ======= Buttons =========*/
    .hero-buttons {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .hero-buttons .button {
       padding: 1.2rem 3.2rem;
    }
    
    /* ======= Social =========*/
    .social-media {
       display: inline-flex;
       align-items: center;
       gap: 1.2rem;
       margin-top: 4rem;
    }

    .social-media img {
       width: 3.2rem;
       height: 3.2rem;
       transition: transform 0.25s;
    }

    .social-media img:hover {
       trnasform: translateY(-3px);
    }

    /* ===== IMAGE ===== */
  .hero-image img {
    max-width: 48rem;
    width: 100%;
  }

  /* ===== TABLET ===== */
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    padding: 14rem 4rem 6rem;
    gap: 4rem;

    .hero-text h1 {
      font-size: 5rem;
    }

    .hero-text .small-resume {
      margin-left: auto;
      margin-right: auto;
    }
  }

  /* ===== MOBILE ===== */
  @media (max-width: 600px) {
    padding: 16rem 2rem 4rem;

    .hero-text h1 {
      font-size: 4rem;
    }

    .hero-buttons {
      flex-direction: column;
    }

    .hero-buttons .button {
      width: 100%;
      text-align: center;
    }
  }

  /* ===== SMALL MOBILE ===== */
  @media (max-width: 420px) {
    padding-top: 18rem;

    .hero-text h1 {
      font-size: 3.4rem;
    }
  }
`;