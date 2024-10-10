import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AvatarIcon, HomeIcon, GearIcon } from "@radix-ui/react-icons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SISCOx256 App",
  description: "Aplicación para gestionar SISCOx256",
};

const logoUrl = "https://github.com/hackatomik.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      >
        <header className="px-5">
          <div className="flex flex-row justify-between gap-2 py-4">
            <Link href="/">
              <Image
                src={logoUrl}
                alt="Logo de Hackatomik [H9]"
                height={40}
                width={40}
              />
            </Link>
            <div className="flex flex-row gap-5">
              <Link href="/acerca">Acerca</Link>
              <Separator orientation="vertical" />
              <Link href="/tribus">Tribus</Link>
              <Separator orientation="vertical" />
              <Link href="/posts">Posts</Link>
              <Separator orientation="vertical" />
              <Link href="/chat">Chat</Link>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="size-10">
                  <AvatarImage src="" />
                  <AvatarFallback>
                    <AvatarIcon className="size-10" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <Link href="/login">
                  <DropdownMenuLabel>Sesión</DropdownMenuLabel>
                </Link>

                <DropdownMenuSeparator />

                <Link href="/perfil">
                  <DropdownMenuItem>Perfil</DropdownMenuItem>
                </Link>
                <Link href="/perfil/proyectos">
                  <DropdownMenuItem>Mis Proyectos</DropdownMenuItem>
                </Link>
                <Link href="/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
                <Link href="/perfil/creditos">
                  <DropdownMenuItem>Créditos</DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />

                <Link href="/config">
                  <DropdownMenuItem className="flex flex-row justify-center">
                    <GearIcon className="size-5" />
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator className="mb-4" />
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <HomeIcon className="size-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
        <footer className="row-start-3 flex flex-col flex-wrap items-center justify-center gap-2 p-6">
          <Separator />
          <Link href="#">
            <Image
              src={logoUrl}
              alt="Logo de Hackatomik [H9]"
              height={40}
              width={40}
            />
          </Link>
          <div>
            Powered by the{" "}
            <Link href="https://hackatomik.com">
              <strong>H9 ©</strong> Team
            </Link>
          </div>
          <div>&</div>
          <Separator className="w-20" />
          <div>
            <Link href="http://www.investigadores.utp.ac.pa/investigadores/victor.lopez/">
              Prof. <strong>Víctor López Cabrera</strong>
            </Link>{" "}
          </div>
          <div>
            @{" "}
            <Link href="https://utp.ac.pa">
              <em>Universidad Tecnológica de Panamá</em> <strong>(UTP)</strong>
            </Link>{" "}
            <Link href="https://fisc.utp.ac.pa">
              <em>Facultad de Ingeniería de Sistemas Computacionales</em>{" "}
              <strong>(FISC)</strong>
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
