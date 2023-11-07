import { Button, Stack, TextField } from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFields } from "../context/FieldsContext";

const Bank = () => {
  const navigate = useNavigate();

  const { setFields } = useFields();

  const schema = yup.object({
    bank_name: yup.string().required("وارد کردن نام بانک الزامیست"),
    iban: yup
      .string()
      .required("وارد کردن شماره شبا الزامیست")
      .min(24, "شماره وارد شده صحیح نیست")
      .max(24, "شماره وارد شده صحیح نیست"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (inputData) => {
    setFields((prev) => ({ ...prev, ...inputData }));
    navigate("/register");

    console.log(inputData);
  };

  return (
    <Stack
      spacing={2}
      component="form"
      sx={{ width: "25%", mx: "auto", my: 4 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        size="small"
        label="نام بانک"
        {...register("bank_name")}
        error={Boolean(errors.bank_name)}
        helperText={errors.bank_name?.message || ""}
      />

      <TextField
        size="small"
        type="number"
        label="شماره شبا"
        {...register("iban")}
        error={Boolean(errors.iban)}
        helperText={errors.iban?.message || ""}
      />

      <Button type="submit" variant="contained">
        ادامه
      </Button>
    </Stack>
  );
};

export default Bank;
