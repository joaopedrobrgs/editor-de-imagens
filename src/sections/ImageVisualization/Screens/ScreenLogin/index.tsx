import React, { MutableRefObject, RefObject, useEffect, useRef } from "react";
import "./styles.scss";
import { useAtom } from "jotai/react";
import { AtomFundoAppCropped, AtomLogoAppCropped } from "../../../../store";
import IphoneBottomLine from "../../../../components/IphoneBottomLine";

type Props = {
  // className: string
};

const TelaInicial = ({}: Props) => {
  const [fundoAppImg] = useAtom(AtomFundoAppCropped);
  const [logoAppImg] = useAtom(AtomLogoAppCropped);

  // const screenRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (!!fundoAppImg) {
  //     if (!!screenRef.current) {
  //       screenRef.current.style.backgroundImage = `url(${fundoAppImg})`;
  //     }
  //   }
  // }, [fundoAppImg]);

  return (
    <div className="screen-login-container">
      {/* <div
        className="background-image fundo-app-preview"
        // ref={screenRef}
        style={{
          backgroundImage: `url(${
            fundoAppImg ?? `${process.env.PUBLIC_URL}fundo_app_sample.png`
          })`,
        }}
      ></div> */}
      <div className="fundo-app-box">
        <div
          className="fundo-app-preview"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="screen-container">
        <div className="logo">
          {/* <img
            src={logoAppImg ?? `${process.env.PUBLIC_URL}logo_app_sample.png`}
          /> */}
          <div className="logo-app-box">
            <div
              className="logo-app-preview"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="center-box">
          <div className="login-box">
            <div className="input tw-grid tw-grid-cols-4 tw-grid-rows-1 tw-items-center">
              <span className="input-label tw-col-span-1">CPF</span>
              <div className="input-content tw-col-span-3" />
            </div>
            <div className="input tw-grid tw-grid-cols-4 tw-grid-rows-1 tw-items-center">
              <span className="input-label tw-col-span-1">SENHA</span>
              <div className="input-content tw-col-span-3" />
            </div>
            <div className="checkbox">
              <div className="checkbox-square" />
              <span className="checkbox-text">Lembrar meu CPF</span>
            </div>
            <div className="button">
              <span className="button-text">ENTRAR</span>
            </div>
          </div>
          <div className="forgot-password-box">
            <span>Esqueceu sua senha?</span>
          </div>
        </div>
        <div className="credits-container">
          <div className="text-container">
            <span>Desenvolvido por Quality Systems</span>
          </div>
        </div>
        <IphoneBottomLine></IphoneBottomLine>
      </div>
    </div>
  );
};

export default TelaInicial;