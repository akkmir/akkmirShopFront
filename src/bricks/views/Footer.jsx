/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React from "react";
import { Link } from "react-router-dom";
import css from "../../styles/footer";
import Button from "../comps/button/Button.jsx";
import vkimage from "../../img/vkon.png";
import { useDispatch } from "react-redux";
import { setInfoPageTitle } from "../../appStore/reducers/mainReducer";
import Modal from "react-modal";
import NapisatDirektoru from "../comps/modals/NapisatDirektoru";
import Registratsiya from "../comps/modals/Registratsiya";
import { useState } from "react";
import LoadAkk from "../comps/modals/LoadAkk";

const Foot = css.Footer;
const FootContent = css.FooterContent;
const FootContentCol = css.FooterContentColumn;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    borderColor: "white",
    padding: "28px 84px",
    boxShadow:
      "22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)",
    background: "#FFFFFF",
    width: "599px",
    height: "auto",
    maxHeight: "90%",
  },
};

const Footer = () => {
  const dispatch = useDispatch();
  let subtitle;
  let bonusSubtitle;
  let loadSubtitle;
  let zeusSubtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [bonusModal, setBonusModal] = React.useState(false);
  const [loadAkk, setLoadAkk] = useState(false);
  const [zeusAkk, setZeusAkk] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function openLoad() {
    setLoadAkk(true);
  }

  function openBonusModal() {
    setBonusModal(true);
  }
  function openZeusAkk() {
    setZeusAkk(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function afterBonusModal() {
    // references are now sync'd and can be accessed.
    bonusSubtitle.style.color = "#f00";
  }

  function afterLoadModal() {
    loadSubtitle.style.color = "#f00";
  }
  function afterZeusAkk() {
    zeusSubtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeBonusModal() {
    setBonusModal(false);
  }
  function closeLoadModal() {
    setLoadAkk(false);
  }
  function closeZeusAkk() {
    setZeusAkk(false);
  }
  return (
    <React.Fragment>
      <Foot>
        <FootContent>
          <FootContentCol>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/princip-raboty"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() => dispatch(setInfoPageTitle("Принцип работы"))}
              >
                Принцип работы
              </span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/pochemu-akkmir"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() => dispatch(setInfoPageTitle("Почему Аккмир"))}
              >
                Почему Akkmir
              </span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/nashy-sertifikaty"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() => dispatch(setInfoPageTitle("Наши сертификаты"))}
              >
                Наши сертификаты
              </span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/priem-vashikh-akkumulyatorov"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() =>
                  dispatch(setInfoPageTitle("Прием ваших аккумуляторов"))
                }
              >
                Прием ваших аккумуляторов
              </span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/polezno-znat"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() => dispatch(setInfoPageTitle("Полезно знать"))}
              >
                Полезно знать
              </span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/novosti"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() => dispatch(setInfoPageTitle("Новости компании"))}
              >
                Новости компании
              </span>
            </Link>
          </FootContentCol>
          <FootContentCol>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/oplata-i-dostavka"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() => dispatch(setInfoPageTitle("Оплата и доставка"))}
              >
                Оплата и доставка
              </span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/korporativnym-klientam"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() =>
                  dispatch(setInfoPageTitle("Корпоративным клиентам"))
                }
              >
                Корпоративным клиентам
              </span>
            </Link>
            <p
              style={{ textDecoration: "none", color: "black" }}
              // to="/bonusnaya-programma"
            >
              <button
                style={{
                  outline: "none",
                  background: "transparent",
                  border: "none",
                  color: "white",
                  lineHeight: "32px",
                  fontSize: "14px",
                }}
                onClick={() => openLoad()}
              >
                Услуги сервисных центров
              </button>
            </p>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/accii"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() => dispatch(setInfoPageTitle("Наши акции"))}
              >
                Наши акции
              </span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/oferta"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() =>
                  dispatch(setInfoPageTitle("Договор публичной оферты"))
                }
              >
                Договор публичной оферты
              </span>
            </Link>
            <p
              style={{ textDecoration: "none", color: "black" }}
              // to="/bonusnaya-programma"
            >
              <button
                style={{
                  outline: "none",
                  background: "transparent",
                  border: "none",
                  color: "white",
                  lineHeight: "32px",
                  fontSize: "14px",
                }}
                onClick={() => openBonusModal()}
              >
                Бонусная программа
              </button>
            </p>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/vakansii-kompanii"
            >
              <span
                style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
                onClick={() => dispatch(setInfoPageTitle("Вакансии компании"))}
              >
                Вакансии компании
              </span>
            </Link>
          </FootContentCol>
          <FootContentCol>
            <span
              style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
            >
              [ платежные системы ]
            </span>
            <span
              style={{ color: "white", lineHeight: "32px", fontSize: "14px" }}
            >
              Подписывайтесь на нас:
            </span>

            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: "32px",
              }}
            >
              <img
                src={vkimage}
                alt={""}
                style={{
                  display: "block",
                  width: "30px",
                  height: "30px",
                }}
              />
              <img
                src={vkimage}
                alt={""}
                style={{
                  display: "block",
                  width: "30px",
                  height: "30px",
                  marginLeft: "12px",
                }}
              />
              <img
                src={vkimage}
                alt={""}
                style={{
                  display: "block",
                  width: "30px",
                  height: "30px",
                  marginLeft: "12px",
                }}
              />
            </span>
          </FootContentCol>
          <FootContentCol>
            <span
              style={{
                color: "white",
                lineHeight: "32px",
                fontSize: "20px",
                marginBottom: "20px",
              }}
            >
              +7 (343) 261-62-62
            </span>
            <span
              style={{
                color: "white",
                lineHeight: "32px",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Есть пожелания и предложения?
            </span>

            <button
              style={{
                background: "#FFFFFF",
                padding: "13px 30px",
                cursor: "pointer",
                boxShadow:
                  "0px 442px 124px rgba(163, 163, 163, 0.03), 0px 159px 96px rgba(163, 163, 163, 0.02), 0px 71px 71px rgba(163, 163, 163, 0.03), 0px 18px 39px rgba(163, 163, 163, 0.03), 0px 0px 0px rgba(163, 163, 163, 0.03)",
                borderRadius: "17px",
              }}
              onClick={openModal}
            >
              Написать в директору
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <NapisatDirektoru closeModal={closeModal} />
            </Modal>
            <Modal
              isOpen={bonusModal}
              onAfterOpen={afterBonusModal}
              onRequestClose={closeBonusModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <Registratsiya closeModal={closeBonusModal} />
            </Modal>
            <Modal
              isOpen={loadAkk}
              onAfterOpen={afterLoadModal}
              onRequestClose={closeLoadModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <LoadAkk closeModal={closeLoadModal} />
            </Modal>
          </FootContentCol>
        </FootContent>

        <p
          style={{
            color: "#F7F7F7",
            textAlign: "center",
            fontSize: "14px",
            marginTop: "30px",
          }}
        >
          © 2022 Аккумуляторный мир
        </p>
      </Foot>
    </React.Fragment>
  );
};

export default Footer;
