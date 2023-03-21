import { useState } from "react";
import Head from 'next/head'
import { Kanban } from "@/03_organisms/Kanban";
import { Planning } from "@/03_organisms/Planning";
import { Main } from '@/04_templates/MainPanel';
import {useSwitcher} from '@/02_molecules/useSwitcher'

const menuItems = ['Planning', "Kanban"]

export default function Home() {
  const [active, render] = useSwitcher(menuItems)

  return <>
    <Head>
      <title>Degino Backlog</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      {render}
      {active === 0 && <Planning />}
      {active === 1 && <Kanban />}
    </Main>
  </>
}
