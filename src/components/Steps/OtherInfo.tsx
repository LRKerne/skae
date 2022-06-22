import React from "react";

export default function OtherInfo({ formData, setFormData }:any) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) =>
          setFormData({ ...formData, nationality: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) => setFormData({ ...formData, other: e.target.value })}
      />
    </div>
  );
}
