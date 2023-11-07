import React from "react";
import { useFields } from "../context/FieldsContext";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const personalFields = [
  { faTitle: "نوع", key: "type" },
  { faTitle: "نام", key: "first_name" },
  { faTitle: "نام خانوادگی", key: "last_name" },
  { faTitle: "کد ملی", key: "national_code" },
  { faTitle: "تلفن همراه", key: "phone" },
  { faTitle: "استان", key: "provinceName" },
  { faTitle: "شهر", key: "cityName" },
  { faTitle: "بانک", key: "bank_name" },
  { faTitle: "شماره شبا", key: "iban" },
];

const legalFields = [
  { faTitle: "نوع", key: "type" },
  { faTitle: "نام", key: "first_name" },
  { faTitle: "نام خانوادگی", key: "last_name" },
  { faTitle: "شماره ثبت", key: "registeration_number" },
  { faTitle: "تلفن ثابت", key: "tel" },
  { faTitle: "استان", key: "provinceName" },
  { faTitle: "شهر", key: "cityName" },
  { faTitle: "بانک", key: "bank_name" },
  { faTitle: "شماره شبا", key: "iban" },
];

const Register = () => {
  const { fields } = useFields();

  const navigate = useNavigate();

  console.log(fields);

  const submitFields = async () => {
    const { cityName, provinceName, ...requiredFields } = fields;
    console.log(requiredFields);

    try {
      const response = await fetch("http://localhost:3000/api/submit", {
        method: "post",
        body: JSON.stringify(requiredFields),
      });

      const data = await response.json();

      console.log(data);

      if (data.extra?.length > 0) {
        console.log(data.extra);

        navigate("/info", { state: data.extra });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack spacing={2} sx={{ width: "25%", mx: "auto", my: 4 }}>
      {fields.type === "personal" &&
        personalFields.map((f) => (
          <div
            key={f.key}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>{f.faTitle}</span>
            <span>{fields[f.key]}</span>
          </div>
        ))}
      {fields.type === "legal" &&
        legalFields.map((f) => (
          <div
            key={f.key}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>{f.faTitle}</span>
            <span>{fields[f.key]}</span>
          </div>
        ))}

      <Button variant="contained" onClick={submitFields}>
        ثبت
      </Button>
    </Stack>
  );
};

export default Register;
