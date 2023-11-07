import { Button, MenuItem, Stack, TextField } from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFields } from "../context/FieldsContext";

const fetchProvinces = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/provinces");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
    // toast.error(error.message)
  }
};

const fetchCities = async (provinceId) => {
  const res = await fetch(`http://localhost:3000/api/cities/${provinceId}`);
  const data = await res.json();
  return data.results;
};

const Address = () => {
  const navigate = useNavigate();

  const { setFields } = useFields();

  const schema = yup.object({
    province: yup.string().required("انتخاب استان الزامیست"),
    city: yup.string().required("انتخاب استان الزامیست"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { data: provinces } = useQuery({
    queryKey: ["provinces"],
    queryFn: fetchProvinces,
    staleTime: Infinity,
    placeholderData: [],
  });

  const { data: cities } = useQuery({
    queryKey: ["cities", watch("province")],
    queryFn: () => fetchCities(watch("province")),
    staleTime: Infinity,
    placeholderData: [],
    enabled: Boolean(watch("province")),
  });

  const onSubmit = (inputData) => {
    const { province, city } = inputData;

    const provinceName = provinces.find((p) => p.id === Number(province)).name;
    const cityName = cities.find((c) => c.id === Number(city)).name;

    setFields((prev) => ({
      ...prev,
      province: Number(province),
      city: Number(city),
      provinceName,
      cityName,
    }));

    navigate("/bank");
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
        select
        label="استان"
        {...register("province")}
        error={Boolean(errors.province)}
        helperText={errors.province?.message || ""}
      >
        {provinces.map((p) => (
          <MenuItem key={p.id} value={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        size="small"
        select
        label="شهر"
        {...register("city")}
        error={Boolean(errors.city)}
        helperText={errors.city?.message || ""}
      >
        {cities.map((p) => (
          <MenuItem key={p.id} value={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </TextField>

      <Button type="submit" variant="contained">
        ادامه
      </Button>
    </Stack>
  );
};

export default Address;
