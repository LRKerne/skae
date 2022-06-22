import React from "react";
import LogoNoBg from "../../resources/Partial-removebg-preview.png";

export default function Login({ formData, setFormData,page,setPage,totalPages }: any) {
  return (
    <div>
      <div className="login-container">
        <div className="login-halves">
          <figure className="login-logo">
            <img src={LogoNoBg} alt="SKAE LOGO" />
          </figure>
          <div className="bem-vindo">Bem Vindo</div>
          <div className="align-left">E-mail</div>
          <input
            type="text"
            placeholder="Email..."
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <div className="align-left">Senha</div>
          <input
            type="text"
            placeholder="Password..."
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <div>
            <div className="cta-button-group">
              <span className="align-left-forgotpass">Esqueceu a senha?</span>
              <button
              onClick={() => {
                if (page===totalPages.length-1 ){
                  alert( "State:"+JSON.stringify (formData))
                }else{
                  setPage(page + 1);
                }
              }}
              >Entrar</button>
            </div>
          </div>
        </div>
        <div className="login-halves">
          <div className="login-verb">
            <div className="login-bigtext">
              SKAE
            </div>
            <div>
              <b>S</b>oft S<b>k</b>ill <b>A</b>ssesment <b>E</b>nvironment
            </div>
            <div>
              Plataforma de avaliacao e monitoramento de habilidades
              socioemocionais
            </div>
            <br />
            <div>Garantindo a qualidade socio-emocional da sua equipe!</div>
          </div>
          <div className="login-quer-saber">Quer Saber Mais?</div>
          <div className="cta-button-group">
            <button>Contato</button>
            <button>Planos</button>
            <button>Como Funciona?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
