import { Button, Stack, TextField } from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useLocation, useNavigate } from "react-router-dom";
import { useFields } from "../context/FieldsContext";

const Info = () => {
  const navigate = useNavigate();

  const { search } = useLocation();

  const type = search.substring(search.indexOf("?type=") + 6);

  const isInLegalMode = type === "legal";

  const { fields, setFields } = useFields();

  const location = useLocation();
  console.log(location);
  const serverErrors = location.state;

  console.log(serverErrors);

  const schema = yup.object({
    first_name: yup.string().required("وارد کردن نام الزامیست"),
    last_name: yup.string().required("وارد کردن نام خانوادگی الزامیست"),
    ...(isInLegalMode
      ? {
          registeration_number: yup
            .string()
            .required("وارد کردن شماره ثبت الزامیست")
            .min(10, "مقدار وارد شده صحیح نیست")
            .max(10, "مقدار وارد شده صحیح نیست"),
        }
      : {
          national_code: yup
            .string()
            .required("وارد کردن کد ملی الزامیست")
            .min(10, "مقدار وارد شده صحیح نیست")
            .max(10, "مقدار وارد شده صحیح نیست"),
        }),

    ...(isInLegalMode
      ? {
          tel: yup
            .string()
            .required("وارد کردن تلفن ثابت الزامیست")
            .min(10, "مقدار وارد شده صحیح نیست")
            .max(10, "مقدار وارد شده صحیح نیست"),
        }
      : {
          phone: yup
            .string()
            .required("وارد کردن تلفن همراه الزامیست")
            .min(10, "مقدار وارد شده صحیح نیست")
            .max(10, "مقدار وارد شده صحیح نیست"),
        }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: fields,
  });

  const onSubmit = (inputData) => {
    setFields((prev) => ({ ...prev, ...inputData, type }));
    navigate("/address");
    console.log(inputData)
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
        label="نام"
        {...register("first_name")}
        error={Boolean(errors.first_name)}
        helperText={errors.first_name?.message || ""}
      />
      <TextField
        size="small"
        label="نام خانوادگی"
        {...register("last_name")}
        error={Boolean(errors.last_name)}
        helperText={errors.last_name?.message || ""}
      />

      {isInLegalMode && (
        <>
          <TextField
            size="small"
            type="number"
            label="شماره ثبت"
            {...register("registeration_number")}
            error={Boolean(errors.registeration_number)}
            helperText={errors.registeration_number?.message || ""}
          />
          <TextField
            size="small"
            type="number"
            label="تلفن ثابت"
            {...register("tel")}
            error={Boolean(errors.tel)}
            helperText={errors.tel?.message || ""}
          />
        </>
      )}

      {!isInLegalMode && (
        <>
          <TextField
            size="small"
            type="number"
            label="کد ملی"
            {...register("national_code")}
            error={
              Boolean(errors.national_code) ||
              serverErrors?.some((error) => error.field === "national_code")
            }
            helperText={
              errors.national_code?.message ||
              serverErrors?.some((error) => error.field === "national_code")
                ? serverErrors?.find((error) => error.field === "national_code")
                    .error
                : ""
            }
          />
          <TextField
            size="small"
            type="number"
            label="تلفن همراه"
            {...register("phone")}
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message || ""}
          />
        </>
      )}

      <Button type="submit" variant="contained">
        ادامه
      </Button>
    </Stack>
  );
};

export default Info;
