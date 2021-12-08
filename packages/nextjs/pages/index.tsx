import type { NextPage } from 'next'
import React from "react";
import dynamic from "next/dynamic";

const DynamicTerminal = dynamic(() => import("../lib/xterm/TerminalComponent"), {
  ssr: false,
});

const Home: NextPage = () => {
  
  return <DynamicTerminal />;
}

export default Home
