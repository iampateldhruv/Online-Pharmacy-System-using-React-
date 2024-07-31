import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Work Sans', sans-serif;
    
}
h1{
    color: red;
    font-size: 6rem;
    font-weight: 900;
}

h1{
    color: red;
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
}

.info_section {
  background-color: #252525;
  color: #ffffff;
}

.info_section .info_top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.info_section .info_top .info_logo {
  margin-right: 45px;
}

.info_section .info_top .info_logo a {
  display: block;
  background-color: #ffffff;
  padding: 20px 35px;
}

.info_section .info_top .info_logo a img {
  width: 55px;
}

.info_section .info_form {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  margin-top: 15px;
}

.info_section .info_form form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}

.info_section .info_form form input {
  background-color: transparent;
  padding: 5px 0;
  outline: none;
  width: 100%;
  min-width: 100%;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid #ffffff;
}

.info_section .info_form form input::-webkit-input-placeholder {
  color: #9c9c9c;
}

.info_section .info_form form input:-ms-input-placeholder {
  color: #9c9c9c;
}

.info_section .info_form form input::-ms-input-placeholder {
  color: #9c9c9c;
}

.info_section .info_form form input::placeholder {
  color: #9c9c9c;
}

.info_section .info_form form button {
  background-color: transparent;
  color: #00c6a9;
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 15px;
  outline: none;
  border: none;
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
}

.info_section h5 {
  text-transform: uppercase;
  position: relative;
  padding-left: 20px;
  margin-bottom: 25px;
}

.info_section h5:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 15px;
  height: 15px;
  background-color: #00c6a9;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.info_section .info_links .info_links_menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.info_section .info_links .info_links_menu a {
  color: #ffffff;
}

.info_section .info_links .info_links_menu a:not(:nth-last-child(1)) {
  margin-bottom: 10px;
}

.info_section .info_links .info_links_menu a:hover, .info_section .info_links .info_links_menu a.active {
  color: #00c6a9;
}

.info_section .info_post .post_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.info_section .info_post .post_box .img-box {
  width: 65px;
  min-width: 65px;
  height: 65px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #ffffff;
  margin-right: 10px;
}

.info_section .info_post .post_box .img-box img {
  width: 55px;
}

.info_section .info_post .post_box p {
  margin: 0;
}

.info_section .info_post .post_box:not(:nth-last-child(1)) {
  margin-bottom: 15px;
}

.info_section .info_contact a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #ffffff;
  margin-bottom: 10px;
}

.info_section .info_contact a i {
  margin-right: 5px;
  width: 25px;
}

.info_section .info_contact a:hover p {
  color: #ffffff;
}

.info_section .social_box {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 25px;
}

.info_section .social_box a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #00c6a9;
  font-size: 24px;
  margin-right: 10px;
}


`;

export default GlobalStyle;
