import { Bell, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b dark:border-b-zinc-800 dark:bg-zinc-900">
      <div className="w-full flex items-center justify-between max-w-7xl m-auto p-4">
        <div className="flex gap-4 items-center">
          <strong className="text-xl">Orbit</strong>
          <div className="h-[32px] w-[2px] bg-zinc-800" />
          <nav className="h-fit">
            <ul className="flex gap-4">
              <li>
                <Link to="/me/inicio">Inicio</Link>
              </li>
              <li>
                <Link to="/me/processos">Processos</Link>
              </li>
              <li>
                <Link to="/me/configuracoes">Configurações</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <img
              src="https://github.com/daniellvaz.png"
              className="w-[32px] h-[32px] rounded-full "
            />
            <ChevronDown />
          </div>

          <div className="h-[32px] w-[2px] bg-zinc-800" />

          <button className="dark:bg-zinc-950 dark:hover:bg-zinc-900 transition-colors cursor-pointer border border-zinc-800 rounded px-2">
            <Bell size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
