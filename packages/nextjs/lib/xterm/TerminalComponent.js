import { React,useEffect } from "react";
import { Terminal } from "xterm";
import { FitAddon } from 'xterm-addon-fit';

export default function TerminalComponent() {
    useEffect(() => {

        const term = new Terminal();
        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);

        let ws = new WebSocket("ws://localhost:8081")

        term.open(document.getElementById("terminal"));
        
        // term.write("\x1B[1;3;31mCloudKit\x1B[0m $ ");
        term.onData( (e) => {
            ws.send(e)
        })
        ws.onmessage = ((e) => {
            term.write(e.data)
        });
        fitAddon.fit()
    }, []);

    return <div id="terminal" className="xterm-private"/>;
}
