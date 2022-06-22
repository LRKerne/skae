import React from "react";

export default function PersonalInfo({ formData, setFormData }:any) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Nome..."
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      <input
        type="text"
        placeholder="Sobrenome..."
        value={formData.sobreNome}
        onChange={(e) =>
          setFormData({ ...formData, sobreNome: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Numero Telefone..."
        value={formData.numeroTelefone}
        onChange={(e) =>
          setFormData({ ...formData, numeroTelefone: e.target.value })
        }
      />
    </div>
  );
}
