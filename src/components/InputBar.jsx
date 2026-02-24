import React, { useState } from "react";
import { z } from "zod";
import Loader from "../components/Loader";

const urlSchema = z.string().url("El valor debe ser una URL válida");

const InputBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://linkslash.vercel.app/${shortenedUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      setApiError("");
      setShortenedUrl("");
      const response = await fetch("https://linkslash.vercel.app/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl: inputValue }),
      });
      const data = await response.json();
      if (!response.ok) {
        setApiError(data.message || "Error al acortar el enlace");
        return;
      }
      setShortenedUrl(data.shortUrl);
    } catch (e) {
      setApiError("No se pudo conectar con el servidor");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-6 flex-col items-center">
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresa tu enlace"
            value={inputValue}
            onChange={handleChange}
            className="w-72 md:w-[520px] bg-white/10 border border-white/20 text-white placeholder-white/30 px-3 py-[15px] focus:outline-none focus:border-violet-400 transition-all duration-200"
          />
          <button
            type="submit"
            className="h-[56px] bg-violet-500 hover:bg-violet-600 text-white font-medium px-4 transition-all duration-200"
          >
            Acortar
          </button>
        </form>
        {error && (
          <p className="text-red-400 text-sm mt-1">{error}</p>
        )}
        {apiError && (
          <p className="text-red-400 text-sm mt-1">{apiError}</p>
        )}
      </div>

      <div className="font-bold text-xl h-16 mt-10 flex justify-center">
        {isLoading ? (
          <Loader />
        ) : (
          shortenedUrl && (
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={handleCopy}
                className="text-violet-300 hover:text-violet-200 cursor-pointer transition-colors duration-200"
              >
                linkslash.vercel.app/{shortenedUrl}
              </button>
              <span className="text-white/30 text-xs">
                {copied ? "✓ ¡Copiado!" : "click para copiar"}
              </span>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default InputBar;
