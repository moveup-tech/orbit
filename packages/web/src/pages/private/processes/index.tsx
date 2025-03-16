import { Container } from "@/components/surfaces/container";
import { Logs, Pause, Play, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

export function Processes() {
  return (
    <Container title="Processos">
      <div className="w-full max-w-7xl m-auto p-4">
        <h2 className="text-2xl font-bold">Processos</h2>
        <p className="dark:text-zinc-500">
          Aqui estão listados todos os processos <br />
          em seu servidor
        </p>

        <table className="w-full mt-8">
          <thead>
            <tr>
              <th className="text-left rounded-tl text-sm font-medium dark:bg-zinc-900 border-b dark:border-b-zinc-800 p-4">
                Nome
              </th>
              <th className="text-left text-sm font-medium dark:bg-zinc-900 border-b dark:border-b-zinc-800 p-4">
                Tamanho
              </th>
              <th className="text-left text-sm font-medium dark:bg-zinc-900 border-b dark:border-b-zinc-800 p-4">
                Pid
              </th>
              <th className="text-left text-sm font-medium dark:bg-zinc-900 border-b dark:border-b-zinc-800 p-4">
                Memoria
              </th>
              <th className="text-left text-sm font-medium dark:bg-zinc-900 border-b dark:border-b-zinc-800 p-4">
                CPU
              </th>
              <th className="text-left rounded-tr text-sm font-medium dark:bg-zinc-900 border-b dark:border-b-zinc-800 p-4">
                Opções
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                Aplicação exemplo
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                16 mb
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                123456
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                2GB
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                10%
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800 flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <button className="p-1 rounded border text-emerald-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <RefreshCcw size={14} />
                  </button>
                  <button className="p-1 rounded border text-amber-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <Pause size={14} />
                  </button>
                  <button className="p-1 rounded border text-sky-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <Play size={14} />
                  </button>
                  <Link
                    to="#"
                    target="_blank"
                    className="p-1 rounded border  dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <Logs size={14} />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                Aplicação exemplo
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                16 mb
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                123456
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                2GB
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                10%
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800 flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <button className="p-1 rounded border text-emerald-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <RefreshCcw size={14} />
                  </button>
                  <button className="p-1 rounded border text-amber-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <Pause size={14} />
                  </button>
                  <button className="p-1 rounded border text-sky-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <Play size={14} />
                  </button>
                  <Link
                    to="#"
                    target="_blank"
                    className="p-1 rounded border  dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <Logs size={14} />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                Aplicação exemplo
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                16 mb
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                123456
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                2GB
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                10%
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800 flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <button className="p-1 rounded border text-emerald-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <RefreshCcw size={14} />
                  </button>
                  <button className="p-1 rounded border text-amber-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <Pause size={14} />
                  </button>
                  <button className="p-1 rounded border text-sky-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <Play size={14} />
                  </button>
                  <Link
                    to="#"
                    target="_blank"
                    className="p-1 rounded border  dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <Logs size={14} />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                Aplicação exemplo
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                16 mb
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                123456
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                2GB
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800">
                10%
              </td>
              <td className="text-sm text-left p-4 border-b dark:border-b-zinc-800 flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <button className="p-1 rounded border text-emerald-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <RefreshCcw size={14} />
                  </button>
                  <button className="p-1 rounded border text-amber-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <Pause size={14} />
                  </button>
                  <button className="p-1 rounded border text-sky-500 dark:border-zinc-800 dark:bg-zinc-900">
                    <Play size={14} />
                  </button>
                  <Link
                    to="#"
                    target="_blank"
                    className="p-1 rounded border  dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <Logs size={14} />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}
