import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { CiFaceSmile } from "react-icons/ci";
import { Textarea } from "../../components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

const MainScreen: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [agree, setAgree] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({
    title: false,
    file: false,
    agree: false,
  });

  useEffect(() => {
    if (submit) {
      const timer = setTimeout(() => {
        setSubmit(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      title: title === "",
      file: file === null,
      agree: !agree,
    };
    setErrors(newErrors);

    if (!newErrors.title && !newErrors.file && !newErrors.agree) {
      setSubmit(true);
    }
  };

  const handleCheckboxClick = () => {
    setAgree(!agree);
  };

  const alertVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl bg-white border border-[#CCCCCC] rounded-[16px] p-6">
        <form onSubmit={handleSubmit}>
          <h1 className="text-black font-bold text-[22px] text-center mb-6 font-roboto leading-[26px]">
            Bem Vindo {name} !!!
          </h1>
          <div>
            <p className="text-[20px] font-roboto font-normal leading-[19px] mb-4">
              Coloque aqui o seu Projeto:
            </p>
          </div>
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Título</CardTitle>
              <Input
                className="border-gray-300 bg-slate-50 rounded-xl w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && (
                <p className="text-red-500">O título é obrigatório.</p>
              )}
            </CardHeader>
            <CardContent>
              <p>Descrição do Projeto (opcional)</p>
              <Textarea
                className="border-gray-300 h-20 p-2 rounded-xl mt-3 w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </CardContent>
            <CardContent>
              <p>Suba Aqui o Arquivo</p>
              <Input
                className="bg-slate-300 rounded-xl w-full"
                id="fileInput"
                name="fileInput"
                type="file"
                onChange={(e) =>
                  setFile(e.target.files ? e.target.files[0] : null)
                }
              />
              {errors.file && (
                <p className="text-red-500">O arquivo é obrigatório.</p>
              )}
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox checked={agree} onClick={handleCheckboxClick} />
                <p className="ml-1">Concordo com os termos de privacidade</p>
                {errors.agree && (
                  <p className="text-red-500 ml-1 text-xs">
                    Você deve concordar com os termos de privacidade.
                  </p>
                )}
              </div>

              <Button
                className="bg-green-400 w-20 p-2 text-black border-none rounded-xl hover:bg-green-300 duration-100"
                type="submit"
                title="Enviar"
                variant="outline"
              >
                Enviar
              </Button>
            </CardFooter>
          </Card>
          <AnimatePresence>
            {submit && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={alertVariants}
                className="absolute top-10 left-10"
              >
                <Alert className="bg-lime-200 rounded-2xl p-10 w-80 mt-4">
                  <AlertTitle className="text-2xl font-semibold flex items-center gap-2">
                    <CiFaceSmile size={30} color="black" /> Parabéns!!!!
                  </AlertTitle>
                  <AlertDescription className="text-xl flex items-center">
                    Seu Projeto foi Subido com Sucesso
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
};

export default MainScreen;
