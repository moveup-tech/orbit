import { Github } from "lucide-react";

import { Container } from "@/components/surfaces/container";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Container title="Login">
      <div className="w-full h-screen items-center justify-center flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold">
            Orb<span className="text-amber-500">i</span>t
          </h1>
          <small className="text-xs">The open source pm2 process manager</small>
        </div>
        <button className="flex gap-2 items-center px-8 py-2 dark:bg-zinc-800 dark:hover:bg-zinc-900 transition-colors rounded cursor-pointer">
          Entre com sua conta <Github />
        </button>

        <small className="text-xs mt-16">
          Ao clicar você concorda com nossos{" "}
          <Link className="underline text-zinc-500" to="#">
            Termos
          </Link>{" "}
          e{" "}
          <Link className="underline text-zinc-500" to="#">
            Condições
          </Link>
        </small>
      </div>
    </Container>
  );
}
