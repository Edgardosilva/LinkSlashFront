import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { z } from "zod";
import Loader from "../components/Loader";

const urlSchema = z.string().url("El valor debe ser una URL válida");

const InputBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      urlSchema.parse(inputValue);
      handleShorten();
      setError("");
    } catch (e) {
      setError(e.errors[0].message);
    }
  };

  const handleShorten = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://linkslash.vercel.app/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl: inputValue }),
      });
      const data = await response.json();
      if (!response.ok) {
        setIsLoading(true);
      }
      setShortenedUrl(data.shortUrl);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-6 flex-col items-center">
        <form action="" className="flex gap-4" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Ingresa tu enlace"
            variant="outlined"
            className="w-96"
            onChange={handleChange}
            error={!!error}
            helperText={error}
          />
          <Button
            variant="contained"
            color="primary"
            className="h-[56px]"
            type="submit"
          >
            Acortar
          </Button>
        </form>
      </div>
      <div className="font-bold text-xl h-16 mt-10 flex justify-center">
        {isLoading ? (
            <Loader />
          ) : (
            shortenedUrl && (
              <a
                href={`https://linkslash.vercel.app/${shortenedUrl}`}
                className="h-16 hover: bg-blue-600, hover: cursor-pointer"
              >
                linkslash.vercel.app/{shortenedUrl}
              </a>
            )
          )}
      </div>
    </>
  );
};

export default InputBar;
